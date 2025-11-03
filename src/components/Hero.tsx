import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolio } from "@/hooks/usePortfolio";

export const Hero = () => {
  const { profile } = usePortfolio();
  
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-semibold">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                {profile?.full_name || "Dasari Manoj"}
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                {profile?.title || "Mechanical Engineer"}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile?.bio || "A passionate and hardworking engineer from PVKK Institute of Technology, specializing in innovative solutions and eager to contribute to cutting-edge projects."}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="group">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              {profile?.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              )}
              {profile?.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="h-6 w-6" />
                </a>
              )}
              {profile?.linkedin_url && (
                <a
                  href={profile.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
              {profile?.github_url && (
                <a
                  href={profile.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>

          {/* Right side - Profile image placeholder */}
          <div className="flex justify-center animate-slide-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-primary animate-glow-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-card flex items-center justify-center text-6xl font-bold text-primary">
                  DM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
