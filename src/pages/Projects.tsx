import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Glasses, ShoppingBag, Globe, Camera, Music } from 'lucide-react';
import projectVrPiano from '@/assets/project-vr-piano.png';
import projectVrCampus from '@/assets/project-vr-campus.png';
import projectVrShop from '@/assets/project-vr-shop.png';
import projectFestWebsite from '@/assets/project-fest-website.png';
import projectAttendance from '@/assets/project-attendance.png';

const projects = [
  {
    title: 'Virtual Piano in VR',
    description: 'An immersive VR piano learning experience built with Unreal Engine. Features realistic hand tracking interactions, haptic feedback simulation, and visual learning aids that guide users through playing songs. The project explores effective VR interaction methods for musical education.',
    tech: ['Unreal Engine', 'Blender', 'VR', 'Haptics'],
    icon: Music,
    image: projectVrPiano,
    featured: true,
    highlights: [
      'Realistic piano key physics and sound',
      'Hand tracking integration',
      'Visual learning guides',
      'Published research at ICVARS 2025'
    ],
  },
  {
    title: 'VR Campus Tour',
    description: 'Interactive virtual tour of IIIT Vadodara campus allowing prospective students and visitors to explore the campus remotely. Features guided navigation with information hotspots, 360° views, and interactive building walkthroughs.',
    tech: ['Unity', 'Blender', 'VR', '3D Modeling'],
    icon: Glasses,
    image: projectVrCampus,
    highlights: [
      'Accurate campus 3D modeling',
      'Interactive navigation system',
      'Information hotspots',
      'Multi-platform VR support'
    ],
  },
  {
    title: 'VR Shop',
    description: 'A next-generation e-commerce VR experience featuring voice-controlled shopping, AI-driven product recommendations, and social shopping with voice chat. Users can browse, try, and purchase products in an immersive virtual store environment.',
    tech: ['Unity', 'AI', 'Voice Chat', 'E-commerce'],
    icon: ShoppingBag,
    image: projectVrShop,
    highlights: [
      'Voice-controlled navigation',
      'AI product recommendations',
      'Real-time voice chat',
      'Virtual try-on features'
    ],
  },
  {
    title: 'College Fest Website',
    description: 'A modern, engaging event website designed for college tech fest with stunning UI/UX, smooth animations, and comprehensive event management features. Built with React for optimal performance.',
    tech: ['React', 'UI/UX', 'Animation', 'Web'],
    icon: Globe,
    image: projectFestWebsite,
    highlights: [
      'Modern responsive design',
      'Smooth scroll animations',
      'Event registration system',
      'Dynamic content management'
    ],
  },
  {
    title: 'Smart Attendance System',
    description: 'An automated attendance tracking system using facial recognition technology. Combines computer vision with IoT devices for seamless, contactless attendance marking in classrooms and offices.',
    tech: ['OpenCV', 'Python', 'ESP32', 'IoT'],
    icon: Camera,
    image: projectAttendance,
    highlights: [
      'Real-time face detection',
      'Multi-face recognition',
      'IoT integration',
      'Cloud-based attendance logs'
    ],
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Vaibhav Kumar Jonwal - Game Developer</title>
        <meta name="description" content="Explore VR/AR projects, game development work, and interactive experiences by Vaibhav Kumar Jonwal." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />
                  <span className="text-primary font-mono text-sm tracking-wider">PORTFOLIO</span>
                  <div className="w-12 h-[2px] bg-gradient-to-l from-primary to-accent" />
                </div>
                <h1 className="section-title mb-6">
                  My <span className="gradient-text">Projects</span>
                </h1>
                <p className="section-subtitle mx-auto">
                  A collection of VR/AR experiences, game development projects, and interactive 
                  applications that showcase my passion for immersive technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-12 pb-24">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto space-y-8">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`project-card group ${project.featured ? 'glow-box' : ''}`}
                  >
                    <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-5'} gap-0`}>
                      {/* Image */}
                      <div className={`relative overflow-hidden ${project.featured ? 'lg:order-1' : 'md:col-span-2'}`}>
                        <div className={`${project.featured ? 'h-80 lg:h-full' : 'h-64'}`}>
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                        
                        {/* Featured badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass-card border border-primary/30">
                            <span className="text-xs font-medium text-primary">Featured Project</span>
                          </div>
                        )}
                        
                        {/* Icon overlay */}
                        <div className="absolute bottom-4 left-4 p-3 rounded-xl glass-card border border-border/50">
                          <project.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-8 ${project.featured ? 'lg:order-2 flex flex-col justify-center' : 'md:col-span-3'}`}>
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="grid sm:grid-cols-2 gap-2 mb-6">
                          {project.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-foreground/80">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="skill-badge"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Projects;
