import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "ECCD Center Owner, Little Stars Academy",
      content: "Mochi has transformed our center. We identified three children with speech delays in the first month—delays we would have missed for years with traditional methods. Parents are amazed by the early intervention.",
      rating: 5,
      initials: "SJ",
      color: "bg-primary"
    },
    {
      name: "Michael Chen",
      role: "Speech-Language Pathologist",
      content: "As a therapist, I'm blown away by Mochi's accuracy. The SCI technology catches subtle patterns I might have missed. It's like having an AI co-therapist in every classroom.",
      rating: 5,
      initials: "MC",
      color: "bg-secondary"
    },
    {
      name: "Priya Sharma",
      role: "Parent & Tech Executive",
      content: "Finally, screen time I don't feel guilty about! My daughter actively engages with Mirror Me games instead of mindlessly watching videos. Her speech development has accelerated significantly.",
      rating: 5,
      initials: "PS",
      color: "bg-accent"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Educators,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Loved by Parents
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real classrooms and families
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Avatar className={`${testimonial.color} text-white`}>
                  <AvatarFallback className={`${testimonial.color} text-white`}>
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Quote */}
        <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 shadow-soft">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-6 leading-relaxed">
              "Mochi isn't just a tool—it's a safety net for our children's development. 
              The peace of mind knowing we're catching issues early is invaluable."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <Avatar className="w-12 h-12 bg-primary text-white">
                <AvatarFallback className="bg-primary text-white">EM</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-semibold text-foreground">Emily Martinez</div>
                <div className="text-sm text-muted-foreground">Director, Bright Futures ECCD Network</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};