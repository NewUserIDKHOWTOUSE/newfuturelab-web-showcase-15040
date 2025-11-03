import { 
  Globe, 
  ShoppingCart, 
  FileText, 
  Monitor, 
  Server, 
  Layers, 
  Smartphone, 
  Zap, 
  Link, 
  Search, 
  Shield, 
  Settings, 
  Palette 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Globe,
      titleKey: "service.customWebsite",
      descKey: "service.customWebsiteDesc"
    },
    {
      icon: ShoppingCart,
      titleKey: "service.ecommerce",
      descKey: "service.ecommerceDesc"
    },
    {
      icon: FileText,
      titleKey: "service.cms",
      descKey: "service.cmsDesc"
    },
    {
      icon: Monitor,
      titleKey: "service.frontend",
      descKey: "service.frontendDesc"
    },
    {
      icon: Server,
      titleKey: "service.backend",
      descKey: "service.backendDesc"
    },
    {
      icon: Layers,
      titleKey: "service.fullstack",
      descKey: "service.fullstackDesc"
    },
    {
      icon: Smartphone,
      titleKey: "service.responsive",
      descKey: "service.responsiveDesc"
    },
    {
      icon: Zap,
      titleKey: "service.webapp",
      descKey: "service.webappDesc"
    },
    {
      icon: Link,
      titleKey: "service.api",
      descKey: "service.apiDesc"
    },
    {
      icon: Search,
      titleKey: "service.seo",
      descKey: "service.seoDesc"
    },
    {
      icon: Shield,
      titleKey: "service.security",
      descKey: "service.securityDesc"
    },
    {
      icon: Settings,
      titleKey: "service.maintenance",
      descKey: "service.maintenanceDesc"
    },
    {
      icon: Palette,
      titleKey: "service.uiux",
      descKey: "service.uiuxDesc"
    }
  ];
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <Card 
                className="gradient-card border-border/50 hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-12 w-12 text-primary group-hover:text-accent transition-smooth" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground">
                    {t(service.descKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};