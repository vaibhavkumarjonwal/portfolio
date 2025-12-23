import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import QuickAbout from '@/components/QuickAbout';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vaibhav Kumar Jonwal | Game Developer & AR/VR Designer</title>
        <meta
          name="description"
          content="Portfolio of Vaibhav Kumar Jonwal - Game Developer, AR/VR Developer, and Game Designer specializing in immersive experiences, gameplay systems, and interactive design."
        />
        <meta
          name="keywords"
          content="game developer, ar vr developer, game designer, unreal engine, unity, immersive experiences, vaibhav jonwal"
        />
        <link rel="canonical" href="https://vaibhavjonwal.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <QuickAbout />
          <FeaturedProjects />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
