import { Card } from "@/components/ui/card";
import { AlertTriangle, Brain, Clock } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Screen Addiction Crisis",
      stat: "47%",
      description: "of children under 5 show signs of digital dependency",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: Brain,
      title: "Developmental Delays",
      stat: "3-5 Years",
      description: "average delay in speech detection using traditional methods",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Clock,
      title: "Teacher Overload",
      stat: "68%",
      description: "of ECCD teachers report burnout from administrative tasks",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Hidden Crisis:{" "}
            <span className="text-destructive">Why Traditional Methods Are Failing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Early childhood education faces unprecedented challenges that threaten our children's future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${problem.bgColor} flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${problem.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                
                <div className={`text-5xl font-bold mb-4 ${problem.color}`}>
                  {problem.stat}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Call to Awareness */}
        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-foreground/80 max-w-2xl mx-auto">
            These aren't just statistics—they're our children's futures at stake. 
            <span className="text-primary font-bold"> It's time for a solution.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

