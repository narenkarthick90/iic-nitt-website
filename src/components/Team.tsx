import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, User, GraduationCap, Users2 } from "lucide-react";

const Team = () => {
  const facultyCore = [

    {
      name: "Muthukumaran",
      position: "Faculty President",
    
      image: "",
      bio: "Driving innovation and entrepreneurship initiatives with strategic leadership",
      expertise: ["Leadership", "Strategic Planning", "Innovation Management"]
    },
        {
      name: "Mr. Gideon",
      position: "IIC Convenor",
      
      image: "",
      bio: "Leading institutional innovation initiatives with years of academic excellence",
      expertise: ["Innovation Strategy", "Institutional Leadership"]
    }
  ];

  const studentCore = [
    {
      name: "Surender",
      position: "President",
      department: "Final Year, ECE",
      image: "",
      expertise: ["Innovation Management", "Team Leadership"],
      linkedin: "https://www.linkedin.com/in/surender-p-a135a325a/",
      email: "surender@student.nitt.edu"
    },
    {
      name: "Ritik Siklighar",
      position: "Vice President",
      department: "Final Year, ECE",
      image: "",
      expertise: ["Product Development", "Technology"],
      linkedin: "https://www.linkedin.com/in/ritik-siklighar-aab696254/",
      email: "ritik@student.nitt.edu"
    },
    {
      name: "Arjun B K",
      position: "Innovation Secretary",
      department: "Final Year, Mech",
      image: "",
      expertise: ["Innovation Strategy", "Research"],
      linkedin: "https://www.linkedin.com/in/arjun-b-k",
      email: "arjun@student.nitt.edu"
    }
  ];


  const TeamMemberCard = ({ member, showBio = false }: { member: any, showBio?: boolean }) => (
    <Card className="glass-card hover-lift group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-8 text-center relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <Avatar className="h-24 w-24 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback className="bg-gradient-hero text-2xl">
                <User className="h-12 w-12 text-white" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow" />
          </div>
        </div>
        <h4 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">{member.name}</h4>
        <p className="text-primary font-semibold mb-3">{member.position}</p>
        <p className="text-sm text-muted-foreground mb-4 font-medium">
          {member.department || member.company}
        </p>
        {showBio && member.bio && (
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed bg-muted/30 rounded-lg p-3">{member.bio}</p>
        )}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {member.expertise.map((skill: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs font-medium px-3 py-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center space-x-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 shadow-lg">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110 shadow-lg">
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="team" className="py-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Our</span> <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated individuals driving innovation and entrepreneurship at IIC NITT through 
            their expertise, passion, and commitment to excellence.
          </p>
        </div>

        {/* Faculty Core */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            Faculty Core
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyCore.map((member, index) => (
              <TeamMemberCard key={index} member={member} showBio={true} />
            ))}
          </div>
        </div>

        {/* Student Core */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <User className="h-8 w-8 text-primary mr-3" />
            Student Core
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentCore.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>


        {/* Join Our Community CTA */}
        <div className="text-center bg-background/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-primary rounded-lg">
              <User className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h4 className="text-3xl font-bold mb-4">Join Our Community</h4>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Be part of the innovation ecosystem at NITT. Connect with like-minded innovators, entrepreneurs, 
            and change-makers in our vibrant community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chat.whatsapp.com/EDkRyIlEgmvFmAyWFNGcxQ?mode=ac_t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg inline-block"
            >
              WhatsApp Community
            </a>
            <a 
              href="https://www.instagram.com/iic.nitt?igsh=MWZsMXlzdGU2cjhwMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary/40 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-block"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
