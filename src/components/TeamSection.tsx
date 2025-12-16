import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin } from "lucide-react";


const teamMembers = [
  {
    name: "Namitha Danupama",
    avatar: "/img/Namitha.jpg",
    initials: "ND",
    github: "https://github.com/NamithaDanupama",
    linkedin: "https://www.linkedin.com/in/namitha-danupama"
  },
  {
    name: "Thewan Jayaweera",
    avatar: "/img/Thewan.jpg",
    initials: "TJ",
    github: "https://github.com/Thewjay",
    linkedin: "https://www.linkedin.com/in/thewanjayaweera/"
  },
  {
    name: "Sandes Damunugalla",
    avatar: "/img/Sandes.jpg",
    initials: "SD",
    github: "https://github.com/Sandes-Damunu",
    linkedin: "https://www.linkedin.com/in/sandes-damunugalla/"
  },
  {
    name: "Movindu Gamage",
    avatar: "/img/Movindu.jpg",
    initials: "MG",
    github: "https://github.com/Movindu-Gamage",
    linkedin: "https://www.linkedin.com/in/movindu-gamage-462102333/"
  },
  {
    name: "Hesandu Disanayake",
    avatar: "/img/Hesandu.jpg",
    initials: "HD",
    github: "https://github.com/Hesanduu",
    linkedin: "https://www.linkedin.com/in/hesandudissanayake/"
  },
  {
    name: "Punsith Wickramanayaka",
    avatar: "/img/Punsith.JPG",
    initials: "PW",
    github: "https://github.com/PunsithR",
    linkedin: "https://www.linkedin.com/in/punsith-wickramanayaka-988771332/"
  }
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented developers and designers bringing Mochi to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in border-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-lg bg-primary/10 text-primary">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="flex justify-center gap-3">
                  <a 
                    href={member.github}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a 
                    href={member.linkedin}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
