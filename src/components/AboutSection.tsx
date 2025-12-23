import { GraduationCap, Target, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-mono text-sm">01</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Text */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-foreground/90 text-lg leading-relaxed">
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

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-card border border-border card-hover">
                <GraduationCap className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-medium">B.Tech CSE</p>
                <p className="text-sm text-muted-foreground">IIIT Vadodara</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border card-hover">
                <Target className="w-5 h-5 text-accent mb-2" />
                <p className="text-sm text-muted-foreground">Focus Areas</p>
                <p className="font-medium">Game Dev & XR</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border card-hover">
                <Sparkles className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Interests</p>
                <p className="font-medium">Player Psychology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
