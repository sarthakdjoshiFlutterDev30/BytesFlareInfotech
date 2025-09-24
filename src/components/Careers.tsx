import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { MapPin, Clock, Users, TrendingUp, Code, Smartphone, Globe, Megaphone } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Flutter Developer",
      type: "Full-time",
      location: "Bhavnagar, Gujarat",
      experience: "1-3 years",
      description: "Join our mobile development team to build innovative cross-platform applications using Flutter and Firebase.",
      requirements: ["Flutter/Dart proficiency", "Firebase integration", "UI/UX implementation", "Problem-solving skills"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Web Developer", 
      type: "Full-time",
      location: "Bhavnagar, Gujarat",
      experience: "1-2 years",
      description: "Create responsive websites and web applications using modern technologies like React, Node.js, and cloud services.",
      requirements: ["React/JavaScript", "Node.js basics", "Responsive design", "Version control (Git)"],
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Full Stack Developer",
      type: "Full-time", 
      location: "Bhavnagar, Gujarat",
      experience: "2-4 years",
      description: "Work on end-to-end solutions including frontend, backend, and database integration for our ERP and business solutions.",
      requirements: ["MERN/MEAN stack", "Database design", "API development", "ERP system knowledge"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Digital Marketing Intern",
      type: "Internship",
      location: "Bhavnagar, Gujarat", 
      experience: "0-1 years",
      description: "Learn and contribute to our digital marketing efforts including SEO, social media, and content marketing.",
      requirements: ["Digital marketing basics", "Content creation", "Social media knowledge", "Analytical mindset"],
      icon: <Megaphone className="h-6 w-6" />
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Growth Opportunities",
      description: "Learn and grow with us as we expand our technology solutions and client base."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaborative Team", 
      description: "Work with passionate developers and innovators in a supportive startup environment."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Latest Technologies",
      description: "Work with cutting-edge tools like Flutter, Firebase, React, and modern development practices."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Flexible Work",
      description: "Enjoy flexible working arrangements and a healthy work-life balance."
    }
  ];

  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of our innovative startup journey and help shape the future of digital solutions.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Why Choose Bytesflare Infotech?</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              As a growing startup, we offer unique opportunities to make a real impact, learn rapidly, 
              and grow your career alongside our expanding business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover-scale">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Current Openings</h3>
            <p className="text-muted-foreground">Explore exciting opportunities to grow your career with us.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover-scale hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {job.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="flex items-center space-x-4 mt-1">
                          <span className="inline-flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </span>
                          <span className="inline-flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-sm bg-accent/20 text-accent-foreground px-3 py-1 rounded-full">
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold mb-2">Requirements:</h5>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full" variant="outline" onClick={() => window.open("mailto:byteflare.hr@gmail.com")}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-muted/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Send your resume and portfolio to our HR team. We'll review your application and get back to you within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[200px]" onClick={() => window.open("mailto:byteflare.hr@gmail.com")}>
              Send Your Resume
            </Button>
            <div className="text-sm text-muted-foreground">
              Email: <span className="text-foreground font-semibold">byteflare.hr@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;