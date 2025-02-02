import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-primary/5 to-background">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
        KOTESWARA RAO
      </h1>
      <h2 className="text-2xl md:text-3xl text-secondary mb-6 animate-slide-up">
        Computer Vision Engineer
      </h2>
      <p className="max-w-2xl text-muted-foreground mb-8 animate-slide-up">
        Ambitious Computer Vision Engineer with expertise in AI, deep learning, and industrial automation.
      </p>
      <div className="flex gap-4 animate-slide-up">
        <Button variant="outline" size="icon" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="mailto:koti067@outlook.com">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;