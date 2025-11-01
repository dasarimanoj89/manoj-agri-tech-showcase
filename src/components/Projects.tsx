import { Sprout, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid gap-8">
          <Card className="border-2 hover:border-primary transition-all duration-300 overflow-hidden group hover:shadow-xl hover:shadow-primary/20">
            <div className="bg-gradient-primary p-1">
              <div className="bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Sprout className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          Automatic Agricultural Lever-Operated Pesticide Sprayer
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          Main Engineering Project • 2024
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    Designed and developed an innovative automated pesticide spraying system 
                    that revolutionizes crop protection in agriculture. This lever-operated 
                    mechanism significantly reduces manual labor while ensuring uniform and 
                    efficient pesticide distribution across agricultural fields.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Automated spraying mechanism reducing manual intervention by 80%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Lever-operated design for easy control and precision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Optimized pesticide distribution minimizing waste and environmental impact</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Cost-effective solution suitable for small to medium-scale farms</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Mechanical Design</Badge>
                    <Badge variant="secondary">Automation</Badge>
                    <Badge variant="secondary">Agriculture Technology</Badge>
                    <Badge variant="secondary">Innovation</Badge>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
