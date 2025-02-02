import { Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "YOLOv8 - Vehicle Detection and Counting",
      description:
        "Developed a vehicle detection and counting system using YOLOv8 and ByteTrack. The system detects vehicles in video footage, tracks their movement, and counts vehicles crossing a predefined line.",
      tech: ["YOLOv8", "ByteTrack", "Python", "OpenCV"],
    },
    {
      title: "Sentiment Analysis with Transformer-Based Models",
      description:
        "Explored and compared BERT, RoBERTa, ALBERT, and XLNet for sentiment analysis. Fine-tuned models on sentiment classification tasks and analyzed performance.",
      tech: ["BERT", "RoBERTa", "PyTorch", "Transformers"],
    },
    {
      title: "Credit Card Lead Prediction",
      description:
        "Achieved 94% accuracy by training a Random Forest model to predict potential credit card leads, showcasing strong algorithmic skills and predictive analytics expertise.",
      tech: ["Random Forest", "Scikit-learn", "Python", "Pandas"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Code className="h-8 w-8 text-secondary" />
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary/10 text-secondary rounded-md text-sm"
                    >
                      {tech}
                    </span>
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

export default Projects;