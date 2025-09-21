import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Presentation, Users, BookOpen, Lightbulb, Rocket,ArrowRight } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Innovation Challenges",
      description: "Regular hackathons and innovation competitions to solve real-world problems",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Presentation,
      title: "Startup Pitch Events",
      description: "Platform for students to present their startup ideas to investors and mentors",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: BookOpen,
      title: "Workshops & Seminars",
      description: "Regular sessions on entrepreneurship, innovation methodologies, and business development",
      color: "text-tertiary",
      bgColor: "bg-tertiary/10"
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "One-on-one guidance from industry experts and successful entrepreneurs",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  const upcomingEvents = [
    {
      date: "15 Aug",
      title: "Innovation Bootcamp 2024",
      description: "3-day intensive program on design thinking and innovation",
      category: "Workshop"
    },
    {
      date: "22 Aug",
      title: "Startup Pitch Competition",
      description: "Present your startup idea to a panel of investors",
      category: "Competition"
    },
    {
      date: "05 Sep",
      title: "Industry Expert Talk",
      description: "Session on 'Building Scalable Tech Startups'",
      category: "Seminar"
    }
  ];

  return (
    <section id="activities" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Our</span> <span className="text-primary">Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the diverse range of programs and events designed to nurture innovation 
            and entrepreneurship among our student community.
          </p>
        </div>

        {/* Main Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card key={index} className="glass-card hover-lift group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-8 flex justify-center">
                  <div className={`p-5 ${activity.bgColor} rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <activity.icon className={`h-10 w-10 ${activity.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
          
          {/* Eureka - Coming Soon */}
          <Card className="glass-card hover-lift group relative overflow-hidden border-2 border-gradient-border">
            <div className="absolute inset-0 bg-gradient-hero opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-hero opacity-20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700" />
            <CardContent className="p-8 text-center relative z-10">
              <div className="mb-8 flex justify-center">
                <div className="p-6 bg-gradient-hero rounded-2xl group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 shadow-xl animate-pulse-slow">
                  <Lightbulb className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Genesis</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">Our flagship innovation discovery platform - where breakthrough ideas meet exceptional execution</p>
              <div className="absolute top-6 right-6 bg-secondary text-secondary-foreground text-xs px-3 py-2 rounded-full font-semibold animate-glow">
                Coming Soon
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Genesis Section */}
        <div className="mb-16">
          <Card className="border-primary/20 bg-gradient-card p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-gradient-hero rounded-lg">
                <Trophy className="h-12 w-12 text-black" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">SIH Result'25</h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Proud to share that our team has cleared the <strong>Inter-College Round of Smart India Hackathon</strong>, securing a spot in the next stage with our innovative solution!
            </p>
            <div className="inline-flex items-center">
              <a
                 href="" target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-md 
                        hover:bg-green-700 transition-colors duration-300">View Result</a>
             </div>

          </Card>
        </div>
        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-8">Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-primary/20 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-hero text-black rounded-lg p-3 min-w-fit">
                        <Calendar className="h-6 w-6 text-black" />
                        <div className="text-sm/black font-semibold mt-1">{event.date}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-xl/black font-semibold">{event.title}</h4>
                          <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                            {event.category}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <Button variant="outline" size="sm">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8">Join Our Programs</h3>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Rocket className="h-6 w-6 text-primary" />
                  <span>Innovation Fellowship</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Join our exclusive fellowship program designed for aspiring innovators and entrepreneurs.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>6-month structured program</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Personal mentorship</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                    <span>Funding opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Industry networking</span>
                  </li>
                </ul>
                <Button variant="hero" className="w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
