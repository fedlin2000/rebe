document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const backToTop = document.getElementById('backToTop');
    const languageBtn = document.getElementById('currentLang');
    const languageOptions = document.getElementById('languageOptions');
    
    // Système de traduction
    const translations = {
        fr: {
            // Navigation
            'nav-home': 'Accueil',
            'nav-about': 'À Propos',
            'nav-services': 'Services',
            'nav-news': 'Actualités',
            'nav-contact': 'Contact',
            'nav-donate': 'Faire un Don',
            
            // Hero Section
            'hero-title': 'KRI FANM AYITI',
            'hero-subtitle': 'Kri Fanm Ayiti',
            'hero-slogan': 'Pou Fanm ak Timoun ka viv pi byen',
            'hero-description': 'Défendre les droits des femmes et des enfants pour une société plus équitable en Haïti',
            'hero-discover': 'Découvrir',
            'hero-support': 'Soutenir',
            
            // About Section
            'about-title': 'À Propos de KRIFA',
            'about-subtitle': 'Une organisation engagée pour les droits des femmes et des enfants',
            'about-history-title': 'Notre Histoire',
            'about-history-text': 'Fondée le 9 octobre 2016 dans la commune de Carrefour par un groupe de citoyennes haïtiennes, KRIFA est née d\'un désir urgent de répondre aux multiples difficultés auxquelles sont confrontées les femmes et les filles dans la société haïtienne.',
            'about-mission-title': 'Notre Mission',
            'about-mission-text': 'KRIFA a pour mission de mobiliser des ressources financières, humaines et matérielles afin de fournir aux femmes et aux filles victimes de violations de leurs droits une assistance sociale et judiciaire.',
            'about-vision-title': 'Notre Vision',
            'about-vision-text': 'Promouvoir une culture fondée sur le respect des droits des femmes pour créer un environnement protecteur et sécurisant.',
            'about-values-title': 'Nos Valeurs',
            
            // Services Section
            'services-title': 'Nos Services',
            'services-subtitle': 'Une assistance complète pour les femmes et les enfants',
            'service-legal': 'Assistance Juridique',
            'service-legal-desc': 'Accompagnement juridique et judiciaire pour défendre les droits des femmes et des enfants',
            'service-gbv': 'Prise en charge VBG',
            'service-gbv-desc': 'Soutien spécialisé pour les survivantes de violences basées sur le genre',
            'service-psycho': 'Soutien Psychosocial',
            'service-psycho-desc': 'Accompagnement psychologique et social pour la réhabilitation des victimes',
            'service-training': 'Formations',
            'service-training-desc': 'Programmes de formation et sensibilisation sur les droits des femmes',
            'service-reintegration': 'Réinsertion Sociale',
            'service-reintegration-desc': 'Accompagnement pour la réintégration sociale et professionnelle',
            'service-advocacy': 'Plaidoyer',
            'service-advocacy-desc': 'Actions de plaidoyer pour l\'amélioration des politiques publiques',
            
            // Nouvelles traductions
            'news-title': 'Actualités',
            
            // Contact
            'contact-title': 'Contactez-Nous',
            'contact-subtitle': 'Nous sommes là pour vous aider',
            'contact-address': 'Adresse',
            'contact-phone': 'Téléphones',
            'contact-email': 'Email',
            'contact-follow': 'Suivez-nous',
            'contact-form-title': 'Restez en Contact',
            'contact-name': 'Nom complet',
            'contact-subject': 'Sujet',
            'contact-message': 'Message',
            'contact-send': 'Envoyer',
            
            // Donation
            'donation-title': 'Soutenez Notre Mission',
            'donation-subtitle': 'Votre soutien fait la différence dans la vie des femmes et des enfants',
            'donation-why': 'Pourquoi Faire un Don ?',
            'donation-form-title': 'Formulaire de Don',
            'donation-amount': 'Montant du don (USD)',
            'donation-frequency': 'Fréquence',
            'donation-submit': 'Faire un Don'
        },
        
        ht: {
            // Navigation
            'nav-home': 'Akèy',
            'nav-about': 'Konsènan Nou',
            'nav-services': 'Sèvis yo',
            'nav-news': 'Nouvel yo',
            'nav-contact': 'Kontak',
            'nav-donate': 'Bay Kòb',
            
            // Hero Section
            'hero-title': 'KRI FANM AYITI',
            'hero-subtitle': 'Kri Fanm Ayiti',
            'hero-slogan': 'Pou Fanm ak Timoun ka viv pi byen',
            'hero-description': 'Defann dwa fanm yo ak timoun yo pou yon sosyete ki pi jis nan Ayiti',
            'hero-discover': 'Dekouvri',
            'hero-support': 'Sipòte',
            
            // About Section
            'about-title': 'Konsènan KRIFA',
            'about-subtitle': 'Yon òganizasyon ki angaje pou dwa fanm yo ak timoun yo',
            'about-history-title': 'Istwa Nou',
            'about-history-text': 'Ki te fonde nan 9 oktòb 2016 nan komin Kafou a pa yon gwoup sitwayen ayisyen yo, KRIFA te fèt nan yon dezi ijan pou reponn ak anpil difikilte fanm yo ak fi yo ap konfwonte nan sosyete ayisyen an.',
            'about-mission-title': 'Misyon Nou',
            'about-mission-text': 'KRIFA gen misyon pou mobilize resous finansye, imen ak materyèl yo pou bay fanm yo ak fi yo ki viktim vyolasyon dwa yo yon asistans sosyal ak jidisyè.',
            'about-vision-title': 'Vizyon Nou',
            'about-vision-text': 'Pwomote yon kilti ki baze sou respè dwa fanm yo pou kreye yon anviwonman ki pwoteje ak ki an sekirite.',
            'about-values-title': 'Valè Nou yo',
            
            // Services Section
            'services-title': 'Sèvis Nou yo',
            'services-subtitle': 'Yon asistans konplè pou fanm yo ak timoun yo',
            'service-legal': 'Asistans Jidik',
            'service-legal-desc': 'Akonpanyman jidik ak jidisyè pou defann dwa fanm yo ak timoun yo',
            'service-gbv': 'Pran swen VBG',
            'service-gbv-desc': 'Sipò espesyal pou moun ki siviv vyolans ki baze sou sèks la',
            'service-psycho': 'Sipò Psikososyal',
            'service-psycho-desc': 'Akonpanyman sikolojik ak sosyal pou reyabilitasyon viktim yo',
            'service-training': 'Fòmasyon yo',
            'service-training-desc': 'Pwogram fòmasyon ak sensibilizasyon sou dwa fanm yo',
            'service-reintegration': 'Reentegrasyon Sosyal',
            'service-reintegration-desc': 'Akonpanyman pou reentegrasyon sosyal ak pwofesyonèl',
            'service-advocacy': 'Pledye',
            'service-advocacy-desc': 'Aksyon pledye pou amelyore politik piblik yo',
            
            // Nouvelles traductions
            'news-title': 'Nouvel yo',
            
            // Contact
            'contact-title': 'Kontak Nou',
            'contact-subtitle': 'Nou la pou ede w',
            'contact-address': 'Adrès',
            'contact-phone': 'Telefòn yo',
            'contact-email': 'Imèl',
            'contact-follow': 'Swiv nou',
            'contact-form-title': 'Rete nan Kontak',
            'contact-name': 'Non konplè',
            'contact-subject': 'Sijè',
            'contact-message': 'Mesaj',
            'contact-send': 'Voye',
            
            // Donation
            'donation-title': 'Sipòte Misyon Nou',
            'donation-subtitle': 'Sipò w la fè yon diferans nan lavi fanm yo ak timoun yo',
            'donation-why': 'Poukisa Bay Kòb?',
            'donation-form-title': 'Fòm Don',
            'donation-amount': 'Kantite don an (USD)',
            'donation-frequency': 'Frekans',
            'donation-submit': 'Bay Don'
        },
        
        en: {
            // Navigation
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-services': 'Services',
            'nav-news': 'News',
            'nav-contact': 'Contact',
            'nav-donate': 'Donate',
            
            // Hero Section
            'hero-title': 'KRIFA',
            'hero-subtitle': 'Kri Fanm Ayiti',
            'hero-slogan': 'So Women and Children Can Live Better',
            'hero-description': 'Defending the rights of women and children for a more equitable society in Haiti',
            'hero-discover': 'Discover',
            'hero-support': 'Support',
            
            // About Section
            'about-title': 'About KRIFA',
            'about-subtitle': 'An organization committed to the rights of women and children',
            'about-history-title': 'Our History',
            'about-history-text': 'Founded on October 9, 2016 in the commune of Carrefour by a group of Haitian citizens, KRIFA was born from an urgent desire to respond to the multiple difficulties faced by women and girls in Haitian society.',
            'about-mission-title': 'Our Mission',
            'about-mission-text': 'KRIFA\'s mission is to mobilize financial, human and material resources to provide women and girls who are victims of rights violations with social and legal assistance.',
            'about-vision-title': 'Our Vision',
            'about-vision-text': 'Promote a culture based on respect for women\'s rights to create a protective and secure environment.',
            'about-values-title': 'Our Values',
            
            // Services Section
            'services-title': 'Our Services',
            'services-subtitle': 'Comprehensive assistance for women and children',
            'service-legal': 'Legal Assistance',
            'service-legal-desc': 'Legal and judicial support to defend the rights of women and children',
            'service-gbv': 'GBV Support',
            'service-gbv-desc': 'Specialized support for survivors of gender-based violence',
            'service-psycho': 'Psychosocial Support',
            'service-psycho-desc': 'Psychological and social support for victim rehabilitation',
            'service-training': 'Training',
            'service-training-desc': 'Training and awareness programs on women\'s rights',
            'service-reintegration': 'Social Reintegration',
            'service-reintegration-desc': 'Support for social and professional reintegration',
            'service-advocacy': 'Advocacy',
            'service-advocacy-desc': 'Advocacy actions to improve public policies',
            
            // Nouvelles traductions
            'news-title': 'News',
            
            // Contact
            'contact-title': 'Contact Us',
            'contact-subtitle': 'We are here to help you',
            'contact-address': 'Address',
            'contact-phone': 'Phones',
            'contact-email': 'Email',
            'contact-follow': 'Follow us',
            'contact-form-title': 'Stay in Touch',
            'contact-name': 'Full name',
            'contact-subject': 'Subject',
            'contact-message': 'Message',
            'contact-send': 'Send',
            
            // Donation
            'donation-title': 'Support Our Mission',
            'donation-subtitle': 'Your support makes a difference in the lives of women and children',
            'donation-why': 'Why Donate?',
            'donation-form-title': 'Donation Form',
            'donation-amount': 'Donation amount (USD)',
            'donation-frequency': 'Frequency',
            'donation-submit': 'Donate'
        }
    };
    

    
    let currentLanguage = 'fr';
    
    // Fonction pour traduire la page
    function translatePage(lang) {
        currentLanguage = lang;
        const translation = translations[lang];
        
        // Mettre à jour tous les éléments avec data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translation[key]) {
                element.textContent = translation[key];
            }
        });
        
        // Mettre à jour le bouton de langue
        const langFlags = { fr: '🇫🇷 FR', ht: '🇭🇹 HT', en: '🇺🇸 EN' };
        languageBtn.innerHTML = `<i class="fas fa-globe"></i> ${langFlags[lang]}`;
        
        // Sauvegarder la langue choisie
        localStorage.setItem('selectedLanguage', lang);
    }
    
    // Gestion du dropdown de langue
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageOptions.classList.toggle('active');
    });
    
    // Fermer le dropdown quand on clique ailleurs
    document.addEventListener('click', function() {
        languageOptions.classList.remove('active');
    });
    
    // Gestion des options de langue
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            translatePage(selectedLang);
            languageOptions.classList.remove('active');
        });
    });
    
    // Gestion des onglets de galerie
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Retirer la classe active de tous les onglets
            document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
            // Ajouter la classe active à l'onglet cliqué
            this.classList.add('active');
            
            // Animation de changement de contenu
            const galleryGrid = document.querySelector('.gallery-grid');
            galleryGrid.style.opacity = '0.5';
            setTimeout(() => {
                galleryGrid.style.opacity = '1';
            }, 300);
        });
    });
    
    // Charger la langue sauvegardée au démarrage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    translatePage(savedLanguage);
    
    // Navigation mobile
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animation du hamburger
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            bar.style.transform = navMenu.classList.contains('active') 
                ? `rotate(${index === 0 ? 45 : index === 2 ? -45 : 0}deg) translate(${index === 1 ? '100px' : '0'}, ${index === 0 ? '6px' : index === 2 ? '-6px' : '0'})`
                : 'none';
            bar.style.opacity = navMenu.classList.contains('active') && index === 1 ? '0' : '1';
        });
    });
    
    // Fermer le menu mobile lors du clic sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });
    
    // Navbar scroll effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Navbar background
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        
        // Back to top button
        if (currentScrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        // Parallax effect pour le hero
        const hero = document.querySelector('.hero-background');
        if (hero) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Animation des éléments au scroll
        animateOnScroll();
    });
    
    // Back to top
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Animation du bouton
        this.style.transform = 'scale(0.8)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation counter pour les statistiques
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 secondes
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    // Intersection Observer pour les animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Ajouter les classes d'animation
                if (element.classList.contains('animate-count-up')) {
                    animateCounters();
                }
                
                // Animation fade in
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // Observer une seule fois
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments animés
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll(`
            .animate-fade-in,
            .animate-slide-up,
            .animate-slide-left,
            .animate-slide-right,
            .animate-zoom-in,
            .animate-bounce-in,
            .animate-count-up,
            .service-card,
            .about-card,
            .team-member,
            .gallery-item,
            .news-item,
            .value-item
        `);
        
        animatedElements.forEach(element => {
            if (!element.dataset.observed) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                observer.observe(element);
                element.dataset.observed = 'true';
            }
        });
    }
    
    // Initialiser les animations au chargement
    animateOnScroll();
    
    // Formulaire de don
    const donationForm = document.getElementById('donationForm');
    
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Animation de soumission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        // Collecter les données du formulaire
        const formData = new FormData(this);
        const donationData = {
            nom: formData.get('nom'),
            email: formData.get('email'),
            telephone: formData.get('telephone'),
            montant: formData.get('montant'),
            frequence: formData.get('frequence'),
            message: formData.get('message')
        };
        
        // Simuler l'envoi (remplacer par un vrai appel API)
        setTimeout(() => {
            // Préparer l'email
            const emailBody = `
Nouveau don reçu sur le site KRIFA

Informations du donateur:
- Nom: ${donationData.nom}
- Email: ${donationData.email}
- Téléphone: ${donationData.telephone || 'Non fourni'}
- Montant: ${donationData.montant} USD
- Fréquence: ${donationData.frequence}
- Message: ${donationData.message || 'Aucun message'}

Date: ${new Date().toLocaleString('fr-FR')}
            `.trim();
            
            // Créer le lien mailto
            const mailtoLink = `mailto:krifanmayiti@gmail.com?subject=Nouveau don - ${donationData.nom}&body=${encodeURIComponent(emailBody)}`;
            
            // Ouvrir le client email
            window.location.href = mailtoLink;
            
            // Afficher un message de succès
            showNotification('Merci pour votre don ! Votre client email va s\'ouvrir pour finaliser la demande.', 'success');
            
            // Réinitialiser le formulaire
            this.reset();
            
            // Restaurer le bouton
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Animation de succès
            submitBtn.style.background = '#28a745';
            setTimeout(() => {
                submitBtn.style.background = '';
            }, 2000);
            
        }, 1500);
    });
    
    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
        submitBtn.disabled = true;
        
        // Collecter les données
        const formData = new FormData(this);
        const contactData = {
            nom: formData.get('nom'),
            email: formData.get('email'),
            sujet: formData.get('sujet'),
            message: formData.get('message')
        };
        
        setTimeout(() => {
            // Collecter les données
            const formData = new FormData(this);
            const contactData = {
                nom: formData.get('nom'),
                email: formData.get('email'),
                sujet: formData.get('sujet'),
                message: formData.get('message')
            };
            
            // Préparer l'email pour KRIFA
            const emailBody = `
Nouveau message de contact depuis le site KRIFA

Informations:
- Nom: ${contactData.nom}
- Email: ${contactData.email}
- Sujet: ${contactData.sujet}

Message:
${contactData.message}

Date: ${new Date().toLocaleString('fr-FR')}
            `.trim();
            
            // Créer le lien mailto vers l'email de KRIFA
            const mailtoLink = `mailto:krifanmayiti@gmail.com?subject=Contact site web - ${contactData.sujet}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;
            
            showNotification('Message envoyé ! Votre client email va s\'ouvrir.', 'success');
            
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1000);
        });
    }
    
    // Animation des éléments de galerie au clic
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            // Animation de clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }, 150);
            
            // Ici vous pourriez ajouter la logique pour ouvrir une lightbox ou modal
            showNotification('Fonctionnalité de galerie à venir !', 'info');
        });
    });
    
    // Système de notifications
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Styles de la notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
            color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
            border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
            border-radius: 10px;
            padding: 1rem 1.5rem;
            max-width: 400px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;
        
        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: auto;
            padding: 0;
            color: inherit;
        `;
        
        document.body.appendChild(notification);
        
        // Animer l'entrée
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Fermeture automatique
        const autoClose = setTimeout(() => {
            closeNotification();
        }, 5000);
        
        // Fermeture manuelle
        notification.querySelector('.notification-close').addEventListener('click', closeNotification);
        
        function closeNotification() {
            clearTimeout(autoClose);
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }
    
    // Effets hover avancés
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animation des valeurs au survol
    document.querySelectorAll('.value-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.animation = 'none';
            icon.offsetHeight; // Trigger reflow
            icon.style.animation = 'bounceIn 0.6s ease';
        });
    });
    
    // Effet de typing pour le slogan
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Démarrer l'effet typing après le chargement
    setTimeout(() => {
        const sloganElement = document.querySelector('.hero-slogan');
        if (sloganElement) {
            const originalText = sloganElement.textContent;
            typeWriter(sloganElement, originalText, 80);
        }
    }, 2000);
    
    // Gestion du redimensionnement de la fenêtre
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalculer les animations si nécessaire
            animateOnScroll();
        }, 250);
    });
    
    // Préchargement des images (pour de meilleures performances)
    function preloadImages() {
        const imageUrls = [
            'https://logokrim.netlify.app/'
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }
    
    preloadImages();
    
    // Animation du logo dans le footer
    const footerLogo = document.querySelector('.footer-logo img');
    if (footerLogo) {
        footerLogo.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg) scale(1.1)';
        });
        
        footerLogo.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }
    
    // Effet de particules pour le hero (optionnel)
    function createParticles() {
        const heroSection = document.querySelector('.hero');
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        
        heroSection.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Activer les particules sur les grands écrans
    if (window.innerWidth > 768) {
        createParticles();
    }
    
    // Validation en temps réel des formulaires
    function setupFormValidation() {
        const inputs = document.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        const isValid = field.checkValidity() && value !== '';
        
        field.classList.toggle('error', !isValid);
        field.classList.toggle('valid', isValid);
        
        // Styles pour les états de validation
        if (!document.querySelector('#validation-styles')) {
            const validationStyles = document.createElement('style');
            validationStyles.id = 'validation-styles';
            validationStyles.textContent = `
                .form-group input.error,
                .form-group textarea.error {
                    border-color: #e81c25;
                    box-shadow: 0 0 0 3px rgba(232, 28, 37, 0.1);
                }
                
                .form-group input.valid,
                .form-group textarea.valid {
                    border-color: #28a745;
                    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
                }
            `;
            document.head.appendChild(validationStyles);
        }
    }
    
    setupFormValidation();
    
    // Performance monitoring
    function logPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Site load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
            });
        }
    }
    
    logPerformance();
    
    console.log('🎉 Site KRIFA chargé avec succès! Pou Fanm ak Timoun ka viv pi byen');
});

// Fonctions utilitaires globales
window.KRIFA = {
    // Fonction pour ouvrir les réseaux sociaux
    openSocial: function(platform) {
        const urls = {
            facebook: 'https://facebook.com/krifanmayiti',
            instagram: 'https://instagram.com/krifanmayiti',
            twitter: 'https://twitter.com/krifanmayiti',
            linkedin: 'https://linkedin.com/company/krifanmayiti',
            tiktok: 'https://tiktok.com/@krifanmayiti'
        };
        
        if (urls[platform]) {
            window.open(urls[platform], '_blank');
        }
    },
    
    // Fonction pour partager la page
    share: function() {
        if (navigator.share) {
            navigator.share({
                title: 'KRIFA - Kri Fanm Ayiti',
                text: 'Découvrez KRIFA, une organisation qui défend les droits des femmes et des enfants en Haïti',
                url: window.location.href
            });
        } else {
            // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent('Découvrez KRIFA - Kri Fanm Ayiti');
            window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        }
    }
};