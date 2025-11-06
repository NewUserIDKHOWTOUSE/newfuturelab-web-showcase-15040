import { Target, Users, Lightbulb, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import OrbitingSkills from "@/components/ui/orbiting-skills";

export const AboutSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Target,
      titleKey: "about.goalOriented",
      descKey: "about.goalOrientedDesc"
    },
    {
      icon: Users,
      titleKey: "about.experiencedTeam",
      descKey: "about.experiencedTeamDesc"
    },
    {
      icon: Lightbulb,
      titleKey: "about.innovative",
      descKey: "about.innovativeDesc"
    },
    {
      icon: Award,
      titleKey: "about.quality",
      descKey: "about.qualityDesc"
    }
  ];
  return (
    <section id="about" className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('about.title')} <span className="text-gradient">{t('about.titleHighlight')}</span>
          </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card 
                className="gradient-card border-border/50 hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-10 w-10 text-primary group-hover:text-accent transition-smooth" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {t(feature.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">
                    {t(feature.descKey)}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={300}>
          <div className="flex justify-center mb-16">
            <OrbitingSkills />
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              {t('about.whyTitle')}
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {t('about.whyDesc1')}
            </p>
            <p className="text-lg text-muted-foreground">
              {t('about.whyDesc2')}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};