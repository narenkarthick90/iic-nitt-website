import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, User, GraduationCap, Users2 } from "lucide-react";

const Team = () => {
  const facultyCore = [
    {
      name: "Prof. Dr. Rajesh Kumar",
      position: "Director & Chief Patron",
      department: "Office of the Director",
      image: "",
      bio: "Leading institutional innovation initiatives with 25+ years of academic excellence",
      expertise: ["Innovation Strategy", "Institutional Leadership"]
    },
    {
      name: "Dr. Priya Sharma",
      position: "Chairman, IIC",
      department: "Department of Management Studies",
      image: "",
      bio: "Expert in entrepreneurship development and startup ecosystem building",
      expertise: ["Entrepreneurship", "Business Development"]
    }
  ];

  const studentCore = [
    {
      name: "Muthukumaran",
      position: "President",
      department: "Final Year, CSE",
      image: "",
      expertise: ["Leadership", "Strategic Planning"],
      linkedin: "https://linkedin.com/in/muthukumaran",
      email: "muthukumaran@student.nitt.edu"
    },
    {
      name: "Surrender",
      position: "President",
      department: "Final Year, ECE",
      image: "",
      expertise: ["Innovation Management", "Team Leadership"],
      linkedin: "https://linkedin.com/in/surrender",
      email: "surrender@student.nitt.edu"
    },
    {
      name: "Ritik",
      position: "Vice President",
      department: "Final Year, CSE",
      image: "",
      expertise: ["Product Development", "Technology"],
      linkedin: "https://linkedin.com/in/ritik",
      email: "ritik@student.nitt.edu"
    },
    {
      name: "Sri Harini",
      position: "Chairperson",
      department: "Final Year, ME",
      image: "",
      expertise: ["Event Management", "Communications"],
      linkedin: "https://linkedin.com/in/sriharini",
      email: "sriharini@student.nitt.edu"
    },
    {
      name: "Arjun",
      position: "Innovation Secretary",
      department: "Final Year, ECE",
      image: "",
      expertise: ["Innovation Strategy", "Research"],
      linkedin: "https://linkedin.com/in/arjun",
      email: "arjun@student.nitt.edu"
    },
    {
      name: "Tarunya",
      position: "General Secretary",
      department: "Final Year, CSE",
      image: "",
      expertise: ["Administration", "Operations"],
      linkedin: "https://linkedin.com/in/tarunya",
      email: "tarunya@student.nitt.edu"
    }
  ];


  const TeamMemberCard = ({ member, showBio = false }: { member: any, showBio?: boolean }) => (
    <Card className="border-primary/20 hover:shadow-card transition-all duration-300 group">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback className="bg-gradient-hero text-primary-foreground text-lg">
              {member.name.split(' ').map((n: string) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
        <p className="text-primary font-medium mb-2">{member.position}</p>
        <p className="text-sm text-muted-foreground mb-3">
          {member.department || member.company}
        </p>
        {showBio && member.bio && (
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
        )}
        <div className="flex flex-wrap gap-1 justify-center mb-4">
          {member.expertise.map((skill: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="team" className="py-20">
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
            <Users2 className="h-8 w-8 text-primary mr-3" />
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