const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and tagline */}
            <div className="text-center md:text-left">
              <span className="text-2xl font-bold gradient-text">VKJ</span>
              <p className="text-sm text-muted-foreground mt-1">
                Game Developer & AR/VR Designer
              </p>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vaibhav Kumar Jonwal. All rights reserved.
            </p>

            {/* Built with */}
            <p className="text-sm text-muted-foreground font-mono">
              Built for immersive experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
