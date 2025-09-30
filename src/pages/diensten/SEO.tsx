import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Target, FileText, BarChart, Users, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ExamplesSection } from "@/components/ExamplesSection";

const seoServices = [
  {
    icon: Search,
    title: "Technische SEO",
    description: "Optimalisatie van uw website's technische aspecten voor betere zoekmachine rankings.",
    features: ["Site speed optimalisatie", "Mobile optimization", "Schema markup", "Core Web Vitals"]
  },
  {
    icon: FileText,
    title: "Content Optimalisatie",
    description: "Strategische content creatie en optimalisatie voor maximale zoekmachine zichtbaarheid.",
    features: ["Keyword research", "Content strategie", "SEO copywriting", "Content audits"]
  },
  {
    icon: Target,
    title: "Local SEO",
    description: "Lokale zoekmachine optimalisatie om meer klanten in uw regio te bereiken.",
    features: ["Google My Business", "Lokale citations", "Review management", "Geo-targeting"]
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Gestructureerde aanpak om kwaliteitsvolle leads te genereren via zoekmachines.",
    features: ["Landing page optimalisatie", "Conversion tracking", "Lead magnets", "Funnel optimalisatie"]
  },
  {
    icon: BarChart,
    title: "SEO Analytics",
    description: "Uitgebreide analyses en rapportages om uw SEO prestaties te meten en verbeteren.",
    features: ["Ranking monitoring", "Traffic analyse", "ROI tracking", "Competitor analyse"]
  },
  {
    icon: Users,
    title: "Social Media SEO",
    description: "Integratie van social media strategieën voor verbeterde online zichtbaarheid.",
    features: ["Social signals", "Content distributie", "Engagement optimalisatie", "Brand awareness"]
  },
  {
    icon: Globe,
    title: "Link Building",
    description: "Strategische link building voor verhoogde autoriteit en betere rankings.",
    features: ["High-quality backlinks", "Outreach campagnes", "Content marketing", "Authority building"]
  },
  {
    icon: Zap,
    title: "SEO Automation",
    description: "Geautomatiseerde SEO processen voor efficiënte en consistente optimalisatie.",
    features: ["Automated reporting", "Rank tracking", "Technical monitoring", "Alert systemen"]
  }
];

const seoExamples = [
  {
    title: "Local Law Firm SEO Campaign",
    description: "Complete SEO overhaul for a regional law firm targeting personal injury and family law keywords.",
    results: [
      "Rankings: 15 keywords in top 3 within 4 months",
      "Organic traffic increased by 320%",
      "Lead generation up 180%",
      "Cost per lead reduced by 55%"
    ],
    industry: "Legal Services",
    tags: ["Local SEO", "Content Marketing", "Link Building", "GMB"]
  },
  {
    title: "E-commerce SEO - Home Decor",
    description: "SEO strategy for online home decor store with 2000+ products competing in saturated market.",
    results: [
      "Organic revenue increased by 450%",
      "Product pages ranking for 500+ keywords",
      "Category pages in top 5 for main terms",
      "ROI: 8:1 within 8 months"
    ],
    industry: "E-commerce & Retail",
    tags: ["Product SEO", "Schema Markup", "Technical SEO", "Content"]
  },
  {
    title: "B2B SaaS Lead Generation",
    description: "Comprehensive SEO and content strategy for project management SaaS targeting enterprise clients.",
    results: [
      "Monthly qualified leads increased from 50 to 400",
      "Organic traffic: 15,000+ monthly visitors",
      "Featured snippets for 25 high-value queries",
      "Domain authority increased from 28 to 52"
    ],
    industry: "Technology & Software",
    tags: ["Content Strategy", "Lead Gen", "Technical SEO", "Authority"]
  },
  {
    title: "Medical Practice Local Domination",
    description: "Local SEO campaign for dental practice aiming to dominate local search in competitive area.",
    results: [
      "Google Maps: #1 position in service area",
      "New patient calls up 240%",
      "5-star reviews increased from 15 to 120+",
      "Local pack visibility: 95% for target keywords"
    ],
    industry: "Healthcare",
    tags: ["Local SEO", "Review Management", "GMB", "Citations"]
  }
];

const SEOPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            SEO & <span className="text-gradient">Lead Generation</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10">
            Verhoog uw online zichtbaarheid en genereer meer kwaliteitsvolle leads met onze bewezen SEO strategieën
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-4">
                Gratis SEO Audit
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10">
              Bekijk Resultaten
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              SEO <span className="text-gradient">Diensten</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete SEO en lead generation oplossingen voor maximale online impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {seoServices.map((service, index) => (
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

      {/* Results Section */}
      <section className="py-20 gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bewezen <span className="text-gradient">Resultaten</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Onze data-gedreven aanpak levert meetbare resultaten voor onze klanten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                metric: "300%",
                label: "Gemiddelde traffic stijging",
                desc: "Binnen 6 maanden"
              },
              {
                metric: "150%",
                label: "Meer kwaliteitsvolle leads",
                desc: "Via organische kanalen"
              },
              {
                metric: "250%",
                label: "ROI verbetering",
                desc: "Op SEO investeringen"
              },
              {
                metric: "85%",
                label: "Klanten behalen top 3",
                desc: "Voor hun belangrijkste keywords"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Onze SEO <span className="text-gradient">Methodologie</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Een bewezen stapsgewijze aanpak voor duurzame SEO resultaten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {[
              { step: "01", title: "Audit", desc: "Uitgebreide SEO analyse van uw huidige positie" },
              { step: "02", title: "Research", desc: "Keyword en competitor onderzoek" },
              { step: "03", title: "Strategie", desc: "Op maat gemaakte SEO roadmap" },
              { step: "04", title: "Implementatie", desc: "Technische en content optimalisaties" },
              { step: "05", title: "Monitoring", desc: "Continue tracking en optimalisatie" },
              { step: "06", title: "Rapportage", desc: "Transparante resultaat rapportages" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gradient mb-3">{phase.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professionele <span className="text-gradient">SEO Tools</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Wij gebruiken de beste SEO tools en platforms voor optimale resultaten
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Moz"
            ].map((tool, index) => (
              <div key={index} className="text-center">
                <div className="bg-background/50 rounded-lg p-4 h-20 flex items-center justify-center mb-3">
                  <span className="text-foreground font-medium text-sm">{tool}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <ExamplesSection 
        examples={seoExamples}
        title="Succesvolle"
        subtitle="Cases"
      />

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Vandaag met <span className="text-gradient">SEO Succes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Laat ons uw online zichtbaarheid vergroten en meer kwaliteitsvolle leads genereren
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-4">
                Gratis SEO Gesprek
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10">
              Download SEO Gids
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOPage;