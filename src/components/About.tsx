import { GraduationCap, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">B.Tech in Mechanical Engineering</h3>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground font-medium">
                  PVKK Institute of Technology, Anantapur
                </p>
                <p className="text-sm text-muted-foreground">2020 - 2024</p>
                <p className="text-sm leading-relaxed text-foreground">
                  Graduated with comprehensive knowledge in mechanical systems, 
                  design principles, and modern engineering practices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Intermediate (MPC)</h3>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground font-medium">
                  Sri Vivekananda Junior College
                </p>
                <p className="text-sm text-muted-foreground">2018 - 2020</p>
                <p className="text-sm leading-relaxed text-foreground">
                  Built a strong foundation in Mathematics, Physics, and Chemistry, 
                  preparing for advanced engineering studies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a dedicated and hardworking professional with a passion for learning 
            new technologies and applying innovative solutions to real-world problems. 
            My adaptable nature and commitment to excellence drive me to continuously 
            improve and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};
