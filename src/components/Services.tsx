import { Smartphone, Globe, Settings, TrendingUp, Cloud, Shield } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native Android, iOS, and cross-platform Flutter applications with seamless performance and intuitive user experiences.",
      features: ["Flutter Development", "Native iOS & Android", "Cross-Platform Solutions", "App Store Deployment"]
    },
    {
      icon: Globe,
      title: "Web Development", 
      description: "Modern, responsive websites and web applications built with MERN/MEAN stack for optimal performance and scalability.",
      features: ["MERN Stack Development", "Responsive Design", "E-commerce Solutions", "CMS Integration"]
    },
    {
      icon: Settings,
      title: "ERP & Business Solutions",
      description: "Custom ERP systems for educational institutions and businesses to streamline operations and enhance productivity.",
      features: ["College Management Systems", "Student Portal Development", "Business Process Automation", "Custom Software Solutions"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, social media management, and lead generation campaigns.",
      features: ["SEO Optimization", "Social Media Marketing", "Lead Generation", "Brand Development"]
    },
    {
      icon: Cloud,
      title: "Cloud & API Integration",
      description: "Seamless cloud integration with Firebase, AWS, and custom API development for robust backend solutions.",
      features: ["Firebase Integration", "REST API Development", "Payment Gateway Integration", "Third-party Integrations"]
    },
    {
      icon: Shield,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and enhance operational efficiency.",
      features: ["Process Digitization", "Legacy System Migration", "Workflow Automation", "Performance Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-high-contrast">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed text-readable font-medium">
            Comprehensive IT solutions tailored to transform your business and drive growth through innovative technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card bg-card border-border hover:border-primary/20 group">
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors text-high-contrast">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground mb-6 leading-relaxed text-readable">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground font-medium">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        </div>
    </section>
  );
};

export default Services;