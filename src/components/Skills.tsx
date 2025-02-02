import { Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Libraries/Tools",
      skills: [
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Scikit-learn",
      ],
    },
    {
      title: "Concepts",
      skills: [
        "Computer Vision",
        "Deep Learning",
        "Object Detection",
        "Real-Time Analytics",
      ],
    },
  ];

  return (
    <section className="py-16 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Brain className="h-8 w-8 text-secondary" />
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;