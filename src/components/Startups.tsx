import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Award, Users, Zap, Rocket, Target, Building2 } from "lucide-react";

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
            <Building2 className="h-12 w-12 text-primary mr-4" />
            <span className="text-primary">Startup</span> <span className="text-primary ml-2">Support</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover successful startups incubated at IIC NITT and learn about our comprehensive 
            support system for emerging entrepreneurs.
          </p>
        </div>


        {/* Support Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <Target className="h-8 w-8 text-primary mr-3" />
            How We Support Startups
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supportServices.map((service, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-card transition-all duration-300 text-center group text-black">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-black" />
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
            <h4 className="text-3xl font-bold text-black mb-4">
              Ready to Launch Your Startup?
            </h4>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-black" >
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
