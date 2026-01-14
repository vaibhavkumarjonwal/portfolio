import { ArrowDown, Gamepad2, Glasses, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileAvatar from '@/assets/profile-avatar.png';
import heroBg from '@/assets/hero-bg.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-float delay-300" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Icon Row */}
              <div className="flex justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-fade-in-up">
                <div className="p-3 rounded-xl glass-card">
                  <Gamepad2 className="w-6 h-6 text-primary" />
                </div>
                <div className="p-3 rounded-xl glass-card">
                  <Glasses className="w-6 h-6 text-accent" />
                </div>
                <div className="p-3 rounded-xl glass-card">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in-up delay-100 leading-tight">
                Vaibhav Kumar{' '}
                <span className="gradient-text glow-text block lg:inline">Jonwal</span>
              </h1>

              {/* Title */}
              <p className="text-base md:text-lg text-muted-foreground mb-6 opacity-0 animate-fade-in-up delay-200 font-mono">
                Game Developer <span className="text-primary">•</span> AR/VR Developer{' '}
                <span className="text-primary">•</span> Designer
              </p>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0 mb-10 opacity-0 animate-fade-in-up delay-300 leading-relaxed">
                Crafting immersive experiences through innovative gameplay systems, 
                interactive design, and cutting-edge spatial technologies.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up delay-400">
                <Link to="/projects" className="btn-primary animate-pulse-glow">
                  View Projects
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in-up delay-200">
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-110" />
                
                {/* Image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden image-glow border-2 border-primary/20">
                  <img 
                    src={profileAvatar} 
                    alt="Vaibhav Kumar Jonwal - Game Developer and AR/VR Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-card border border-primary/30">
                  <span className="text-sm font-medium text-primary">B.Tech CSE @ IIIT Vadodara</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-600">
          <a href="#featured" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
