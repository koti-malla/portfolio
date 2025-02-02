import { Brain, BrainCircuit, Code, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-8 w-8 text-secondary" />
            <button 
              onClick={() => scrollToSection('home')} 
              className="font-bold text-xl hover:text-secondary transition-colors"
            >
              KR
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="gap-2" 
              onClick={() => scrollToSection('experience')}
            >
              <Brain className="h-4 w-4" />
              Experience
            </Button>
            
            <Button 
              variant="ghost" 
              className="gap-2" 
              onClick={() => scrollToSection('projects')}
            >
              <Code className="h-4 w-4" />
              Projects
            </Button>
            
            <Button 
              variant="ghost" 
              className="gap-2" 
              onClick={() => scrollToSection('skills')}
            >
              <Microscope className="h-4 w-4" />
              Skills
            </Button>
            
            <Button variant="secondary" asChild>
              <a href="mailto:koti067@outlook.com">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;