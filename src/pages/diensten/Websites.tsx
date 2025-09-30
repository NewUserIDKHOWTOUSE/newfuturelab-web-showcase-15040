import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, Smartphone, Monitor, Zap, Palette, Code, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ExamplesSection } from "@/components/ExamplesSection";

const websiteServices = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description: "Op maat gemaakte websites die perfect aansluiten bij uw bedrijfsidentiteit en doelstellingen.",
    features: ["Responsive design", "SEO geoptimaliseerd", "Snelle laadtijden", "Moderne technologieën"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Webshops",
    description: "Professionele online winkels met geïntegreerde betalingssystemen en inventarisbeheer.",
    features: ["Veilige betalingen", "Inventarisbeheer", "Order tracking", "Multi-platform"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Websites die perfect werken op alle apparaten, van smartphone tot desktop.",
    features: ["Touch-vriendelijk", "Snelle mobiele ervaring", "App-achtige interface", "Offline functionaliteit"]
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "Intuïtieve en aantrekkelijke designs die gebruikers een geweldige ervaring bieden.",
    features: ["Gebruikersonderzoek", "Wireframing", "Prototyping", "A/B testing"]
  },
  {
    icon: Zap,
    title: "Performance Optimalisatie",
    description: "Supersnelle websites die zorgen voor betere conversies en gebruikerservaring.",
    features: ["Core Web Vitals", "Caching strategieën", "Code optimalisatie", "CDN implementatie"]
  },
  {
    icon: Palette,
    title: "Branding & Identiteit",
    description: "Visuele identiteit die uw merk versterkt en onderscheidt van de concurrentie.",
    features: ["Logo ontwerp", "Kleurenschema", "Typografie", "Visuele richtlijnen"]
  },
  {
    icon: Code,
    title: "Custom Functionaliteiten",
    description: "Specifieke features en integraties op maat voor uw unieke bedrijfsprocessen.",
    features: ["API integraties", "Custom modules", "Workflow automatisering", "Third-party tools"]
  },
  {
    icon: Shield,
    title: "Beveiliging & Onderhoud",
    description: "Veilige websites met doorlopend onderhoud en regelmatige updates.",
    features: ["SSL certificaten", "Backup systemen", "Security monitoring", "Regelmatige updates"]
  }
];

const websiteExamples = [
  {
    title: "E-commerce Fashion Boutique",
    description: "Modern online fashion store with 5000+ products, integrated inventory management, and multi-currency support.",
    results: [
      "200% increase in online sales within 6 months",
      "Mobile conversion rate improved by 150%",
      "Page load time reduced to under 2 seconds",
      "Automated email marketing increased repeat customers by 45%"
    ],
    industry: "Fashion & Retail",
    tags: ["E-commerce", "WooCommerce", "Payment Gateway", "Inventory"]
  },
  {
    title: "SaaS Platform Dashboard",
    description: "Complex web application for project management with real-time collaboration, analytics, and integrations.",
    results: [
      "10,000+ active users within first year",
      "99.9% uptime achieved",
      "User engagement time increased 3x",
      "Customer churn reduced by 35%"
    ],
    industry: "Technology & Software",
    tags: ["React", "API", "Real-time", "Analytics"]
  },
  {
    title: "Healthcare Clinic Portal",
    description: "Patient portal with appointment booking, medical records access, and telemedicine capabilities.",
    results: [
      "70% reduction in administrative calls",
      "Online appointments increased by 250%",
      "Patient satisfaction score: 4.8/5",
      "HIPAA compliant security implemented"
    ],
    industry: "Healthcare",
    tags: ["Portal", "Security", "Booking System", "HIPAA"]
  },
  {
    title: "Restaurant Multi-location Website",
    description: "Website for restaurant chain with online ordering, table reservations, and loyalty program integration.",
    results: [
      "40% of orders now placed online",
      "Table booking rate up 180%",
      "Loyalty program membership doubled",
      "Average order value increased by 25%"
    ],
    industry: "Food & Beverage",
    tags: ["Online Ordering", "Reservations", "Menu", "Mobile"]
  }
];

const WebsitesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Website <span className="text-gradient">Ontwikkeling</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10">
            Van concept tot lancering - wij creëren websites die uw bedrijf naar het volgende niveau tillen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-4">
                Start Uw Project
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10">
              Bekijk Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Onze Website <span className="text-gradient">Diensten</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Alles wat u nodig heeft voor een succesvolle online aanwezigheid, van design tot onderhoud
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {websiteServices.map((service, index) => (
              <Card 
                key={index} 
                className="gradient-card border-border/50 hover:border-primary/50 transition-smooth shadow-card hover:shadow-elegant group hover-glow"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-12 w-12 text-primary group-hover:text-accent transition-smooth" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-gradient transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ons <span className="text-gradient">Ontwikkelproces</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Een gestructureerde aanpak die zorgt voor optimale resultaten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategie & Planning", desc: "Doelen definiëren en strategische planning" },
              { step: "02", title: "Design & Prototype", desc: "Visueel ontwerp en interactieve prototypes" },
              { step: "03", title: "Ontwikkeling", desc: "Technische realisatie met moderne technologieën" },
              { step: "04", title: "Testing & Launch", desc: "Uitgebreid testen en succesvolle lancering" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <ExamplesSection 
        examples={websiteExamples}
        title="Voorbeelden van Onze"
        subtitle="Projecten"
      />

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Uw <span className="text-gradient">Nieuwe Website</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Laten we samen uw digitale ambities realiseren met een website die echt impact maakt
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-4">
              Start Vandaag
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsitesPage;