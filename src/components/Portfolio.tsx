import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "College Management System",
      category: "ERP Solution",
      description: "Comprehensive management system for educational institutions with separate portals for students, teachers, and administrators. Features include attendance tracking, grade management, and real-time communication.",
      technologies: ["Flutter", "Firebase", "Node.js", "React.js"],
      features: ["Student Portal", "Teacher Dashboard", "Admin Panel", "Real-time Analytics"],
      status: "Live Project"
    },
    {
      title: "E-commerce Mobile App",
      category: "Mobile Application",
      description: "Full-featured e-commerce platform with user and admin applications. Includes product catalog, shopping cart, payment integration, and order management system.",
      technologies: ["Flutter", "Firebase", "Stripe API", "Admin Web Portal"],
      features: ["Shopping Cart", "Payment Gateway", "Order Tracking", "Admin Dashboard"],
      status: "Recently Delivered"
    },
    {
      title: "Real-time Chat Application",
      category: "Communication Platform",
      description: "Modern chat application with real-time messaging, video calls, file sharing, and group chat functionality. Built for seamless communication across devices.",
      technologies: ["React Native", "Node.js", "Socket.io", "WebRTC"],
      features: ["Real-time Messaging", "Video Calls", "File Sharing", "Group Chats"],
      status: "In Development"
    },
    {
      title: "Business Analytics Dashboard",
      category: "Web Application",
      description: "Comprehensive analytics dashboard providing real-time business insights, KPI tracking, and data visualization for informed decision-making.",
      technologies: ["React.js", "D3.js", "Node.js", "MongoDB"],
      features: ["Real-time Analytics", "Custom Reports", "Data Visualization", "Export Tools"],
      status: "Completed"
    },
    {
      title: "Restaurant Management System",
      category: "POS Solution",
      description: "Complete restaurant management solution with POS system, inventory management, and customer relationship management features.",
      technologies: ["Flutter", "Firebase", "Payment APIs", "Web Portal"],
      features: ["POS System", "Inventory Management", "Customer Management", "Sales Analytics"],
      status: "Live Project"
    },
    {
      title: "Healthcare Management App",
      category: "Healthcare Solution",
      description: "Digital healthcare platform connecting patients with healthcare providers, featuring appointment scheduling, medical records, and telemedicine capabilities.",
      technologies: ["Flutter", "Node.js", "MongoDB", "Video Call API"],
      features: ["Appointment Booking", "Medical Records", "Telemedicine", "Prescription Management"],
      status: "Recently Delivered"
    },
    {
      title: "Fintech Mobile Wallet",
      category: "Finance Solution",
      description: "Secure digital wallet for transactions, bill payments, and peer-to-peer transfers with KYC integration.",
      technologies: ["Flutter", "Firebase", "Razorpay", "Node.js"],
      features: ["Wallet Recharge", "KYC Verification", "Bill Payments", "Transaction History"],
      status: "In Development"
    },
    {
      title: "Travel Booking Platform",
      category: "Travel & Hospitality",
      description: "End-to-end travel booking system with flight, hotel, and activity reservations integrated into one platform.",
      technologies: ["React.js", "MongoDB", "Node.js", "Stripe API"],
      features: ["Flight Booking", "Hotel Reservations", "Activity Packages", "Payment Gateway"],
      status: "Completed"
    },
    {
      title: "Online Learning Platform",
      category: "EdTech Solution",
      description: "Interactive e-learning platform with live classes, recorded lectures, quizzes, and progress tracking for students.",
      technologies: ["Flutter", "Firebase", "Node.js", "WebRTC"],
      features: ["Live Classes", "Recorded Lectures", "Quizzes & Exams", "Student Progress Dashboard"],
      status: "Recently Delivered"
    }
    
    
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our successful projects and see how we've helped businesses transform their operations with innovative digital solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="service-card bg-card border-border group h-full">
              <CardContent className="p-8 flex flex-col h-full">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 bg-success/10 text-success rounded-full">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

               
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;