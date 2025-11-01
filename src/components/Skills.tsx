import { Code, Database, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const technicalSkills = [
  { name: "Python", icon: Code, level: 85 },
  { name: "MySQL", icon: Database, level: 80 },
  { name: "PHP", icon: Code, level: 75 },
  { name: "HTML", icon: Code, level: 90 },
  { name: "CSS", icon: Code, level: 85 },
];

const strengths = [
  {
    title: "Hardworking",
    description: "Dedicated to delivering quality results with consistent effort and determination",
    icon: Zap,
  },
  {
    title: "Adaptable",
    description: "Quick to learn and adjust to new technologies, environments, and challenges",
    icon: Heart,
  },
  {
    title: "Eager Learner",
    description: "Constantly seeking new knowledge and skills to stay ahead in the field",
    icon: Code,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Strengths
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Strengths */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Core Strengths
            </h3>
            <div className="space-y-4">
              {strengths.map((strength) => {
                const Icon = strength.icon;
                return (
                  <Card
                    key={strength.title}
                    className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {strength.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {strength.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
