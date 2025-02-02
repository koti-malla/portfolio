import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
};

export default Index;