import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Zap } from "lucide-react";
import mochiAvatar from "@/assets/mochi-avatar.jpeg";

export const FinalCTA = () => {
  const benefits = [
    {
      icon: Zap,
      text: "Setup in under 5 minutes"
    },
    {
      icon: Shield,
      text: "No credit card required"
    },
    {
      icon: Calendar,
      text: "Free 30-day trial"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/20">
            <div className="grid lg:grid-cols-2">
              {/* Left Content */}
              <div className="p-12 lg:p-16 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Ready to{" "}
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Future-Proof
                    </span>{" "}
                    Your Classroom?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Join 500+ ECCD centers already using Mochi to transform early learning
                  </p>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-4 pt-4">
                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-glow hover:scale-105 transition-all text-lg py-6 rounded-2xl group"
                  >
                    Secure Your Demo Time
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    🔒 Your data is protected by enterprise-grade encryption
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                  <div className="text-sm text-muted-foreground">Trusted by:</div>
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground">
                    <span>✅ WHO Guidelines</span>
                    <span>✅ GDPR Compliant</span>
                    <span>✅ ISO Certified</span>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/50 rounded-full blur-3xl animate-pulse-slow" />
                  <img
                    src={mochiAvatar}
                    alt="Mochi Avatar"
                    className="relative w-64 h-auto animate-float drop-shadow-2xl"
                  />
                  
                  {/* Floating Emojis */}
                  <div className="absolute -top-8 -left-8 text-4xl animate-bounce-slow">🎯</div>
                  <div className="absolute -bottom-8 -right-8 text-4xl animate-bounce-slow" style={{ animationDelay: "0.5s" }}>🚀</div>
                  <div className="absolute top-1/2 -right-12 text-4xl animate-bounce-slow" style={{ animationDelay: "1s" }}>⭐</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-foreground">&lt; 2min</div>
              <div className="text-sm text-muted-foreground">Average Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};