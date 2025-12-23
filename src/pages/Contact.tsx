import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Linkedin, Github, ArrowUpRight, Send, MapPin } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vaibhavjonwal@gmail.com',
    href: 'mailto:vaibhavjonwal@gmail.com',
    description: 'Drop me a line anytime',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vaibhavjonwal',
    href: 'https://linkedin.com/in/vaibhavjonwal',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/vaibhavjonwal',
    href: 'https://github.com/vaibhavjonwal',
    description: 'Check out my code',
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Vaibhav Kumar Jonwal - Game Developer</title>
        <meta name="description" content="Get in touch with Vaibhav Kumar Jonwal for game development, AR/VR projects, or collaboration opportunities." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />
                  <span className="text-primary font-mono text-sm tracking-wider">CONTACT</span>
                  <div className="w-12 h-[2px] bg-gradient-to-l from-primary to-accent" />
                </div>
                <h1 className="section-title mb-6">
                  Let's <span className="gradient-text">Connect</span>
                </h1>
                <p className="section-subtitle mx-auto">
                  Interested in collaboration, have a project in mind, or just want to chat about 
                  game development and AR/VR? I'd love to hear from you.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-12 pb-24">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                
                {/* Location Card */}
                <div className="p-8 rounded-2xl glass-card mb-12 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Based in India</h3>
                  <p className="text-muted-foreground">
                    IIIT Vadodara, Gujarat • Open to remote opportunities worldwide
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="group p-8 rounded-2xl glass-card card-hover text-center"
                    >
                      <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                        <link.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                        {link.label}
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{link.description}</p>
                      <p className="text-sm text-primary font-mono truncate">
                        {link.value}
                      </p>
                    </a>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center glow-box">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to create something amazing?
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    Whether it's a VR experience, a game prototype, or an immersive application, 
                    I'm excited to bring creative ideas to life.
                  </p>
                  <a
                    href="mailto:vaibhavjonwal@gmail.com"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send me an email
                  </a>
                </div>

                {/* What I'm Looking For */}
                <div className="mt-16">
                  <h3 className="text-xl font-semibold text-center mb-8">
                    What I'm interested in
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      'Game Development Roles',
                      'AR/VR Projects',
                      'Game Design Consulting',
                      'Open Source Collaboration',
                    ].map((interest) => (
                      <div
                        key={interest}
                        className="p-4 rounded-xl glass-card text-center"
                      >
                        <span className="text-sm text-foreground/90">{interest}</span>
                      </div>
                    ))}
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

export default Contact;
