import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Sparkles, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const PrijzenPage = () => {
  const { t } = useLanguage();

  const websitePackages = [
    {
      name: t('pricing.basic'),
      priceYear1: '24',
      priceYear2: '14',
      features: [
        t('pricing.buildCosts'),
        t('pricing.feature.hosting'),
        t('pricing.feature.weeklyUpdates'),
        t('pricing.feature.lightContent'),
        t('pricing.feature.backups'),
        t('pricing.feature.troubleshooting'),
        t('pricing.feature.emailSupport'),
      ],
      badge: null,
      highlighted: false,
    },
    {
      name: t('pricing.plus'),
      priceYear1: '44',
      priceYear2: '34',
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
      badge: t('pricing.badge.popular'),
      highlighted: true,
    },
    {
      name: t('pricing.premium'),
      priceYear1: '79',
      priceYear2: '69',
      features: [
        t('pricing.feature.247monitoring'),
        t('pricing.feature.devTime60'),
        t('pricing.feature.seo'),
        t('pricing.feature.analytics'),
        t('pricing.feature.staging'),
        t('pricing.feature.advice'),
        t('pricing.feature.hosting'),
      ],
      badge: t('pricing.badge.fullservice'),
      highlighted: false,
    },
  ];

  const webshopPackages = [
    {
      name: t('pricing.basic'),
      priceYear1: '44',
      priceYear2: '24',
      features: [
        t('pricing.buildCosts'),
        t('pricing.feature.hosting'),
        t('pricing.feature.weeklyUpdates'),
        t('pricing.feature.lightContent'),
        t('pricing.feature.backups'),
        t('pricing.feature.troubleshooting'),
        t('pricing.feature.emailSupport'),
      ],
      badge: null,
      highlighted: false,
    },
    {
      name: t('pricing.plus'),
      priceYear1: '74',
      priceYear2: '54',
      features: [
        t('pricing.buildCosts'),
        t('pricing.feature.dailyBackups'),
        t('pricing.feature.prioritySupport'),
        t('pricing.feature.productMgmt'),
        t('pricing.feature.security'),
        t('pricing.feature.performance'),
      ],
      badge: t('pricing.badge.popular'),
      highlighted: true,
    },
    {
      name: t('pricing.premium'),
      priceYear1: '129',
      priceYear2: '109',
      features: [
        t('pricing.feature.247monitoring'),
        t('pricing.feature.devTime120'),
        t('pricing.feature.orderSupport'),
        t('pricing.feature.seo'),
        t('pricing.feature.analytics'),
        t('pricing.feature.dedicatedService'),
      ],
      badge: t('pricing.badge.fullservice'),
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Portfolio Action Banner */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-primary/20 via-accent/10 to-background">
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
                  <p className="text-foreground">{t('pricing.portfolio.benefit1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{t('pricing.portfolio.benefit2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{t('pricing.portfolio.benefit3')}</p>
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
              
              <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
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
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            {t('pricing.hero.description')}
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <TrendingDown className="h-5 w-5" />
            <p className="font-semibold">{t('pricing.hero.comparison')}</p>
          </div>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('pricing.websites.title')} <span className="text-gradient">{t('pricing.websites.highlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('pricing.websites.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative transition-smooth ${
                  pkg.highlighted 
                    ? 'border-primary/50 shadow-glow gradient-card scale-105' 
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-6">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div>
                      <div className="text-4xl font-bold text-primary">
                        €{pkg.priceYear1}
                        <span className="text-lg text-muted-foreground">{t('pricing.perMonth')}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t('pricing.year1')}</p>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">
                        €{pkg.priceYear2}
                        <span className="text-sm text-muted-foreground">{t('pricing.perMonth')}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{t('pricing.year2')}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button 
                      className={`w-full ${pkg.highlighted ? 'bg-gradient-primary' : ''}`}
                      variant={pkg.highlighted ? 'default' : 'outline'}
                    >
                      {t('pricing.cta.start')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webshop Packages */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('pricing.webshops.title')} <span className="text-gradient">{t('pricing.webshops.highlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('pricing.webshops.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webshopPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative transition-smooth ${
                  pkg.highlighted 
                    ? 'border-primary/50 shadow-glow gradient-card scale-105' 
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-6">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div>
                      <div className="text-4xl font-bold text-primary">
                        €{pkg.priceYear1}
                        <span className="text-lg text-muted-foreground">{t('pricing.perMonth')}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t('pricing.year1')}</p>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">
                        €{pkg.priceYear2}
                        <span className="text-sm text-muted-foreground">{t('pricing.perMonth')}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{t('pricing.year2')}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button 
                      className={`w-full ${pkg.highlighted ? 'bg-gradient-primary' : ''}`}
                      variant={pkg.highlighted ? 'default' : 'outline'}
                    >
                      {t('pricing.cta.start')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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
            <Button size="lg" className="bg-gradient-primary text-lg px-8 py-6">
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
