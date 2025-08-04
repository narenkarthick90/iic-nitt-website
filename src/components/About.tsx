import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Zap, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Central hub for ideation, research, and development of innovative solutions to real-world problems."
    },
    {
      icon: Zap,
      title: "Startup Incubation",
      description: "Comprehensive support system for student entrepreneurs from idea to market-ready solutions."
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Fostering cross-disciplinary collaboration between students, faculty, and industry experts."
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description: "Regular competitions, awards, and showcases to celebrate innovative achievements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">IIC NITT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Institution's Innovation Council at NIT Tiruchirappalli is dedicated to building 
            an innovation ecosystem that nurtures creativity, entrepreneurship, and breakthrough thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Empowering Innovation Excellence</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established under the Ministry of Education's Innovation Cell initiative, IIC NITT serves as 
              the catalyst for transforming innovative ideas into impactful solutions. We bridge the gap 
              between academic learning and practical application through structured programs and mentorship.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to create an ecosystem where students can explore, experiment, and excel 
              in their entrepreneurial journey while contributing to India's innovation landscape.
            </p>
            <Button variant="hero" size="lg">
              Learn More About Our Mission
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-card transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-hero rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-primary/20 hover:shadow-card transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To establish NITT as a leading innovation hub that produces world-class entrepreneurs 
                and innovators who create sustainable solutions for global challenges while contributing 
                to India's economic growth and technological advancement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-card transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To foster innovation and entrepreneurship through comprehensive programs, mentorship, 
                and resources that enable students to transform ideas into impactful ventures while 
                developing essential skills for the 21st-century economy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;