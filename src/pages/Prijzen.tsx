import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Sparkles, TrendingDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Pricing } from "@/components/ui/pricing";

const PrijzenPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const websitePlans = [
    {
      name: t('pricing.basic'),
      price: '24',
      yearlyPrice: '17',
      period: 'maand',
      features: [
        t('pricing.buildCosts'),
        t('pricing.feature.hosting'),
        t('pricing.feature.weeklyUpdates'),
        t('pricing.feature.lightContent'),
        t('pricing.feature.backups'),
        t('pricing.feature.troubleshooting'),
        t('pricing.feature.emailSupport'),
      ],
      description: 'Jaar 1: €24/maand, Jaar 2+: €17/maand',
      buttonText: t('pricing.cta.start'),
      href: '/contact',
      isPopular: false,
    },
    {
      name: t('pricing.plus'),
      price: '44',
      yearlyPrice: '34',
      period: 'maand',
      features: [
        t('pricing.buildCosts'),
        t('pricing.feature.hosting'),
        t('pricing.feature.weeklyUpdates'),
        t('pricing.feature.dailyBackups'),
        t('pricing.feature.prioritySupport'),
        t('pricing.feature.devTime30'),
        t('pricing.feature.monitoring'),
        t('pricing.feature.fastResponse'),
      ],
      description: 'Jaar 1: €44/maand, Jaar 2+: €34/maand',
      buttonText: t('pricing.cta.start'),
      href: '/contact',
      isPopular: true,
    },
    {
      name: t('pricing.premium'),
      price: '79',
      yearlyPrice: '69',
      period: 'maand',
      features: [
        t('pricing.feature.247monitoring'),
        t('pricing.feature.devTime60'),
        t('pricing.feature.seo'),
        t('pricing.feature.analytics'),
        t('pricing.feature.staging'),
        t('pricing.feature.advice'),
        t('pricing.feature.hosting'),
      ],
      description: 'Jaar 1: €79/maand, Jaar 2+: €69/maand',
      buttonText: t('pricing.cta.start'),
      href: '/contact',
      isPopular: false,
    },
  ];

  const webshopPlans = [
    {
      name: t('pricing.basic'),
      price: '44',
      yearlyPrice: '32',
      period: 'maand',
      features: [
        t('pricing.buildCosts'),
        t('pricing.feature.hosting'),
        t('pricing.feature.weeklyUpdates'),
        t('pricing.feature.lightContent'),
        t('pricing.feature.backups'),
        t('pricing.feature.troubleshooting'),
        t('pricing.feature.emailSupport'),
      ],
      description: 'Jaar 1: €44/maand, Jaar 2+: €32/maand',
      buttonText: t('pricing.cta.start'),
      href: '/contact',
      isPopular: false,
    },
    {
      name: t('pricing.plus'),
      price: '74',
      yearlyPrice: '54',
      period: 'maand',
      features: [
        t('pricing.buildCosts'),
        t('pricing.feature.dailyBackups'),
        t('pricing.feature.prioritySupport'),
        t('pricing.feature.productMgmt'),
        t('pricing.feature.security'),
        t('pricing.feature.performance'),
      ],
      description: 'Jaar 1: €74/maand, Jaar 2+: €54/maand',
      buttonText: t('pricing.cta.start'),
      href: '/contact',
      isPopular: true,
    },
    {
      name: t('pricing.premium'),
      price: '129',
      yearlyPrice: '109',
      period: 'maand',
      features: [
        t('pricing.feature.247monitoring'),
        t('pricing.feature.devTime120'),
        t('pricing.feature.orderSupport'),
        t('pricing.feature.seo'),
        t('pricing.feature.analytics'),
        t('pricing.feature.dedicatedService'),
      ],
      description: 'Jaar 1: €129/maand, Jaar 2+: €109/maand',
      buttonText: t('pricing.cta.start'),
      href: '/contact',
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Portfolio Action Banner */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/50 shadow-glow gradient-card animate-in">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="mb-4 text-base px-6 py-2 bg-gradient-primary">
                  <span className="text-gradient font-bold">{t('pricing.portfolio.badge')}</span>
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                  {t('pricing.portfolio.title')}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">{t('pricing.portfolio.benefit1')}</p>
                        <p className="text-sm text-muted-foreground">{t('pricing.portfolio.savingsDetail')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">{t('pricing.portfolio.benefit2')}</p>
                        <p className="text-sm text-muted-foreground">{t('pricing.portfolio.freeService')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">{t('pricing.portfolio.benefit3')}</p>
                        <p className="text-sm text-muted-foreground">{t('pricing.portfolio.exposure')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="border-2 border-primary rounded-lg p-6 text-center mb-6">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  <Sparkles className="inline-block mr-2 h-6 w-6" />
                  {t('pricing.portfolio.counter')}
                  <Sparkles className="inline-block ml-2 h-6 w-6" />
                </p>
                <p className="text-sm font-semibold text-primary mb-4">{t('pricing.portfolio.urgency')}</p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary shadow-elegant text-lg px-8 py-3">
                    {t('pricing.portfolio.ctaButton')}
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto italic">
                {t('pricing.portfolio.note')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('pricing.hero.title')} <span className="text-gradient">{t('pricing.hero.highlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            {t('pricing.hero.description')}
          </p>
          <Card className="max-w-md mx-auto bg-primary/5 border-primary/30">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <TrendingDown className="h-6 w-6" />
                <p className="text-xl font-bold">{t('pricing.hero.comparison')}</p>
              </div>
              <p className="text-sm text-muted-foreground">{t('pricing.hero.comparisonDetail')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-4 bg-background">
        <Pricing 
          plans={websitePlans}
          title={t('pricing.websites.title') + ' ' + t('pricing.websites.highlight')}
          description={t('pricing.websites.description')}
          onPlanClick={(href) => navigate(href)}
        />
      </section>

      {/* Webshop Packages */}
      <section className="py-4 bg-muted/20">
        <Pricing 
          plans={webshopPlans}
          title={t('pricing.webshops.title') + ' ' + t('pricing.webshops.highlight')}
          description={t('pricing.webshops.description')}
          onPlanClick={(href) => navigate(href)}
        />
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('pricing.benefits.title')} <span className="text-gradient">{t('pricing.benefits.highlight')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <Check className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-sm">{t('pricing.benefits.benefit1')}</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <Check className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-sm">{t('pricing.benefits.benefit2')}</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <Check className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-sm">{t('pricing.benefits.benefit3')}</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border/50 text-center">
              <CardContent className="pt-6">
                <Check className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-sm">{t('pricing.benefits.benefit4')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('pricing.cta.claim')}
          </h2>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary border-2 border-primary text-lg px-8 py-6">
              {t('pricing.cta.contact')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrijzenPage;
