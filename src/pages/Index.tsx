import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionPillars } from "@/components/SolutionPillars";
import { SocialProof } from "@/components/SocialProof";
import { TeamSection } from "@/components/TeamSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-secondary/5">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionPillars />
      <SocialProof />
      <TeamSection/>
      <FinalCTA />
      
      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Mochi VTA. Revolutionizing early childhood education.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;