import { Gamepad2, Code, Palette, Wrench, Cloud } from 'lucide-react';

const skillCategories = [
  {
    icon: Gamepad2,
    title: 'Game Dev & AR/VR',
    skills: ['Unreal Engine', 'Unity', 'Godot', 'Blender'],
    color: 'primary',
  },
  {
    icon: Code,
    title: 'Programming',
    skills: ['C++', 'Python', 'JavaScript'],
    color: 'accent',
  },
  {
    icon: Palette,
    title: 'UI/UX & Design',
    skills: ['Figma', 'Photoshop', 'Illustrator'],
    color: 'primary',
  },
  {
    icon: Wrench,
    title: 'Tools & Software',
    skills: ['Git', 'GitHub', 'Adobe Suite', 'FL Studio'],
    color: 'accent',
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    skills: ['AWS', 'GCP', 'Azure'],
    color: 'primary',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-mono text-sm">02</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-${category.color}/10 mb-4`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
