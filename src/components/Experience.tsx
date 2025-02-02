import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Computer Vision Engineer",
      company: "MacV.ai",
      period: "September 2024 – Present",
      description: [
        "Spearheading AI-powered solutions for industrial automation",
        "Designing deep learning models using YOLO, OpenCV, and TensorFlow",
        "Collaborating with teams to integrate AI models into scalable applications",
      ],
    },
    {
      title: "Computer Vision Intern",
      company: "Intozi Tech Pvt Ltd",
      period: "May 2024 – June 2024",
      description: [
        "Utilized OpenCV for image processing tasks",
        "Worked on dataset implementation and data augmentation",
      ],
    },
    {
      title: "AI/ML Intern",
      company: "Henotic Technology Pvt Ltd",
      period: "June 2022 – August 2022",
      description: [
        "Contributed to AI/ML application development",
        "Collaborated on cutting-edge tech projects",
      ],
    },
  ];

  return (
    <section className="py-16 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Briefcase className="h-8 w-8 text-secondary" />
          Professional Experience
        </h2>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <p className="text-secondary font-medium">{exp.company}</p>
                <p className="text-muted-foreground">{exp.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;