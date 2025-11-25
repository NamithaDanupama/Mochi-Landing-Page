import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import mochiAvatar from "@/assets/mochi-avatar.jpeg";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 shadow-soft">
              <Sparkles className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                AI-Powered Early Learning
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Stop the Screen Scramble.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Start Smart Learning.
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              The 'Mochi' VTA: Guaranteed Active Engagement, Not Addiction.
            </p>

            {/* Slogan */}
            <p className="text-lg text-foreground/80">
              Revolutionizing the future of early childhood education. One prompt at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-glow hover:scale-105 transition-all text-lg px-8 py-6 rounded-2xl group"
              >
                Book a Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft text-lg px-8 py-6 rounded-2xl group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">ECCD Centers</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Children</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Visual - 40% */}
          <div className="relative animate-float">
            {/* TV Screen Frame */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl">
              {/* Screen Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
              
              {/* Screen Content */}
              <div className="relative bg-white rounded-2xl p-8 shadow-card overflow-hidden">
                {/* Mochi Avatar */}
                <img
                  src={mochiAvatar}
                  alt="Mochi Virtual Teaching Assistant"
                  className="w-full h-auto animate-bounce-slow"
                />
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-soft animate-bounce-slow" style={{ animationDelay: "0.5s" }}>
                  Mirror Me! 🤚
                </div>
                <div className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-soft animate-bounce-slow" style={{ animationDelay: "1s" }}>
                  Say "Hello" 👋
                </div>
              </div>

              {/* Stand */}
              <div className="mx-auto w-24 h-4 bg-gray-700 rounded-b-xl mt-2" />
              <div className="mx-auto w-32 h-2 bg-gray-600 rounded-full" />
            </div>

            {/* Decorative Stars 
            <div className="absolute -top-4 -left-4 text-4xl animate-bounce-slow">⭐</div>
            <div className="absolute -bottom-4 -right-4 text-4xl animate-bounce-slow" style={{ animationDelay: "0.7s" }}>🌟</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};