import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex gap-6">
            <a
              href="mailto:dasarimanoj89@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1">
            © {currentYear} Dasari Manoj. Built with 
            <Heart className="h-4 w-4 text-primary inline" fill="currentColor" />
            and passion
          </p>
        </div>
      </div>
    </footer>
  );
};
