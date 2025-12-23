import { Lightbulb, Target, Zap, TrendingUp, Shield, Users, MessageSquare } from 'lucide-react';

const CaseStudySection = () => {
  return (
    <section id="case-study" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-mono text-sm">04</span>
            <h2 className="text-3xl md:text-4xl font-bold">Case Study</h2>
          </div>

          <p className="text-muted-foreground mb-12 max-w-2xl">
            A game design analysis exploring solutions for social interaction challenges in multiplayer games.
          </p>

          {/* Case Study Card */}
          <div className="rounded-2xl bg-card border border-border overflow-hidden">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                <span className="text-sm font-mono text-muted-foreground">Game Design Case Study</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Clash of Clans – Global Chat Solution
              </h3>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Problem */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-destructive" />
                  <h4 className="text-lg font-semibold">The Problem</h4>
                </div>
                <p className="text-muted-foreground">
                  Global chat faced critical issues: toxicity, spam, moderation challenges, 
                  and poor scalability. These problems degraded player experience and 
                  threatened community health.
                </p>
              </div>

              {/* Design Goal */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  <h4 className="text-lg font-semibold">Design Goal</h4>
                </div>
                <p className="text-muted-foreground">
                  Maintain meaningful social interaction while improving player safety, 
                  community quality, and long-term engagement metrics.
                </p>
              </div>

              {/* Solutions */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold">Proposed Solutions</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <Users className="w-5 h-5 text-primary mb-2" />
                    <p className="font-medium mb-1">Social Hubs</p>
                    <p className="text-sm text-muted-foreground">
                      Replace global chat with clan-focused and interest-based communities.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <Shield className="w-5 h-5 text-accent mb-2" />
                    <p className="font-medium mb-1">AI Moderation</p>
                    <p className="text-sm text-muted-foreground">
                      Implement AI-assisted moderation and player behavior scoring.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <Target className="w-5 h-5 text-primary mb-2" />
                    <p className="font-medium mb-1">Smart Matchmaking</p>
                    <p className="text-sm text-muted-foreground">
                      Context-based chat matchmaking for relevant conversations.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <MessageSquare className="w-5 h-5 text-accent mb-2" />
                    <p className="font-medium mb-1">Event Interactions</p>
                    <p className="text-sm text-muted-foreground">
                      Temporary event-based global interactions instead of permanent chat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Outcome */}
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold">Expected Outcome</h4>
                </div>
                <p className="text-foreground/90">
                  Reduced toxicity, improved player retention, healthier communities, 
                  and better scalability—demonstrating systems thinking and player psychology understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
