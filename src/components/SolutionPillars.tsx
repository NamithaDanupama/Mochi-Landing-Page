import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Hand, Shield, Sparkles } from "lucide-react";

export const SolutionPillars = () => {
  const pillars = [
    {
      icon: Brain,
      badge: "AI Early Intervention",
      title: "Proactive Speech Screening",
      description: "Advanced AI detects speech and developmental delays years before traditional methods, using our proprietary SCI (Speech Concern Indicator) technology.",
      features: [
        "Real-time speech pattern analysis",
        "Early warning system for parents",
        "Personalized intervention plans",
        "Progress tracking dashboard"
      ],
      color: "primary",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Hand,
      badge: "Guaranteed Active Play",
      title: "Mirror Me Motion Detection",
      description: "Revolutionary 3D play technology that keeps children actively engaged, not passively watching. Every interaction requires physical movement.",
      features: [
        "Full-body motion tracking",
        "Interactive games & challenges",
        "Zero passive screen time",
        "Adaptive difficulty levels"
      ],
      color: "secondary",
      gradient: "from-secondary to-emerald-400"
    },
    {
      icon: Shield,
      badge: "Teacher Safety Net",
      title: "Automated Care Management",
      description: "Free teachers from administrative burden with intelligent automation, medication reminders, and instant emergency reporting.",
      features: [
        "Smart medication tracking",
        "One-click emergency reports",
        "Automated parent notifications",
        "Digital attendance system"
      ],
      color: "accent",
      gradient: "from-accent to-yellow-400"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">How Mochi Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Three Pillars of{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Revolutionary Learning
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your classroom with AI-powered engagement, safety, and early intervention
          </p>
        </div>

        <div className="space-y-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="p-8 lg:p-12 bg-card hover:shadow-soft transition-all duration-500 border-2 group overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Badge
                      variant="secondary"
                      className={`mb-4 bg-gradient-to-r ${pillar.gradient} text-white border-0 px-4 py-1 text-sm`}
                    >
                      {pillar.badge}
                    </Badge>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {pillar.description}
                    </p>

                    <ul className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full bg-${pillar.color}/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <div className={`w-2 h-2 rounded-full bg-${pillar.color}`} />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className={`relative bg-gradient-to-br ${pillar.gradient} rounded-3xl p-12 shadow-card group-hover:shadow-glow transition-all`}>
                      <Icon className="w-full h-auto text-white/90 max-w-xs mx-auto group-hover:scale-110 transition-transform" />
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse-slow" />
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};