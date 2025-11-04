import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { ExamplesSection } from "@/components/ExamplesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Check, Sparkles, TrendingDown, Star } from "lucide-react";

const OnsWerk = () => {
  const { t } = useLanguage();

  // Placeholder examples - will be replaced with real client work later
  const placeholderExamples = [
    {
      title: "Coming Soon",
      description: "Binnenkort vullen we deze pagina met voorbeelden van onze eerste klantprojecten.",
      results: ["Speciale korting beschikbaar voor onze eerste 9 klanten!", "Portfolio wordt opgebouwd met real-world projecten"],
      industry: "Diverse sectoren",
      tags: ["Modern Design", "Responsive", "SEO Geoptimaliseerd"],
    },
    {
      title: "Uw Project Hier",
      description: "Word één van onze eerste klanten en profiteer van exclusieve kortingen terwijl u ons helpt onze portfolio op te bouwen.",
      results: ["Tot 30% korting voor early adopters", "Full support gedurende het project", "Gratis onderhoud eerste 3 maanden"],
      industry: "Alle branches",
      tags: ["Custom Development", "Full Support", "Onderhoud Inclusief"],
    },
    {
      title: "Portfolio in Opbouw",
      description: "Wij zijn bezig met het opbouwen van onze portfolio met hoogwaardige projecten van tevreden klanten.",
      results: ["Kwaliteit gegarandeerd", "Professionele aanpak", "Transparante communicatie"],
      industry: "B2B & B2C",
      tags: ["Snelle Levering", "Professioneel", "Betrouwbaar"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('work.hero.title')} <span className="text-gradient">{t('work.hero.highlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            {t('work.hero.description')}
          </p>
          
          {/* Special Offer Badge */}
          <div className="inline-block mb-8 px-6 py-3 bg-primary/20 border border-primary rounded-full animate-fade-in">
            <p className="text-primary font-semibold">
              ⭐ {t('work.hero.specialOffer')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/prijzen">
              <Button size="lg" className="shadow-elegant hover-scale bg-gradient-primary text-white">
                {t('work.hero.cta')}
              </Button>
            </Link>
            <Link to="/diensten/websites">
              <Button size="lg" variant="outline" className="hover-scale">
                {t('work.hero.services')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Action Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/50 shadow-glow gradient-card">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="mb-4 text-base px-6 py-2 bg-gradient-primary">
                  {t('pricing.portfolio.badge')}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('pricing.portfolio.title')}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('pricing.portfolio.benefit1')}</p>
                    <p className="text-sm text-muted-foreground">Op website of webshop pakketten</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('pricing.portfolio.benefit2')}</p>
                    <p className="text-sm text-muted-foreground">Gratis bonus bij aanmelding</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t('pricing.portfolio.benefit3')}</p>
                    <p className="text-sm text-muted-foreground">Extra zichtbaarheid voor uw bedrijf</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center mb-6">
                <p className="text-xl font-bold text-primary mb-2">
                  <Sparkles className="inline-block mr-2 h-5 w-5" />
                  {t('pricing.portfolio.counter')}
                  <Sparkles className="inline-block ml-2 h-5 w-5" />
                </p>
                <p className="text-sm text-muted-foreground">{t('pricing.portfolio.urgency')}</p>
              </div>
              
              <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-6">
                {t('pricing.portfolio.note')}
              </p>

              <div className="text-center">
                <Link to="/prijzen">
                  <Button size="lg" className="bg-gradient-primary text-white">
                    Bekijk Alle Pakketten & Prijzen
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waarom Kiezen voor <span className="text-gradient">GammaWeb</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Als portfolio klant krijgt u niet alleen scherpe tarieven, maar ook onze volledige toewijding
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="gradient-card border-border/50 text-center hover:border-primary/50 transition-smooth">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingDown className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Tot 60% Voordeliger</h3>
                <p className="text-sm text-muted-foreground">
                  Dan traditionele webontwikkelingsbureaus
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 text-center hover:border-primary/50 transition-smooth">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Premium Kwaliteit</h3>
                <p className="text-sm text-muted-foreground">
                  Geen concessies aan kwaliteit of functionaliteit
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 text-center hover:border-primary/50 transition-smooth">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Geen Verrassingen</h3>
                <p className="text-sm text-muted-foreground">
                  Transparante prijzen en duidelijke afspraken
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 text-center hover:border-primary/50 transition-smooth">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Extra Voordelen</h3>
                <p className="text-sm text-muted-foreground">
                  Gratis SEO-scan of pagina-optimalisatie cadeau
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 px-4">
        <ExamplesSection
          examples={placeholderExamples}
          title={t('work.examples.title')}
          subtitle={t('work.examples.subtitle')}
        />
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-card">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('work.cta.title')} <span className="text-gradient">{t('work.cta.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('work.cta.description')}
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-elegant hover-scale">
              {t('work.cta.button')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnsWerk;
