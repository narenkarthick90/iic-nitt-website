import { Button } from "@/components/ui/button";
import { Lightbulb, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Startups", href: "#startups" },
    { name: "Team", href: "#team" },
  ];

  const programs = [
    { name: "Innovation Fellowship", href: "#" },
    { name: "Startup Incubation", href: "#" },
    { name: "Mentorship Program", href: "#" },
    { name: "Innovation Challenges", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-hero rounded-lg">
                <Lightbulb className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">IIC NITT</h3>
                <p className="text-sm text-muted-foreground">Innovation Council</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fostering innovation and entrepreneurship at NIT Tiruchirappalli through 
              comprehensive programs and mentorship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    National Institute of Technology<br />
                    Tiruchirappalli - 620015<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:iic@nitt.edu"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  iic@nitt.edu
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+914312503000"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  +91 431 250 3000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6">Powered By</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">MoE</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Ministry of Education</p>
                  <p className="text-muted-foreground text-sm">Government of India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">NITT</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">NIT Tiruchirappalli</p>
                  <p className="text-muted-foreground text-sm">Institute of National Importance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Institution's Innovation Council, NIT Tiruchirappalli. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;