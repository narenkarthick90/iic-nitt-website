import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Presentation, Users, BookOpen, Rocket, ArrowRight } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Innovation Challenges",
      description:
        "Regular hackathons and innovation competitions to solve real-world problems",
      bgColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 hover:from-yellow-400 hover:via-orange-500 hover:to-red-400",
    },
    {
      icon: Presentation,
      title: "Startup Pitch Events",
      description:
        "Platform for students to present their startup ideas to investors and mentors",
      bgColor:
        "bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400 hover:from-pink-400 hover:via-rose-500 hover:to-red-500",
    },
    {
      icon: BookOpen,
      title: "Workshops & Seminars",
      description:
        "Regular sessions on entrepreneurship, innovation methodologies, and business development",
      bgColor:
        "bg-gradient-to-br from-green-300 via-green-400 to-emerald-400 hover:from-green-400 hover:via-emerald-500 hover:to-teal-500",
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description:
        "One-on-one guidance from industry experts and successful entrepreneurs",
      bgColor:
        "bg-gradient-to-br from-blue-300 via-blue-400 to-indigo-400 hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500",
    },
  ];

  const upcomingEvents = [
    {
      date: "15 Aug",
      title: "Innovation Bootcamp 2024",
      description: "3-day intensive program on design thinking and innovation",
      category: "Workshop",
    },
    {
      date: "22 Aug",
      title: "Startup Pitch Competition",
      description: "Present your startup idea to a panel of investors",
      category: "Competition",
    },
    {
      date: "05 Sep",
      title: "Industry Expert Talk",
      description: "Session on 'Building Scalable Tech Startups'",
      category: "Seminar",
    },
  ];

  return (
    <section id="activities" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Our</span>{" "}
            <span className="text-primary">Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the diverse range of programs and events designed to nurture
            innovation and entrepreneurship among our student community.
          </p>
        </div>

        {/* Main Activities in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className={`${activity.bgColor} border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl`}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-white/70 backdrop-blur-md rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <activity.icon className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">
                  {activity.title}
                </h3>
                <p className="text-black/80 leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Eureka and Genesis in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Eureka */}
          <Card className="bg-gradient-to-br from-purple-300 via-purple-400 to-fuchsia-400 hover:from-purple-400 hover:via-fuchsia-500 hover:to-pink-500 border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl flex flex-col justify-between">
            <CardContent className="p-8 text-center flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white/70 backdrop-blur-md rounded-lg shadow-md">
                  <Rocket className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-black">Eureka</h3>
              <p className="text-black/80 text-lg mb-6 max-w-2xl mx-auto">
                Revolutionary innovation program launching soon
              </p>
              <div className="mt-auto">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <a href="#">Learn More <ArrowRight className="h-4 w-4 ml-2" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Genesis */}
          <Card className="bg-gradient-to-br from-red-300 via-red-400 to-rose-400 hover:from-red-400 hover:via-rose-500 hover:to-pink-500 border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl flex flex-col justify-between">
            <CardContent className="p-8 text-center flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white/70 backdrop-blur-md rounded-lg shadow-md">
                  <Trophy className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-black">Genesis</h3>
              <p className="text-black/80 text-lg mb-6 max-w-2xl mx-auto">
                Our flagship innovation discovery platform - where breakthrough
                ideas meet exceptional execution
              </p>
              <div className="mt-auto">
                <Button
                  asChild
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition-colors"
                >
                  <a href="#">Learn More <ArrowRight className="h-4 w-4 ml-2" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-8">Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-teal-300 via-teal-400 to-cyan-400 hover:from-teal-400 hover:via-cyan-500 hover:to-blue-500 border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white/70 backdrop-blur-md text-black rounded-lg p-3 min-w-fit text-center shadow-md">
                        <Calendar className="h-6 w-6 mx-auto" />
                        <div className="text-sm font-semibold mt-1">
                          {event.date}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-xl font-semibold text-black">
                            {event.title}
                          </h4>
                          <span className="bg-white/70 backdrop-blur-md text-black text-xs px-3 py-1 rounded-full shadow-md">
                            {event.category}
                          </span>
                        </div>
                        <p className="text-black/80 mb-4">{event.description}</p>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-teal-500 to-green-500 text-white hover:from-teal-600 hover:to-green-600 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
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
            <Card className="bg-gradient-to-br from-orange-300 via-orange-400 to-amber-400 hover:from-orange-400 hover:via-amber-500 hover:to-yellow-500 border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-black">
                  <Rocket className="h-6 w-6 text-black" />
                  <span>Innovation Fellowship</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black/80 mb-6">
                  Join our exclusive fellowship program designed for aspiring
                  innovators and entrepreneurs.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-black/80">
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