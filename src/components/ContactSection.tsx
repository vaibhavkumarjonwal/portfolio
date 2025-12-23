import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vaibhavjonwal@gmail.com',
    href: 'mailto:vaibhavjonwal@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vaibhavjonwal',
    href: 'https://linkedin.com/in/vaibhavjonwal',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/vaibhavjonwal',
    href: 'https://github.com/vaibhavjonwal',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-mono text-sm">06</span>
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <div className="w-12 h-[2px] bg-primary" />
          </div>

          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Interested in collaboration or have a project in mind? 
            Let's create something amazing together.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-card border border-border card-hover text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-secondary border border-border mb-4 group-hover:border-primary/50 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 flex items-center justify-center gap-1">
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
