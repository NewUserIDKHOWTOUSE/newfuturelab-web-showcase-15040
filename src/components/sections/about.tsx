import { Target, Users, Lightbulb, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Doelgericht",
    description: "Wij focussen op resultaten die uw bedrijfsdoelen ondersteunen."
  },
  {
    icon: Users,
    title: "Ervaren Team",
    description: "Ons team bestaat uit gepassioneerde developers met jarenlange ervaring."
  },
  {
    icon: Lightbulb,
    title: "Innovatief",
    description: "Wij blijven voorop lopen met de nieuwste technologieën en trends."
  },
  {
    icon: Award,
    title: "Kwaliteit",
    description: "Hoogste kwaliteit code en design standaarden in elk project."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Over <span className="text-gradient">GammaWeb</span>
        </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            GammaWeb is een toonaangevend webontwikkelingsbedrijf dat zich specialiseert in het creëren 
            van krachtige digitale oplossingen die uw bedrijf naar het volgende niveau tillen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-10 w-10 text-primary group-hover:text-accent transition-smooth" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Waarom kiezen voor GammaWeb?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Met meer dan 10 jaar ervaring in webontwikkeling hebben wij honderden succesvolle projecten 
            opgeleverd. Van startup tot enterprise, wij begrijpen de unieke uitdagingen van elk bedrijf 
            en leveren oplossingen die écht werken.
          </p>
          <p className="text-lg text-muted-foreground">
            Ons team bestaat uit specialisten in frontend, backend, UI/UX design en DevOps. 
            Samen zorgen wij ervoor dat uw project niet alleen technisch perfect is, maar ook 
            gebruiksvriendelijk en toekomstbestendig.
          </p>
        </div>
      </div>
    </section>
  );
};