import { useState } from "react";
import { Menu, X, ChevronDown, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import gammaWebLogo from "@/assets/gammaweb-logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:scale-105 transition-bounce">
              <img src={gammaWebLogo} alt="GammaWeb" className="h-8 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-smooth ${
                  isActive('/') ? 'text-gradient' : 'text-foreground hover:text-primary'
                }`}
              >
                {t('nav.home')}
              </Link>
              
              <div className="relative group">
                <button
                  className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {t('nav.services')}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 gradient-card border border-border/50 rounded-lg shadow-elegant z-50"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="p-2">
                      <Link
                        to="/diensten/websites"
                        className="block px-4 py-3 text-sm text-foreground hover:text-gradient hover:bg-primary/10 rounded-md transition-smooth"
                      >
                        <div className="font-medium">{t('servicesDropdown.websites.title')}</div>
                        <div className="text-xs text-muted-foreground">{t('servicesDropdown.websites.description')}</div>
                      </Link>
                      <Link
                        to="/diensten/crm"
                        className="block px-4 py-3 text-sm text-foreground hover:text-gradient hover:bg-primary/10 rounded-md transition-smooth"
                      >
                        <div className="font-medium">{t('servicesDropdown.crm.title')}</div>
                        <div className="text-xs text-muted-foreground">{t('servicesDropdown.crm.description')}</div>
                      </Link>
                      <Link
                        to="/diensten/seo"
                        className="block px-4 py-3 text-sm text-foreground hover:text-gradient hover:bg-primary/10 rounded-md transition-smooth"
                      >
                        <div className="font-medium">{t('servicesDropdown.seo.title')}</div>
                        <div className="text-xs text-muted-foreground">{t('servicesDropdown.seo.description')}</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                to="/over-ons"
                className={`px-3 py-2 text-sm font-medium transition-smooth ${
                  isActive('/over-ons') ? 'text-gradient' : 'text-foreground hover:text-primary'
                }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium transition-smooth ${
                  isActive('/contact') ? 'text-gradient' : 'text-foreground hover:text-primary'
                }`}
              >
                {t('nav.contact')}
              </Link>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="flex items-center gap-2"
              >
                <Languages className="h-4 w-4" />
                {language === 'nl' ? 'EN' : 'NL'}
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 gradient-card border-b border-border">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-medium text-muted-foreground">{t('nav.services')}</div>
              <Link
                to="/diensten/websites"
                className="block px-6 py-2 text-sm text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {t('servicesDropdown.websites.title')}
              </Link>
              <Link
                to="/diensten/crm"
                className="block px-6 py-2 text-sm text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {t('servicesDropdown.crm.title')}
              </Link>
              <Link
                to="/diensten/seo"
                className="block px-6 py-2 text-sm text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {t('servicesDropdown.seo.title')}
              </Link>
            </div>
            <Link
              to="/over-ons"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            
            <div className="px-3 py-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="w-full flex items-center justify-center gap-2"
              >
                <Languages className="h-4 w-4" />
                {language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};