import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { ExamplesSection } from "@/components/ExamplesSection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

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
            <Link to="/contact">
              <Button size="lg" className="shadow-elegant hover-scale">
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
