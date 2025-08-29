import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, Users, TrendingUp, Award, BookOpen } from "lucide-react";
import clockTowerImage from "@/assets/nitt-clock-tower.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clock Tower Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ 
          backgroundImage: `url(${clockTowerImage})`,
          filter: 'blur(0.5px)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-tertiary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-card border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-foreground">Ministry of Education Initiative</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">
              Institution's
            </span>
            <br />
            <span className="text-primary">Innovation Council</span>
            <br />
            <span className="text-2xl md:text-4xl font-normal text-primary">
              NIT Tiruchirappalli
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Fostering a culture of innovation and entrepreneurship among students through research, 
            incubation, and startup support at one of India's premier technical institutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg" asChild>
              <a href="https://forms.google.com/your-form-id" target="_blank" rel="noopener noreferrer">
                <Rocket className="h-5 w-5" />
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              <Users className="h-5 w-5" />
              Join Community
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-card border border-primary/20 rounded-2xl p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2 text-center">20+</div>
              <div className="text-muted-foreground text-center">Active Startups</div>
            </div>
            <div className="bg-gradient-card border border-primary/20 rounded-2xl p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2 text-center">100+</div>
              <div className="text-muted-foreground text-center">Programs</div>
            </div>
            <div className="bg-gradient-card border border-primary/20 rounded-2xl p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-tertiary" />
              </div>
              <div className="text-3xl font-bold text-tertiary mb-2 text-center">1000+</div>
              <div className="text-muted-foreground text-center">Students Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;