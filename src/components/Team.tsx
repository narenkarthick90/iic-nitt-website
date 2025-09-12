import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, User, GraduationCap, Users2 } from "lucide-react";

const Team = () => {
  const facultyCore = [
    {
      name: "Mr. Gideon",
      position: "Director & Chief Patron",
      department: "Office of the Director",
      image: "",
      bio: "Leading institutional innovation initiatives with 25+ years of academic excellence",
      expertise: ["Innovation Strategy", "Institutional Leadership"]
    },
    {
      name: "Muthukumaran",
      position: "Faculty Coordinator",
      department: "Department of Computer Science",
      image: "",
      bio: "Driving innovation and entrepreneurship initiatives with strategic leadership",
      expertise: ["Leadership", "Strategic Planning", "Innovation Management"]
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
      department: "Final Year, CSE",
      image: "",
      expertise: ["Product Development", "Technology"],
      linkedin: "https://www.linkedin.com/in/ritik-siklighar-aab696254/",
      email: "ritik@student.nitt.edu"
    },
    {
      name: "Arjun B K",
      position: "Innovation Secretary",
      department: "Final Year, ECE",
      image: "",
      expertise: ["Innovation Strategy", "Research"],
      linkedin: "https://www.linkedin.com/in/arjun-b-k",
      email: "arjun@student.nitt.edu"
    }
  ];

  const gradients = [
    "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400",
    "bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400",
    "bg-gradient-to-br from-green-200 via-green-300 to-green-400",
    "bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400",
    "bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400",
    "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400"
  ];

  const TeamMemberCard = ({ member, index, showBio = false }: { member: any, index: number, showBio?: boolean }) => (
    <Card
      className={`${gradients[index % gradients.length]} border-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-500 group rounded-xl`}
    >
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback className="bg-white/60 text-black text-lg">
              {member.name.split(' ').map((n: string) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        <h4 className="text-lg font-semibold mb-1 text-black">{member.name}</h4>
        <p className="text-primary font-medium mb-2">{member.position}</p>
        <p className="text-sm text-black/70 mb-3">{member.department || member.company}</p>
        {showBio && member.bio && (
          <p className="text-sm text-black/80 mb-4 leading-relaxed">{member.bio}</p>
        )}
        <div className="flex flex-wrap gap-1 justify-center mb-4">
          {member.expertise.map((skill: string, idx: number) => (
            <Badge key={idx} variant="secondary" className="text-xs bg-white/50 text-black">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/40 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="p-2 bg-white/40 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
            >
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
              <TeamMemberCard key={index} member={member} index={index} showBio={true} />
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
              <TeamMemberCard key={index} member={member} index={index} />
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
