import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Award, Users, Zap } from "lucide-react";

const Startups = () => {
  const startups = [
    {
      name: "EcoTech Solutions",
      category: "GreenTech",
      description: "Revolutionary waste management system using AI and IoT for smart cities",
      stage: "Series A",
      funding: "₹2.5 Cr",
      team: "5 members",
      achievements: ["Winner - Smart India Hackathon", "NASSCOM Recognition"]
    },
    {
      name: "HealthMate AI",
      category: "HealthTech",
      description: "AI-powered diagnostic assistant for early disease detection",
      stage: "Seed",
      funding: "₹80 L",
      team: "4 members",
      achievements: ["Forbes 30 Under 30", "Government Grant Recipient"]
    },
    {
      name: "AgriVision",
      category: "AgriTech",
      description: "Precision farming solutions using drone technology and data analytics",
      stage: "Pre-Series A",
      funding: "₹1.2 Cr",
      team: "6 members",
      achievements: ["Best AgriTech Startup 2023", "Export to 3 Countries"]
    }
  ];

  const supportServices = [
    {
      icon: TrendingUp,
      title: "Business Development",
      description: "Strategic guidance for scaling your startup from MVP to market leader"
    },
    {
      icon: Award,
      title: "Funding Support",
      description: "Connect with investors, VCs, and government funding schemes"
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Access to industry experts and successful entrepreneurs"
    },
    {
      icon: Zap,
      title: "Technical Resources",
      description: "State-of-the-art labs, equipment, and technical expertise"
    }
  ];

  return (
    <section id="startups" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Startup</span> Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover successful startups incubated at IIC NITT and learn about our comprehensive 
            support system for emerging entrepreneurs.
          </p>
        </div>

        {/* Featured Startups */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Startups</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startups.map((startup, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {startup.name}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {startup.category}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground">{startup.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Stage</p>
                      <p className="font-semibold">{startup.stage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Funding</p>
                      <p className="font-semibold text-primary">{startup.funding}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Team Size</p>
                    <p className="font-semibold">{startup.team}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Key Achievements</p>
                    <div className="space-y-1">
                      {startup.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">How We Support Startups</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supportServices.map((service, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-card transition-all duration-300 text-center group">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12">
            <h4 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Launch Your Startup?
            </h4>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Join our incubation program and transform your innovative idea into a successful business 
              with comprehensive support and mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Apply for Incubation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startups;