// Jayanth Kumar's DevOps Portfolio JavaScript - Purple Theme Version
document.addEventListener('DOMContentLoaded', function() {
    
    // Project data for modal details - Jayanth's actual projects
   
    // Project data for modal details
    const projectDetails = [
        {
            title: "AWS Cloud Infrastructure Deployment",
            details: "Comprehensive AWS infrastructure automation project demonstrating expertise in multi-tier architecture design, infrastructure as code best practices, and secure cloud deployment patterns using Terraform and version control integration. Automated secure multi-tier AWS architecture including VPC configuration with public and private subnets, NAT Gateway and Internet Gateway setup, Auto Scaling Groups for high availability, Elastic Load Balancer for traffic distribution, and secure database deployment in private subnets. This project showcased proficiency in cloud architecture principles, infrastructure automation, and DevOps best practices.",
            github: "https://github.com/Jayanthkandala/aws-infrastructure"
        },
        {
            title: "DevOps CI/CD Pipeline with AWS Deployment",
            details: "Comprehensive DevOps pipeline implementation showcasing integration of multiple tools and technologies for automated application lifecycle management, including security scanning, artifact management, and comprehensive monitoring solutions. Built complete end-to-end CI/CD pipeline for Java web application using Jenkins for orchestration, Maven for build automation, Terraform for infrastructure provisioning, Ansible for configuration management and deployment, Nexus for artifact repository management. Integrated comprehensive security scanning with OWASP, SonarQube, and Trivy. Implemented monitoring and alerting with Prometheus and Grafana for complete observability. This project demonstrated advanced DevOps practices and tool integration expertise.",
            github: "https://github.com/Jayanthkandala/cicd-pipeline"
        },
        {
            title: "Kubernetes Deployment on AWS EKS (2048 Game App)",
            details: "Practical Kubernetes deployment project demonstrating container orchestration, service mesh configuration, load balancing, and AWS EKS integration with focus on scalability and external accessibility patterns. Successfully deployed and managed the 2048 Game application on Amazon EKS cluster using Helm for package management and templating. Configured Kubernetes Ingress controller with AWS Load Balancer Controller integration for external traffic routing. Implemented Application Load Balancer (ALB) with DNS verification for secure external access. Gained extensive hands-on experience in Kubernetes networking, scaling strategies, troubleshooting cluster issues, and AWS cloud-native integrations. This project strengthened expertise in container orchestration and cloud-native application deployment.",
            github: "https://github.com/Jayanthkandala/eks-2048-game"
        },
        {
            title: "Deploying Netflix Application (Monolithic)",
            details: "Comprehensive monolithic application deployment project showcasing expertise in traditional deployment patterns, automated CI/CD pipelines, and infrastructure management. Implemented Jenkins pipelines integrated with Git, Maven, Nexus, Ansible, and Tomcat. Configured automated backup strategies for code and databases, server health monitoring, and resource optimization. Used Ansible for configuration management and secure deployments with vault integration. Managed AWS infrastructure including VPCs, EC2 instances, S3 storage, and IAM policies through Terraform automation. Implemented comprehensive monitoring and alerting with Prometheus and Grafana for production readiness.",
            github: "https://github.com/Jayanthkandala/netflix-monolithic"
        },
        {
            title: "Kubernetes-based Microservices Deployment",
            details: "Advanced microservices deployment project demonstrating expertise in container orchestration, cloud-native architectures, and GitOps practices. Created custom Dockerfiles and optimized container images for efficient resource utilization. Deployed and managed AWS EKS clusters with automated scaling capabilities. Implemented GitOps deployment strategies using ArgoCD for continuous delivery. Configured Kubernetes namespaces, resource quotas, and persistent volumes for multi-tenant architecture. Integrated comprehensive monitoring with Prometheus and Grafana, security scanning with Trivy, and code quality analysis with SonarQube. Managed infrastructure as code using Terraform for AWS services including VPCs, IAM policies, and EKS clusters.",
            github: "https://github.com/Jayanthkandala/k8s-microservices"
        }
    ];

    // Initialize elements
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const backToTopBtn = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');

    // Mobile Navigation Toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Helper function to get header height
    function getHeaderHeight() {
        const header = document.querySelector('.header');
        return header ? header.offsetHeight : 80;
    }

    // Smooth scrolling function
    function smoothScrollTo(targetElement) {
        if (targetElement) {
            const headerHeight = getHeaderHeight();
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
        }
    }

    // Navigation link handlers
    const navigationLinks = document.querySelectorAll('.nav__link');
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                smoothScrollTo(targetSection);
            }
            
            // Close mobile menu
            closeMobileMenu();
        });
    });

    // Hero button handlers
    const heroButtons = document.querySelectorAll('.hero__actions a');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                smoothScrollTo(targetSection);
            }
        });
    });

    // Close mobile menu function
    function closeMobileMenu() {
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        }
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('.nav');
        if (nav && !nav.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Modal functions
    function openModal(projectIndex) {
        const project = projectDetails[projectIndex];
        if (project && modal && modalTitle && modalDetails) {
            modalTitle.textContent = project.title;
            modalDetails.innerHTML = `
                <div class="project-modal-content">
                    <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 24px;">${project.details}</p>
                    <div style="display: flex; gap: 12px; justify-content: flex-end; flex-wrap: wrap;">
                        
                        <button class="btn btn--secondary modal-close-btn">Close</button>
                    </div>
                </div>
            `;
            
            // Show modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            // Add close button handler
            const modalCloseBtn = modalDetails.querySelector('.modal-close-btn');
            if (modalCloseBtn) {
                modalCloseBtn.addEventListener('click', closeModal);
            }
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    // Modal event listeners
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Project details buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('project-details-btn')) {
            e.preventDefault();
            e.stopPropagation();
            const projectIndex = parseInt(e.target.getAttribute('data-project'));
            if (!isNaN(projectIndex)) {
                openModal(projectIndex);
            }
        }
    });

    // Typing Animation
    function typeWriter() {
        const text = "Jayanth Kumar Naidu Kandala";
        const typingElement = document.getElementById('typingText');
        let i = 0;
        
        if (!typingElement) return;
        
        typingElement.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        }
        
        type();
    }

    // Start typing animation
    setTimeout(typeWriter, 1000);

    // Intersection Observer for Skills Animation
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach((bar, index) => {
                    const level = bar.getAttribute('data-level');
                    setTimeout(() => {
                        bar.style.width = level + '%';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe skills section
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }

    // Fade-in Animation Observer
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Apply fade-in animation
    const animatedElements = document.querySelectorAll('.project-card, .certification-card, .skill-category, .achievement-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        fadeObserver.observe(el);
    });

    // Contact Form Handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name')?.trim();
            const email = formData.get('email')?.trim();
            const message = formData.get('message')?.trim();
            
            // Validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                this.reset();
                showNotification('Message sent successfully! Jayanth will get back to you soon.', 'success');
            }, 2000);
        });
    }

    // Email validation
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <span>${message}</span>
                <button class="notification__close" style="background: none; border: none; color: var(--color-text-secondary); cursor: pointer; font-size: 18px; margin-left: 12px;">&times;</button>
            </div>
        `;
        
        let borderColor = 'var(--color-primary)';
        if (type === 'success') borderColor = 'var(--color-success)';
        if (type === 'error') borderColor = 'var(--color-error)';
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10001;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-left: 4px solid ${borderColor};
            border-radius: var(--radius-base);
            padding: 16px;
            box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);
            max-width: 350px;
            color: var(--color-text);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button
        const closeBtn = notification.querySelector('.notification__close');
        const removeNotification = () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        };
        
        if (closeBtn) {
            closeBtn.addEventListener('click', removeNotification);
        }
        
        // Auto remove
        setTimeout(removeNotification, 5000);
    }

    // Back to Top Button
    if (backToTopBtn) {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
        backToTopBtn.style.transition = 'all 0.3s ease';
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll handlers
    let ticking = false;
    
    function updateOnScroll() {
        const scrollTop = window.pageYOffset;
        const header = document.querySelector('.header');
        
        // Update header background
        if (header) {
            if (scrollTop > 100) {
                header.style.background = 'rgba(30, 27, 75, 0.98)';
                header.style.backdropFilter = 'blur(12px)';
                header.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.2)';
            } else {
                header.style.background = 'rgba(30, 27, 75, 0.95)';  
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.1)';
            }
        }
        
        // Update back to top button
        if (backToTopBtn) {
            if (scrollTop > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        }
        
        // Update active navigation
        updateActiveNavigation();
        
        ticking = false;
    }
    
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinksArray = document.querySelectorAll('.nav__link');
        
        let current = '';
        const headerHeight = getHeaderHeight();
        const scrollTop = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksArray.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Window resize handler
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Initialize page
    function initializePage() {
        // Trigger initial scroll event
        updateOnScroll();
        
        // Initialize floating animations
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 2}s`;
        });

        // Add purple theme specific enhancements
        addPurpleThemeEffects();
    }

    // Purple theme specific effects
    function addPurpleThemeEffects() {
        // Add glow effects to interactive elements
        const interactiveElements = document.querySelectorAll('.btn, .social__link, .certification-badge, .achievement-icon');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.filter = 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.5))';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.filter = 'none';
            });
        });

        // Enhanced particle effect for hero section
        createPurpleParticles();
    }

    // Create floating particles for enhanced purple theme
    function createPurpleParticles() {
        const heroBackground = document.querySelector('.hero__background');
        if (!heroBackground) return;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: linear-gradient(45deg, rgba(139, 92, 246, 0.6), rgba(147, 51, 234, 0.4));
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: purpleFloat ${Math.random() * 10 + 10}s linear infinite;
                box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
            `;
            
            heroBackground.appendChild(particle);
        }

        // Add CSS animation for purple particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes purpleFloat {
                0% { 
                    transform: translateY(100vh) rotate(0deg); 
                    opacity: 0; 
                }
                10% { 
                    opacity: 1; 
                }
                90% { 
                    opacity: 1; 
                }
                100% { 
                    transform: translateY(-100vh) rotate(360deg); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }

    initializePage();

    // Console message with purple theme
    console.log(`
    🚀 Jayanth Kumar Naidu Kandala - DevOps Portfolio (Purple Theme)
    ================================================================
    Multi-Cloud DevOps Engineer specializing in:
    - AWS, Azure, GCP cloud platforms
    - Kubernetes & containerization  
    - CI/CD pipeline automation
    - Infrastructure as Code
    - Monitoring & observability
    
    🎨 Now featuring a modern purple/violet color palette!
    
    Contact: kandalajayanth401@gmail.com
    GitHub: https://github.com/Jayanthkandala
    
    Built with DevOps principles and modern web technologies.
    `);
});