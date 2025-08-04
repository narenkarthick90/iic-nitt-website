import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, User } from "lucide-react";

const Team = () => {
  const leadership = [
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

  const coordinators = [
    {
      name: "Dr. Arun Krishnan",
      position: "Faculty Coordinator",
      department: "Computer Science & Engineering",
      image: "",
      expertise: ["Tech Innovation", "AI/ML"]
    },
    {
      name: "Dr. Meera Nair",
      position: "Faculty Coordinator",
      department: "Mechanical Engineering",
      image: "",
      expertise: ["Product Development", "Design Thinking"]
    },
    {
      name: "Arjun Patel",
      position: "Student Coordinator",
      department: "Final Year, ECE",
      image: "",
      expertise: ["Student Engagement", "Event Management"]
    },
    {
      name: "Sneha Reddy",
      position: "Student Coordinator",
      department: "Final Year, CSE",
      image: "",
      expertise: ["Technology", "Startup Mentoring"]
    }
  ];

  const advisors = [
    {
      name: "Mr. Vikram Singh",
      position: "Industry Mentor",
      company: "TechMahindra",
      expertise: ["Corporate Innovation", "Scaling Startups"]
    },
    {
      name: "Ms. Deepika Agarwal",
      position: "Startup Mentor",
      company: "Former Founder, InnovateX",
      expertise: ["Entrepreneurship", "Product Strategy"]
    },
    {
      name: "Dr. Suresh Babu",
      position: "Research Advisor",
      company: "IIT Madras",
      expertise: ["Deep Tech", "Research Commercialization"]
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
          <button className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
            <Linkedin className="h-4 w-4" />
          </button>
          <button className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
            <Mail className="h-4 w-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated individuals driving innovation and entrepreneurship at IIC NITT through 
            their expertise, passion, and commitment to excellence.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <TeamMemberCard key={index} member={member} showBio={true} />
            ))}
          </div>
        </div>

        {/* Coordinators */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordinators.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center bg-gradient-card border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-gradient-hero rounded-lg">
              <User className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h4 className="text-3xl font-bold mb-4">Join Our Team</h4>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Are you passionate about innovation and entrepreneurship? We're always looking for 
            dedicated individuals to join our mission of fostering innovation at NITT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg">
              Faculty Positions
            </button>
            <button className="border border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary/40 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Student Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;