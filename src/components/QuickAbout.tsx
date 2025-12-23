import { GraduationCap, Code, Gamepad2, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Building interactive experiences with Unreal Engine, Unity, and Godot.',
    color: 'primary',
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'B.Tech CSE student at IIIT Vadodara with a passion for learning.',
    color: 'accent',
  },
  {
    icon: Code,
    title: 'Technical Skills',
    description: 'Proficient in C++, Python, JavaScript, and various game engines.',
    color: 'primary',
  },
  {
    icon: Lightbulb,
    title: 'Creative Design',
    description: 'Focused on player psychology and immersive experience design.',
    color: 'accent',
  },
];

const QuickAbout = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />
                <span className="text-primary font-mono text-sm tracking-wider">ABOUT ME</span>
              </div>
              <h2 className="section-title mb-6">
                Passionate about creating{' '}
                <span className="gradient-text">immersive experiences</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Computer Science undergraduate with a strong passion for game development, 
                AR/VR, and immersive technologies. I specialize in building interactive 
                experiences that push the boundaries of digital interaction.
              </p>
              <Link to="/about" className="btn-secondary inline-flex items-center gap-2">
                Learn more about me
              </Link>
            </div>

            {/* Right - Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl glass-card card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-${item.color}/10 mb-3`}>
                    <item.icon className={`w-5 h-5 text-${item.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAbout;
