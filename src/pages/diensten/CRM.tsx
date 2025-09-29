import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Database, BarChart3, Mail, Calendar, Phone, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { ExamplesSection } from "@/components/ExamplesSection";

const crmFeatures = [
  {
    icon: Users,
    title: "Klantenbeheer",
    description: "Centraal overzicht van al uw klanten, contacten en hun volledige historie.",
    features: ["Contact database", "Klantgeschiedenis", "Segmentatie", "Interactie tracking"]
  },
  {
    icon: Database,
    title: "Lead Management",
    description: "Effectief beheer van leads van eerste contact tot succesvolle conversie.",
    features: ["Lead scoring", "Pipeline management", "Automatische follow-ups", "Conversie tracking"]
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Uitgebreide rapportages en analyses voor datagedreven beslissingen.",
    features: ["Sales dashboards", "Performance metrics", "Voorspellingen", "ROI analyses"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Geautomatiseerde email campagnes en persoonlijke communicatie.",
    features: ["Email templates", "Automatisering", "A/B testing", "Open rate tracking"]
  },
  {
    icon: Calendar,
    title: "Planning & Agenda",
    description: "Geïntegreerde planning voor afspraken, taken en follow-ups.",
    features: ["Agenda synchronisatie", "Taakbeheer", "Herinneringen", "Team planning"]
  },
  {
    icon: Phone,
    title: "Communicatie Hub",
    description: "Alle communicatie centraal beheren vanuit één platform.",
    features: ["Telefoon integratie", "SMS berichten", "Chat functies", "Video calls"]
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Veilig opslaan en delen van documenten en contracten.",
    features: ["Bestand opslag", "Versie beheer", "Toegang controle", "E-handtekeningen"]
  },
  {
    icon: Settings,
    title: "Workflow Automatisering",
    description: "Automatiseer repetitieve taken en optimaliseer uw werkprocessen.",
    features: ["Custom workflows", "Triggers & acties", "Integraties", "Process optimization"]
  }
];

const crmExamples = [
  {
    title: "Real Estate Agency CRM",
    description: "Custom CRM system for real estate agency managing 500+ properties and 2000+ client relationships.",
    results: [
      "Sales cycle reduced by 30%",
      "Lead response time cut from 4 hours to 15 minutes",
      "Client retention increased by 40%",
      "Agent productivity up 50%"
    ],
    industry: "Real Estate",
    tags: ["Custom CRM", "Pipeline", "Automation", "Integration"]
  },
  {
    title: "Manufacturing Sales CRM",
    description: "B2B CRM implementation for manufacturing company with complex sales cycles and multiple stakeholders.",
    results: [
      "Deal closure rate improved by 35%",
      "Sales forecast accuracy: 95%",
      "Quote generation time reduced by 75%",
      "Revenue increased by €2.5M annually"
    ],
    industry: "Manufacturing",
    tags: ["B2B", "Salesforce", "Quotes", "Analytics"]
  },
  {
    title: "Healthcare Patient Management",
    description: "Specialized CRM for healthcare clinic managing patient relationships, appointments, and follow-ups.",
    results: [
      "No-show rate reduced by 60%",
      "Patient satisfaction score: 4.9/5",
      "Administrative time saved: 15 hours/week",
      "Follow-up completion rate: 98%"
    ],
    industry: "Healthcare",
    tags: ["Patient Management", "Appointments", "HIPAA", "Reminders"]
  },
  {
    title: "Financial Services Client Portal",
    description: "CRM with client portal for financial advisory firm managing high-net-worth client relationships.",
    results: [
      "Client communication efficiency up 70%",
      "Document processing time reduced by 80%",
      "Client onboarding time cut by 50%",
      "Compliance tracking: 100% accurate"
    ],
    industry: "Financial Services",
    tags: ["Client Portal", "Security", "Compliance", "Documents"]
  }
];

const CRMPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            CRM <span className="text-gradient-secondary">Systemen</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10">
            Optimaliseer uw klantrelaties en verhoog uw verkoop met op maat gemaakte CRM oplossingen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-secondary hover:shadow-glow transition-smooth text-lg px-8 py-4">
                Vraag Demo Aan
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10">
              Bekijk Features
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              CRM <span className="text-gradient-secondary">Functionaliteiten</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Alles wat u nodig heeft om uw klantrelaties te optimaliseren en uw verkoop te verhogen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {crmFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="gradient-card border-border/50 hover:border-primary/50 transition-smooth shadow-card hover:shadow-elegant group hover-glow"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-primary group-hover:text-accent transition-smooth" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-gradient-secondary transition-smooth">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Waarom Kiezen voor <span className="text-gradient-secondary">Ons CRM</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Verhoogde Productiviteit",
                desc: "Automatiseer repetitieve taken en focus op wat echt belangrijk is",
                stat: "40%",
                label: "Tijdsbesparing"
              },
              {
                title: "Betere Klantbeleving",
                desc: "Persoonlijke service door complete klantinzichten",
                stat: "85%",
                label: "Klantentevredenheid"
              },
              {
                title: "Meer Omzet",
                desc: "Optimaliseerde verkoopprocessen leiden tot hogere conversies",
                stat: "25%",
                label: "Omzetstijging"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gradient-secondary mb-4">{benefit.stat}</div>
                <div className="text-sm text-primary font-medium mb-2">{benefit.label}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Implementatie <span className="text-gradient-secondary">Proces</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Een stapsgewijze aanpak voor een succesvolle CRM implementatie
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Analyse", desc: "Huidige processen en behoeften in kaart brengen" },
              { step: "02", title: "Ontwerp", desc: "Custom CRM oplossing ontwerpen voor uw organisatie" },
              { step: "03", title: "Ontwikkeling", desc: "Bouwen en configureren van het CRM systeem" },
              { step: "04", title: "Training", desc: "Uitgebreide training voor uw medewerkers" },
              { step: "05", title: "Support", desc: "Doorlopende ondersteuning en optimalisatie" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient-secondary mb-4">{phase.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <ExamplesSection 
        examples={crmExamples}
        title="CRM"
        subtitle="Implementaties"
      />

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformeer Uw <span className="text-gradient-secondary">Klantbeheer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Ontdek hoe een op maat gemaakt CRM systeem uw bedrijf kan helpen groeien
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-secondary hover:shadow-glow transition-smooth text-lg px-8 py-4">
              Plan Gratis Consultatie
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRMPage;