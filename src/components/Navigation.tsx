import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#team", label: "Team"},
    { href: "/contact", label: "Contact" },
  ];
  const toTopClick=() =>{
    if(location.pathname === "/"){
      window.scrollTo({top:0,behavior:"smooth"})
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" onClick={toTopClick} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <img 
                src="/logo.png" 
                alt="Mochi Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mochi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.includes("#") ? (
                <HashLink
                  key={link.href}
                  smooth
                  to={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </HashLink>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            )}

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft hover:shadow-glow transition-all hover:scale-105"
            >
              Book Free Demo
            </Button>
          </div>

          {/* Mobile menu toggler */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.href.includes("#") ? (
                  <HashLink
                    key={link.href}
                    smooth
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </HashLink>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                Book Free Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
