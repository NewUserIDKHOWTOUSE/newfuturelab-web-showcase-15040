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
    'hero.title': 'Digitale Transformatie',
    'hero.subtitle': 'voor Moderne Bedrijven',
    'hero.description': 'Wij helpen bedrijven groeien met innovatieve websites, SEO strategieën en op maat gemaakte CRM systemen',
    'hero.cta': 'Start Uw Project',
    'hero.services': 'Bekijk Diensten',
    
    // Services
    'services.title': 'Onze',
    'services.subtitle': 'Diensten',
    'services.description': 'Complete digitale oplossingen om uw bedrijf te laten groeien',
    
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
    'hero.title': 'Digital Transformation',
    'hero.subtitle': 'for Modern Businesses',
    'hero.description': 'We help businesses grow with innovative websites, SEO strategies and custom CRM systems',
    'hero.cta': 'Start Your Project',
    'hero.services': 'View Services',
    
    // Services
    'services.title': 'Our',
    'services.subtitle': 'Services',
    'services.description': 'Complete digital solutions to grow your business',
    
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
