import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  TrendingUp,
  Award,
  Users,
  Zap,
  Rocket,
  Target,
  Building2,
} from "lucide-react";

const Startups = () => {
  const supportServices = [
    {
      icon: TrendingUp,
      title: "Business Development",
      description:
        "Strategic guidance for scaling your startup from MVP to market leader",
      color:
        "bg-gradient-to-tr from-pink-500 via-rose-500 to-red-500 hover:from-pink-600 hover:via-rose-600 hover:to-red-600",
    },
    {
      icon: Award,
      title: "Funding Support",
      description:
        "Connect with investors, VCs, and government funding schemes",
      color:
        "bg-gradient-to-tr from-violet-500 via-purple-500 to-indigo-500 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600",
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description:
        "Access to industry experts and successful entrepreneurs",
      color:
        "bg-gradient-to-tr from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600",
    },
    {
      icon: Zap,
      title: "Technical Resources",
      description:
        "State-of-the-art labs, equipment, and technical expertise",
      color:
        "bg-gradient-to-tr from-amber-400 via-orange-500 to-red-500 hover:from-amber-500 hover:via-orange-600 hover:to-red-600",
    },
  ];

  return (
    <section id="startups" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
            <Building2 className="h-12 w-12 text-primary mr-4" />
            <span className="text-primary">Startup</span>{" "}
            <span className="text-secondary">Support</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover successful startups incubated at IIC NITT and learn about
            our comprehensive support system for emerging entrepreneurs.
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
              <Card
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${service.color} text-white`}
              >
                <CardContent className="p-6 backdrop-blur-sm bg-black/10">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <service.icon className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 drop-shadow-md">
                    {service.title}
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
<div className="text-center bg-gradient-to-br from-fuchsia-600 via-purple-700 to-indigo-700 rounded-3xl p-10 md:p-14 shadow-2xl border border-white/20">
<h4 className="text-4xl font-extrabold text-white mb-6 drop-shadow-xl tracking-wide">
Ready to Launch Your Startup?
</h4>
<p className="text-white/95 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
Join our incubation program and transform your innovative idea into a successful business
with comprehensive support and mentorship.
</p>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<Button variant="secondary" size="lg" className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold hover:from-amber-500 hover:to-yellow-600 shadow-lg px-8 py-4 rounded-xl">
Apply for Incubation
</Button>
<Button variant="outline" size="lg" className="bg-white/10 border-white text-white font-semibold hover:bg-white hover:text-primary shadow-lg px-8 py-4 rounded-xl">
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
