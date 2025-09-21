import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Lightbulb } from "lucide-react";
import iicLogo from "@/assets/iic-logo.png";
import nittLogo from "@/assets/nitt-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Startups", href: "#startups" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
    { name: "SIH Results", href: "https://sih-iic-results.netlify.app/"},
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <img src={iicLogo} alt="IIC Logo" className="h-10 w-15" />
              <img src={nittLogo} alt="NITT Logo" className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">IIC NITT</h1>
              <p className="text-xs text-muted-foreground">Innovation Council</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Join Innovation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button variant="hero" className="w-full mt-4">
              Join Innovation
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
