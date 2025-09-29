import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Example {
  title: string;
  description: string;
  results: string[];
  industry: string;
  tags: string[];
}

interface ExamplesSectionProps {
  examples: Example[];
  title: string;
  subtitle: string;
}

export const ExamplesSection = ({ examples, title, subtitle }: ExamplesSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title} <span className="text-gradient">{subtitle}</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:border-primary/50 transition-smooth shadow-card hover:shadow-elegant hover-glow"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {example.industry}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {example.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {example.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Results:</h4>
                  <ul className="space-y-2">
                    {example.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {example.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
