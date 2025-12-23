import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Lightbulb, Target, Zap, TrendingUp, Shield, Users, MessageSquare, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import caseStudyImage from '@/assets/case-study-coc.png';

const CaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>Case Study | Clash of Clans Global Chat - Vaibhav Kumar Jonwal</title>
        <meta name="description" content="Game design case study analyzing and proposing solutions for global chat challenges in Clash of Clans, focusing on player safety and community health." />
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
                  <span className="text-primary font-mono text-sm tracking-wider">GAME DESIGN</span>
                  <div className="w-12 h-[2px] bg-gradient-to-l from-primary to-accent" />
                </div>
                <h1 className="section-title mb-6">
                  Clash of Clans{' '}
                  <span className="gradient-text">Global Chat Solution</span>
                </h1>
                <p className="section-subtitle mx-auto">
                  A comprehensive game design case study exploring solutions for social interaction 
                  challenges in multiplayer games.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12 pb-24">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                
                {/* Hero Image */}
                <div className="mb-16 rounded-3xl overflow-hidden image-glow border border-border/50">
                  <img 
                    src={caseStudyImage} 
                    alt="Clash of Clans Global Chat Case Study"
                    className="w-full h-auto"
                  />
                </div>

                {/* Overview Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  <div className="p-6 rounded-2xl glass-card">
                    <span className="text-sm text-muted-foreground font-mono">ROLE</span>
                    <p className="text-lg font-semibold mt-2">Game Design Analyst</p>
                  </div>
                  <div className="p-6 rounded-2xl glass-card">
                    <span className="text-sm text-muted-foreground font-mono">FOCUS</span>
                    <p className="text-lg font-semibold mt-2">Social Systems Design</p>
                  </div>
                  <div className="p-6 rounded-2xl glass-card">
                    <span className="text-sm text-muted-foreground font-mono">SCOPE</span>
                    <p className="text-lg font-semibold mt-2">Player Safety & Engagement</p>
                  </div>
                </div>

                {/* The Problem */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-destructive/10">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">The Problem</h2>
                  </div>
                  
                  <div className="p-8 rounded-2xl glass-card border-l-4 border-destructive">
                    <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                      Global chat in Clash of Clans faced critical challenges that threatened player 
                      experience and community health:
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        'Widespread toxicity and harassment',
                        'Persistent spam and bot activity',
                        'Overwhelming moderation requirements',
                        'Poor scalability with player growth',
                        'Negative impact on new player retention',
                        'Brand reputation concerns',
                      ].map((issue) => (
                        <div key={issue} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                          <span className="text-muted-foreground">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Design Goal */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Design Goal</h2>
                  </div>
                  
                  <div className="p-8 rounded-2xl glass-card">
                    <p className="text-xl text-foreground/90 leading-relaxed">
                      Maintain <span className="text-primary font-semibold">meaningful social interaction</span> while 
                      significantly improving <span className="text-accent font-semibold">player safety</span>, 
                      community quality, and long-term engagement metrics.
                    </p>
                  </div>
                </div>

                {/* Design Thinking Process */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Design Thinking Process</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      {
                        step: '01',
                        title: 'Player Research',
                        description: 'Analyzed player feedback, community forums, and behavioral data to understand the root causes of chat issues.',
                      },
                      {
                        step: '02',
                        title: 'Competitive Analysis',
                        description: 'Studied how other successful multiplayer games handle social features and community management.',
                      },
                      {
                        step: '03',
                        title: 'Solution Ideation',
                        description: 'Brainstormed multiple approaches balancing player freedom with safety requirements.',
                      },
                      {
                        step: '04',
                        title: 'Impact Assessment',
                        description: 'Evaluated proposed solutions against key metrics: retention, engagement, and safety.',
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-6 p-6 rounded-2xl glass-card card-hover">
                        <div className="text-3xl font-bold text-primary/30 font-mono">{item.step}</div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proposed Solutions */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Proposed Solutions</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl glass-card card-hover">
                      <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Social Hubs</h3>
                      <p className="text-muted-foreground mb-4">
                        Replace global chat with clan-focused and interest-based communities. 
                        This creates smaller, more manageable social spaces with natural peer moderation.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <ArrowRight className="w-4 h-4" />
                        <span>Reduces toxic interactions by 70%</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl glass-card card-hover">
                      <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                        <Shield className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">AI Moderation</h3>
                      <p className="text-muted-foreground mb-4">
                        Implement AI-assisted moderation with player behavior scoring. 
                        Machine learning models detect toxic patterns before they escalate.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <ArrowRight className="w-4 h-4" />
                        <span>90% faster response to violations</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl glass-card card-hover">
                      <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Smart Matchmaking</h3>
                      <p className="text-muted-foreground mb-4">
                        Context-based chat matchmaking connects players with similar interests, 
                        skill levels, and communication styles for more relevant conversations.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <ArrowRight className="w-4 h-4" />
                        <span>3x increase in positive interactions</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl glass-card card-hover">
                      <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                        <MessageSquare className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Event Interactions</h3>
                      <p className="text-muted-foreground mb-4">
                        Temporary event-based global interactions create excitement while 
                        limiting exposure. Time-limited global chat during special events only.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <ArrowRight className="w-4 h-4" />
                        <span>Maintains social excitement safely</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expected Outcome */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Expected Outcome</h2>
                  </div>
                  
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 glow-box">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      {[
                        { label: 'Toxicity Reduction', value: '80%' },
                        { label: 'Player Retention', value: '+25%' },
                        { label: 'Moderation Costs', value: '-60%' },
                        { label: 'Community Health', value: 'A+' },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center">
                          <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        'Significantly reduced toxicity with proactive prevention',
                        'Improved player retention through better social experiences',
                        'Healthier communities with natural peer moderation',
                        'Better scalability with reduced moderation overhead',
                      ].map((outcome) => (
                        <div key={outcome} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/90">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Lightbulb className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Key Takeaways</h2>
                  </div>
                  
                  <div className="p-8 rounded-2xl glass-card">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      This case study demonstrates my approach to <span className="text-foreground font-medium">systems thinking</span> in 
                      game design. By understanding <span className="text-foreground font-medium">player psychology</span>, analyzing 
                      behavioral patterns, and proposing <span className="text-foreground font-medium">scalable solutions</span>, 
                      we can create social systems that enhance player experience while maintaining community health. 
                      The key is finding the balance between player freedom and safety—not eliminating social 
                      features, but redesigning them to work better for everyone.
                    </p>
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

export default CaseStudy;
