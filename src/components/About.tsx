import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Zap, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Central hub for ideation, research, and development of innovative solutions to real-world problems.",
      color:
        "bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 hover:from-yellow-400 hover:via-orange-500 hover:to-red-400",
    },
    {
      icon: Zap,
      title: "Startup Incubation",
      description:
        "Comprehensive support system for student entrepreneurs from idea to market-ready solutions.",
      color:
        "bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400 hover:from-pink-400 hover:via-rose-500 hover:to-red-500",
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description:
        "Fostering cross-disciplinary collaboration between students, faculty, and industry experts.",
      color:
        "bg-gradient-to-br from-green-300 via-green-400 to-emerald-400 hover:from-green-400 hover:via-emerald-500 hover:to-teal-500",
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description:
        "Regular competitions, awards, and showcases to celebrate innovative achievements.",
      color:
        "bg-gradient-to-br from-blue-300 via-blue-400 to-indigo-400 hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">About</span>{" "}
            <span className="text-primary">IIC</span>{" "}
            <span className="text-tertiary">NITT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Institution's Innovation Council at NIT Tiruchirappalli is
            dedicated to building an innovation ecosystem that nurtures
            creativity, entrepreneurship, and breakthrough thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-primary">Empowering</span>{" "}
              <span className="text-primary">Innovation</span>{" "}
              <span className="text-tertiary">Excellence</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established under the Ministry of Education's Innovation Cell
              initiative, IIC NITT serves as the catalyst for transforming
              innovative ideas into impactful solutions. We bridge the gap
              between academic learning and practical application through
              structured programs and mentorship.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to create an ecosystem where students can explore,
              experiment, and excel in their entrepreneurial journey while
              contributing to India's innovation landscape.
            </p>
            <Button variant="hero" size="lg">
              Learn More About Our Mission
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`${feature.color} border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl`}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-white/70 backdrop-blur-md rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <feature.icon className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-black">
                    {feature.title}
                  </h4>
                  <p className="text-black/80 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-purple-300 via-purple-400 to-fuchsia-400 hover:from-purple-400 hover:via-fuchsia-500 hover:to-pink-500 border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/70 backdrop-blur-md rounded-lg mr-4 shadow-md">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold flex items-center">
                  <Eye className="h-6 w-6 text-primary mr-2" />
                  <span className="text-primary">Our</span>{" "}
                  <span className="text-secondary">Vision</span>
                </h3>
              </div>
              <p className="text-black/80 leading-relaxed">
                To establish NITT as a leading innovation hub that produces
                world-class entrepreneurs and innovators who create sustainable
                solutions for global challenges while contributing to India's
                economic growth and technological advancement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-300 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:via-teal-500 hover:to-cyan-500 border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/70 backdrop-blur-md rounded-lg mr-4 shadow-md">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold flex items-center">
                  <Target className="h-6 w-6 text-secondary mr-2" />
                  <span className="text-secondary">Our</span>{" "}
                  <span className="text-tertiary">Mission</span>
                </h3>
              </div>
              <p className="text-black/80 leading-relaxed">
                To foster innovation and entrepreneurship through comprehensive
                programs, mentorship, and resources that enable students to
                transform ideas into impactful ventures while developing
                essential skills for the 21st-century economy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
