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

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description: "Op maat gemaakte websites die perfect aansluiten bij uw bedrijfsbehoeften."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Krachtige online winkels met geïntegreerde betalingssystemen en inventarisbeheer."
  },
  {
    icon: FileText,
    title: "CMS Development",
    description: "Gebruiksvriendelijke content management systemen voor eenvoudig beheer van uw website."
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Moderne, interactieve gebruikersinterfaces met de nieuwste technologieën."
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robuuste server-side oplossingen voor complexe bedrijfsprocessen."
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Complete weboplossingen van database tot gebruikersinterface."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Websites die perfect werken op alle apparaten en schermformaten."
  },
  {
    icon: Zap,
    title: "Web App Development",
    description: "Krachtige web applicaties voor uw specifieke bedrijfsprocessen."
  },
  {
    icon: Link,
    title: "API Integration",
    description: "Naadloze integratie met externe diensten en systemen."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Optimalisatie voor zoekmachines om uw online zichtbaarheid te vergroten."
  },
  {
    icon: Shield,
    title: "Security Features",
    description: "Geavanceerde beveiligingsmaatregelen om uw data en gebruikers te beschermen."
  },
  {
    icon: Settings,
    title: "Maintenance Services",
    description: "Doorlopend onderhoud en updates om uw website optimaal te laten functioneren."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuïtieve en aantrekkelijke designs die gebruikers een geweldige ervaring bieden."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Onze <span className="text-gradient">Diensten</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Wij bieden een volledig scala aan webontwikkelingsdiensten om uw digitale ambities waar te maken.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-primary group-hover:text-accent transition-smooth" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};