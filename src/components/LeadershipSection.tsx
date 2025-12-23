import { Crown, Users, BookOpen, Award } from 'lucide-react';

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-mono text-sm">05</span>
            <h2 className="text-3xl md:text-4xl font-bold">Leadership & Publication</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Leadership */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Crown className="w-5 h-5 text-primary" />
                Leadership Roles
              </h3>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-card border border-border card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">President</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Student Gymkhana, IIIT Vadodara
                      </p>
                      <p className="text-sm text-foreground/80">
                        Leading student body, managing committees, and coordinating major campus events.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-card border border-border card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <BookOpen className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">General Secretary</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Academics Committee, IIIT Vadodara
                      </p>
                      <p className="text-sm text-foreground/80">
                        Coordinating academic initiatives and student-faculty collaboration.
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

              <div className="p-6 rounded-xl bg-gradient-to-br from-card to-secondary/50 border border-border card-hover glow-box">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-mono rounded bg-primary/20 text-primary">
                    ICVARS 2025
                  </span>
                  <span className="text-xs text-muted-foreground">Birmingham, UK</span>
                </div>
                <h4 className="font-semibold text-lg mb-3">
                  Immersive Metaverse Piano Tutorial
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comparative Analysis of VR Interaction Methods — exploring the effectiveness 
                  of different input modalities for musical education in virtual environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
