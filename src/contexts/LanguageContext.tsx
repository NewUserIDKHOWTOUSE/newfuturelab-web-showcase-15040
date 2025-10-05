import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Over Ons',
    'nav.services': 'Diensten',
    'nav.websites': 'Websites',
    'nav.seo': 'SEO & Lead Gen',
    'nav.crm': 'CRM Systemen',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.company': 'GammaWeb',
    'hero.description': 'Wij ontwikkelen innovatieve weboplossingen die uw bedrijf naar het volgende niveau tillen. Van custom websites tot complexe web applicaties.',
    'hero.viewServices': 'Bekijk Onze Diensten',
    'hero.contactUs': 'Contact Opnemen',
    
    // Services
    'services.title': 'Onze',
    'services.titleHighlight': 'Diensten',
    'services.description': 'Wij bieden een volledig scala aan webontwikkelingsdiensten om uw digitale ambities waar te maken.',
    'service.customWebsite': 'Custom Website Development',
    'service.customWebsiteDesc': 'Op maat gemaakte websites die perfect aansluiten bij uw bedrijfsbehoeften.',
    'service.ecommerce': 'E-commerce Development',
    'service.ecommerceDesc': 'Krachtige online winkels met geïntegreerde betalingssystemen en inventarisbeheer.',
    'service.cms': 'CMS Development',
    'service.cmsDesc': 'Gebruiksvriendelijke content management systemen voor eenvoudig beheer van uw website.',
    'service.frontend': 'Frontend Development',
    'service.frontendDesc': 'Moderne, interactieve gebruikersinterfaces met de nieuwste technologieën.',
    'service.backend': 'Backend Development',
    'service.backendDesc': 'Robuuste server-side oplossingen voor complexe bedrijfsprocessen.',
    'service.fullstack': 'Full-Stack Development',
    'service.fullstackDesc': 'Complete weboplossingen van database tot gebruikersinterface.',
    'service.responsive': 'Responsive Design',
    'service.responsiveDesc': 'Websites die perfect werken op alle apparaten en schermformaten.',
    'service.webapp': 'Web App Development',
    'service.webappDesc': 'Krachtige web applicaties voor uw specifieke bedrijfsprocessen.',
    'service.api': 'API Integration',
    'service.apiDesc': 'Naadloze integratie met externe diensten en systemen.',
    'service.seo': 'SEO Optimization',
    'service.seoDesc': 'Optimalisatie voor zoekmachines om uw online zichtbaarheid te vergroten.',
    'service.security': 'Security Features',
    'service.securityDesc': 'Geavanceerde beveiligingsmaatregelen om uw data en gebruikers te beschermen.',
    'service.maintenance': 'Maintenance Services',
    'service.maintenanceDesc': 'Doorlopend onderhoud en updates om uw website optimaal te laten functioneren.',
    'service.uiux': 'UI/UX Design',
    'service.uiuxDesc': 'Intuïtieve en aantrekkelijke designs die gebruikers een geweldige ervaring bieden.',
    
    // About
    'about.title': 'Over',
    'about.titleHighlight': 'GammaWeb',
    'about.description': 'GammaWeb is een toonaangevend webontwikkelingsbedrijf dat zich specialiseert in het creëren van krachtige digitale oplossingen die uw bedrijf naar het volgende niveau tillen.',
    'about.goalOriented': 'Doelgericht',
    'about.goalOrientedDesc': 'Wij focussen op resultaten die uw bedrijfsdoelen ondersteunen.',
    'about.experiencedTeam': 'Ervaren Team',
    'about.experiencedTeamDesc': 'Ons team bestaat uit gepassioneerde developers met jarenlange ervaring.',
    'about.innovative': 'Innovatief',
    'about.innovativeDesc': 'Wij blijven voorop lopen met de nieuwste technologieën en trends.',
    'about.quality': 'Kwaliteit',
    'about.qualityDesc': 'Hoogste kwaliteit code en design standaarden in elk project.',
    'about.whyTitle': 'Waarom kiezen voor GammaWeb?',
    'about.whyDesc1': 'Met meer dan 10 jaar ervaring in webontwikkeling hebben wij honderden succesvolle projecten opgeleverd. Van startup tot enterprise, wij begrijpen de unieke uitdagingen van elk bedrijf en leveren oplossingen die écht werken.',
    'about.whyDesc2': 'Ons team bestaat uit specialisten in frontend, backend, UI/UX design en DevOps. Samen zorgen wij ervoor dat uw project niet alleen technisch perfect is, maar ook gebruiksvriendelijk en toekomstbestendig.',
    
    // Footer
    'footer.company': 'JaySolutions',
    'footer.description': 'Innovatieve webontwikkeling voor de toekomst. Wij transformeren uw digitale visie tot werkelijkheid met cutting-edge technologie en creatieve oplossingen.',
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.services': 'Diensten',
    'footer.about': 'Over Ons',
    'footer.contact': 'Contact',
    'footer.contactInfo': 'Contact Info',
    'footer.kvk': 'KVK',
    'footer.copyright': '© 2024 JaySolutions. Alle rechten voorbehouden.',
    
    // Services Dropdown
    'servicesDropdown.websites.title': 'Website Ontwikkeling',
    'servicesDropdown.websites.description': 'Custom websites & webshops',
    'servicesDropdown.crm.title': 'CRM Systemen',
    'servicesDropdown.crm.description': 'Klantenbeheer oplossingen',
    'servicesDropdown.seo.title': 'SEO & Lead Generation',
    'servicesDropdown.seo.description': 'Online zichtbaarheid & leads',
    
    // Contact
    'contact.title': 'Neem',
    'contact.titleHighlight': 'Contact',
    'contact.subtitle': 'Op',
    'contact.description': 'Klaar om uw project te starten? Neem contact met ons op voor een vrijblijvend gesprek over uw digitale ambities.',
    'contact.info': 'Contactgegevens',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefoon',
    'contact.address': 'Adres',
    'contact.form.title': 'Stuur ons een bericht',
    'contact.form.name': 'Naam',
    'contact.form.email': 'E-mail',
    'contact.form.company': 'Bedrijf',
    'contact.form.message': 'Bericht',
    'contact.form.placeholder': 'Vertel ons over uw project...',
    'contact.form.submit': 'Verstuur Bericht',
    'contact.form.sending': 'Verzenden...',
    'contact.form.success': 'Bericht verzonden!',
    'contact.form.successDesc': 'Wij nemen zo snel mogelijk contact met u op.',
    'contact.form.error': 'Vereiste velden ontbreken',
    'contact.form.errorDesc': 'Vul alle verplichte velden in.',
    'contact.form.emailError': 'Ongeldig e-mailadres',
    'contact.form.emailErrorDesc': 'Voer een geldig e-mailadres in.',
    'contact.why.title': 'Waarom kiezen voor ons?',
    'contact.why.1': 'Gratis consultatie en projectadvies',
    'contact.why.2': 'Transparante communicatie tijdens het hele proces',
    'contact.why.3': 'Onderhoud en support na oplevering',
    'contact.why.4': 'Concurrerende prijzen met hoogste kwaliteit',
    
    // Websites page
    'websites.hero.title': 'Website',
    'websites.hero.highlight': 'Ontwikkeling',
    'websites.hero.description': 'Van concept tot lancering - wij creëren websites die uw bedrijf naar het volgende niveau tillen',
    'websites.hero.cta': 'Start Uw Project',
    'websites.hero.portfolio': 'Bekijk Portfolio',
    'websites.services.title': 'Onze Website',
    'websites.services.highlight': 'Diensten',
    'websites.services.description': 'Alles wat u nodig heeft voor een succesvolle online aanwezigheid, van design tot onderhoud',
    'websites.process.title': 'Ons',
    'websites.process.highlight': 'Ontwikkelproces',
    'websites.process.description': 'Een gestructureerde aanpak die zorgt voor optimale resultaten',
    'websites.cta.title': 'Klaar voor Uw',
    'websites.cta.highlight': 'Nieuwe Website',
    'websites.cta.description': 'Laten we samen uw digitale ambities realiseren met een website die echt impact maakt',
    'websites.cta.button': 'Start Vandaag',
    'websites.examples.title': 'Voorbeelden van Onze',
    'websites.examples.highlight': 'Projecten',
    
    // SEO page
    'seo.hero.title': 'SEO &',
    'seo.hero.highlight': 'Lead Generation',
    'seo.hero.description': 'Verhoog uw online zichtbaarheid en genereer meer kwaliteitsvolle leads met onze bewezen SEO strategieën',
    'seo.hero.cta': 'Gratis SEO Audit',
    'seo.hero.results': 'Bekijk Resultaten',
    'seo.services.title': 'SEO',
    'seo.services.highlight': 'Diensten',
    'seo.services.description': 'Complete SEO en lead generation oplossingen voor maximale online impact',
    'seo.results.title': 'Bewezen',
    'seo.results.highlight': 'Resultaten',
    'seo.results.description': 'Onze data-gedreven aanpak levert meetbare resultaten voor onze klanten',
    'seo.examples.title': 'Succesvolle',
    'seo.examples.highlight': 'Cases',
    
    // CRM page
    'crm.hero.title': 'CRM',
    'crm.hero.highlight': 'Systemen',
    'crm.hero.description': 'Optimaliseer uw klantrelaties en verhoog uw verkoop met op maat gemaakte CRM oplossingen',
    'crm.hero.cta': 'Vraag Demo Aan',
    'crm.hero.features': 'Bekijk Features',
    'crm.features.title': 'CRM',
    'crm.features.highlight': 'Functionaliteiten',
    'crm.features.description': 'Alles wat u nodig heeft om uw klantrelaties te optimaliseren en uw verkoop te verhogen',
    'crm.examples.title': 'CRM',
    'crm.examples.highlight': 'Implementaties',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.websites': 'Websites',
    'nav.seo': 'SEO & Lead Gen',
    'nav.crm': 'CRM Systems',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.company': 'GammaWeb',
    'hero.description': 'We develop innovative web solutions that take your business to the next level. From custom websites to complex web applications.',
    'hero.viewServices': 'View Our Services',
    'hero.contactUs': 'Contact Us',
    
    // Services
    'services.title': 'Our',
    'services.titleHighlight': 'Services',
    'services.description': 'We offer a full range of web development services to realize your digital ambitions.',
    'service.customWebsite': 'Custom Website Development',
    'service.customWebsiteDesc': 'Tailor-made websites that perfectly align with your business needs.',
    'service.ecommerce': 'E-commerce Development',
    'service.ecommerceDesc': 'Powerful online stores with integrated payment systems and inventory management.',
    'service.cms': 'CMS Development',
    'service.cmsDesc': 'User-friendly content management systems for easy website management.',
    'service.frontend': 'Frontend Development',
    'service.frontendDesc': 'Modern, interactive user interfaces with the latest technologies.',
    'service.backend': 'Backend Development',
    'service.backendDesc': 'Robust server-side solutions for complex business processes.',
    'service.fullstack': 'Full-Stack Development',
    'service.fullstackDesc': 'Complete web solutions from database to user interface.',
    'service.responsive': 'Responsive Design',
    'service.responsiveDesc': 'Websites that work perfectly on all devices and screen sizes.',
    'service.webapp': 'Web App Development',
    'service.webappDesc': 'Powerful web applications for your specific business processes.',
    'service.api': 'API Integration',
    'service.apiDesc': 'Seamless integration with external services and systems.',
    'service.seo': 'SEO Optimization',
    'service.seoDesc': 'Search engine optimization to increase your online visibility.',
    'service.security': 'Security Features',
    'service.securityDesc': 'Advanced security measures to protect your data and users.',
    'service.maintenance': 'Maintenance Services',
    'service.maintenanceDesc': 'Ongoing maintenance and updates to keep your website running optimally.',
    'service.uiux': 'UI/UX Design',
    'service.uiuxDesc': 'Intuitive and attractive designs that provide users with a great experience.',
    
    // About
    'about.title': 'About',
    'about.titleHighlight': 'GammaWeb',
    'about.description': 'GammaWeb is a leading web development company that specializes in creating powerful digital solutions that take your business to the next level.',
    'about.goalOriented': 'Goal-Oriented',
    'about.goalOrientedDesc': 'We focus on results that support your business objectives.',
    'about.experiencedTeam': 'Experienced Team',
    'about.experiencedTeamDesc': 'Our team consists of passionate developers with years of experience.',
    'about.innovative': 'Innovative',
    'about.innovativeDesc': 'We stay ahead with the latest technologies and trends.',
    'about.quality': 'Quality',
    'about.qualityDesc': 'Highest quality code and design standards in every project.',
    'about.whyTitle': 'Why choose GammaWeb?',
    'about.whyDesc1': 'With over 10 years of experience in web development, we have delivered hundreds of successful projects. From startup to enterprise, we understand the unique challenges of each business and deliver solutions that truly work.',
    'about.whyDesc2': 'Our team consists of specialists in frontend, backend, UI/UX design and DevOps. Together we ensure that your project is not only technically perfect, but also user-friendly and future-proof.',
    
    // Footer
    'footer.company': 'JaySolutions',
    'footer.description': 'Innovative web development for the future. We transform your digital vision into reality with cutting-edge technology and creative solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.services': 'Services',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.contactInfo': 'Contact Info',
    'footer.kvk': 'Chamber of Commerce',
    'footer.copyright': '© 2024 JaySolutions. All rights reserved.',
    
    // Services Dropdown
    'servicesDropdown.websites.title': 'Website Development',
    'servicesDropdown.websites.description': 'Custom websites & web shops',
    'servicesDropdown.crm.title': 'CRM Systems',
    'servicesDropdown.crm.description': 'Customer management solutions',
    'servicesDropdown.seo.title': 'SEO & Lead Generation',
    'servicesDropdown.seo.description': 'Online visibility & leads',
    
    // Contact
    'contact.title': 'Get in',
    'contact.titleHighlight': 'Touch',
    'contact.subtitle': '',
    'contact.description': 'Ready to start your project? Contact us for a no-obligation conversation about your digital ambitions.',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.placeholder': 'Tell us about your project...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent!',
    'contact.form.successDesc': 'We will contact you as soon as possible.',
    'contact.form.error': 'Required fields missing',
    'contact.form.errorDesc': 'Please fill in all required fields.',
    'contact.form.emailError': 'Invalid email address',
    'contact.form.emailErrorDesc': 'Please enter a valid email address.',
    'contact.why.title': 'Why choose us?',
    'contact.why.1': 'Free consultation and project advice',
    'contact.why.2': 'Transparent communication throughout the process',
    'contact.why.3': 'Maintenance and support after delivery',
    'contact.why.4': 'Competitive prices with highest quality',
    
    // Websites page
    'websites.hero.title': 'Website',
    'websites.hero.highlight': 'Development',
    'websites.hero.description': 'From concept to launch - we create websites that take your business to the next level',
    'websites.hero.cta': 'Start Your Project',
    'websites.hero.portfolio': 'View Portfolio',
    'websites.services.title': 'Our Website',
    'websites.services.highlight': 'Services',
    'websites.services.description': 'Everything you need for a successful online presence, from design to maintenance',
    'websites.process.title': 'Our',
    'websites.process.highlight': 'Development Process',
    'websites.process.description': 'A structured approach that ensures optimal results',
    'websites.cta.title': 'Ready for Your',
    'websites.cta.highlight': 'New Website',
    'websites.cta.description': "Let's realize your digital ambitions together with a website that truly makes an impact",
    'websites.cta.button': 'Start Today',
    'websites.examples.title': 'Examples of Our',
    'websites.examples.highlight': 'Projects',
    
    // SEO page
    'seo.hero.title': 'SEO &',
    'seo.hero.highlight': 'Lead Generation',
    'seo.hero.description': 'Increase your online visibility and generate more quality leads with our proven SEO strategies',
    'seo.hero.cta': 'Free SEO Audit',
    'seo.hero.results': 'View Results',
    'seo.services.title': 'SEO',
    'seo.services.highlight': 'Services',
    'seo.services.description': 'Complete SEO and lead generation solutions for maximum online impact',
    'seo.results.title': 'Proven',
    'seo.results.highlight': 'Results',
    'seo.results.description': 'Our data-driven approach delivers measurable results for our clients',
    'seo.examples.title': 'Successful',
    'seo.examples.highlight': 'Cases',
    
    // CRM page
    'crm.hero.title': 'CRM',
    'crm.hero.highlight': 'Systems',
    'crm.hero.description': 'Optimize your customer relationships and increase your sales with custom CRM solutions',
    'crm.hero.cta': 'Request Demo',
    'crm.hero.features': 'View Features',
    'crm.features.title': 'CRM',
    'crm.features.highlight': 'Features',
    'crm.features.description': 'Everything you need to optimize your customer relationships and increase your sales',
    'crm.examples.title': 'CRM',
    'crm.examples.highlight': 'Implementations',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
