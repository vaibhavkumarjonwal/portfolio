import { Link } from 'react-router-dom';
import { ArrowRight, Figma, Glasses, Music, Palette } from 'lucide-react';
import projectVrPiano from '@/assets/project-vr-piano.png';
import projectVrCampus from '@/assets/project-vr-campus.png';
import figma from '@/assets/figma.png';

const featuredProjects = [
  {
    title: 'Virtual Piano in VR',
    description: 'Immersive VR piano learning experience with realistic interactions and haptic feedback.',
    tech: ['Unreal Engine', 'Blender', 'VR'],
    icon: Music,
    image: projectVrPiano,
    link: 'https://www.linkedin.com/posts/vaibhav-jonwal-758a1927b_unrealengine-virtualreality-metaverse-activity-7345578378202075136-BNKA',
  },
  {
    title: 'VR Campus Tour',
    description: 'Interactive virtual tour of IIIT Vadodara campus with guided navigation.',
    tech: ['Unity', 'Blender', 'VR'],
    icon: Glasses,
    image: projectVrCampus,
    link: 'https://iiitvadodara-eta.vercel.app/',
  },
  {
    title: 'Product Design Portfolio',
    description: 'UI/UX designs in Figma showcasing user-centered design principles and interactive prototypes.',
    tech: ['Figma', 'UI/UX', 'Prototyping'],
    icon: Palette,
    image: figma,
    link: 'https://www.figma.com/design/lJaMOShhwoJBCG6ybaSjaM/Portfolio-Projects?node-id=15-585&t=QcB4c0sgmPlpyx97-1',
  },
];

const FeaturedProjects = () => {
  return (
    <section id="featured" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />
                <span className="text-primary font-mono text-sm tracking-wider">FEATURED WORK</span>
              </div>
              <h2 className="section-title">Selected Projects</h2>
            </div>
            <Link 
              to="/projects" 
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="font-medium">View all projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl glass-card border border-border/50">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary/80 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
