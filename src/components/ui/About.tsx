import { Award, Users, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses with reliable, scalable, and user-friendly software solutions that drive growth and success."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge technologies and creative problem-solving to deliver exceptional digital experiences."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Building long-term partnerships through transparent communication, timely delivery, and exceptional support."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Maintaining the highest standards in code quality, security, and performance across all our projects."
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Bytesflare Infotech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A modern IT solutions company dedicated to transforming businesses through innovative technology and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Transforming Ideas into Digital Success Stories
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                At Bytesflare Infotech, we're a dynamic startup specializing in creating comprehensive digital solutions that empower businesses to thrive in today's competitive landscape. Our expertise spans mobile app development, web development, ERP solutions, and digital transformation services.
              </p>
              <p>
                Based in Bhavnagar, Gujarat, we've already delivered innovative solutions to clients across various industries, from educational institutions requiring sophisticated management systems to businesses seeking robust e-commerce platforms.
              </p>
              <p>
                As an agile startup, our team combines fresh perspectives with technical excellence to deliver cutting-edge solutions that not only meet current needs but also scale with your business growth.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Flutter & React Native Experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-foreground">MERN Stack Specialists</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Custom ERP Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-foreground">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Achievements Stats */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-subtle border-border">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 service-card bg-card border-border group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;