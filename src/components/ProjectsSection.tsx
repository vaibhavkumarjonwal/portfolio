import { ExternalLink, Glasses, ShoppingBag, Globe, Camera, Music } from 'lucide-react';

const projects = [
  {
    title: 'Virtual Piano in VR',
    description: 'Immersive VR piano learning experience with realistic interactions and haptic feedback.',
    tech: ['Unreal Engine', 'Blender', 'VR'],
    icon: Music,
    featured: true,
  },
  {
    title: 'VR Campus Tour',
    description: 'Interactive virtual tour of IIIT Vadodara campus with guided navigation.',
    tech: ['Unity', 'Blender', 'VR'],
    icon: Glasses,
  },
  {
    title: 'VR Shop',
    description: 'E-commerce VR experience with voice chat and AI-driven product recommendations.',
    tech: ['Unity', 'AI', 'Voice Chat'],
    icon: ShoppingBag,
  },
  {
    title: 'College Fest Website',
    description: 'Modern event website with engaging UI/UX design and smooth animations.',
    tech: ['React', 'UI/UX', 'Web'],
    icon: Globe,
  },
  {
    title: 'Smart Attendance System',
    description: 'Facial recognition attendance system using computer vision and IoT.',
    tech: ['OpenCV', 'Python', 'ESP32'],
    icon: Camera,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-mono text-sm">03</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group p-6 rounded-xl bg-card border border-border card-hover relative overflow-hidden ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-secondary border border-border">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
