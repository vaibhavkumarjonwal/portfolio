import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GraduationCap, Target, Sparkles, Crown, Users, BookOpen, Award, Gamepad2, Code, Palette, Wrench, Cloud } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.png';

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

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Vaibhav Kumar Jonwal - Game Developer</title>
        <meta name="description" content="Learn about Vaibhav Kumar Jonwal, a Game Developer and AR/VR Designer with expertise in Unreal Engine, Unity, and immersive technologies." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                  {/* Profile Image */}
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl scale-110" />
                      <div className="relative w-64 h-64 rounded-3xl overflow-hidden image-glow border border-primary/20">
                        <img 
                          src={profileAvatar} 
                          alt="Vaibhav Kumar Jonwal" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* About Text */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />
                      <span className="text-primary font-mono text-sm tracking-wider">ABOUT ME</span>
                    </div>
                    <h1 className="section-title mb-6">
                      Vaibhav Kumar <span className="gradient-text">Jonwal</span>
                    </h1>
                    <div className="space-y-4 text-lg">
                      <p className="text-foreground/90 leading-relaxed">
                        Computer Science undergraduate at{' '}
                        <span className="text-primary font-medium">IIIT Vadodara</span> with a 
                        strong passion for game development, AR/VR, and immersive technologies.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        I specialize in building interactive experiences using Unreal Engine, Unity, 
                        Godot, and Blender. My work focuses on player experience, game systems design, 
                        and leveraging emerging technologies to create meaningful digital interactions.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        With a foundation in both technical development and design thinking, 
                        I bridge the gap between creative vision and technical implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl glass-card card-hover text-center">
                    <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Education</p>
                    <p className="font-semibold">B.Tech CSE</p>
                    <p className="text-sm text-muted-foreground">IIIT Vadodara</p>
                  </div>

                  <div className="p-6 rounded-2xl glass-card card-hover text-center">
                    <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Focus Areas</p>
                    <p className="font-semibold">Game Dev & XR</p>
                    <p className="text-sm text-muted-foreground">Immersive Tech</p>
                  </div>

                  <div className="p-6 rounded-2xl glass-card card-hover text-center">
                    <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Interests</p>
                    <p className="font-semibold">Player Psychology</p>
                    <p className="text-sm text-muted-foreground">System Design</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />
                    <span className="text-primary font-mono text-sm tracking-wider">EXPERTISE</span>
                    <div className="w-12 h-[2px] bg-gradient-to-l from-primary to-accent" />
                  </div>
                  <h2 className="section-title">Skills & Technologies</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillCategories.map((category, index) => (
                    <div
                      key={category.title}
                      className="p-6 rounded-2xl glass-card card-hover"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`inline-flex p-3 rounded-xl bg-${category.color}/10 mb-4`}>
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

          {/* Leadership Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />
                    <span className="text-primary font-mono text-sm tracking-wider">LEADERSHIP</span>
                    <div className="w-12 h-[2px] bg-gradient-to-l from-primary to-accent" />
                  </div>
                  <h2 className="section-title">Leadership & Publication</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Leadership */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Crown className="w-5 h-5 text-primary" />
                      Leadership Roles
                    </h3>

                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl glass-card card-hover">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">President</h4>
                            <p className="text-muted-foreground text-sm mb-2">
                              Student Gymkhana, IIIT Vadodara
                            </p>
                            <p className="text-sm text-foreground/80">
                              Leading student body, managing committees, organizing major campus events, and coordinating with stakeholders.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl glass-card card-hover">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-accent/10">
                            <BookOpen className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">General Secretary</h4>
                            <p className="text-muted-foreground text-sm mb-2">
                              Academics Committee, IIIT Vadodara
                            </p>
                            <p className="text-sm text-foreground/80">
                              Coordinating academic initiatives and fostering student-faculty collaboration.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Publication */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      Publication
                    </h3>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-secondary/50 border border-border/50 card-hover glow-box">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1.5 text-xs font-mono rounded-full bg-primary/20 text-primary border border-primary/30">
                          ICVARS 2025
                        </span>
                        <span className="text-sm text-muted-foreground">Birmingham, UK</span>
                      </div>
                      <h4 className="font-semibold text-xl mb-3">
                        Immersive Metaverse Piano Tutorial
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Comparative Analysis of VR Interaction Methods — exploring the effectiveness 
                        of different input modalities for musical education in virtual environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
