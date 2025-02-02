import { Brain, BrainCircuit, Code, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-8 w-8 text-secondary" />
            <span className="font-bold text-xl">KR</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Button variant="ghost" className="gap-2" asChild>
              <Link to="#experience">
                <Brain className="h-4 w-4" />
                Experience
              </Link>
            </Button>
            
            <Button variant="ghost" className="gap-2" asChild>
              <Link to="#projects">
                <Code className="h-4 w-4" />
                Projects
              </Link>
            </Button>
            
            <Button variant="ghost" className="gap-2" asChild>
              <Link to="#skills">
                <Microscope className="h-4 w-4" />
                Skills
              </Link>
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