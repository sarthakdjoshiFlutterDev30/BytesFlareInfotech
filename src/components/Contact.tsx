import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "bytesflareinfotechsales@gmail.com", 
      description: "Send us your project requirements"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Bhavnagar, Gujarat, India",
      description: "Visit our office for consultation"
    },
    {
      icon: Phone,
      title: "Let's Connect",
      details: "Ready to discuss your project?",
      description: "Contact us through email or form"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "We're here to help you succeed"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Let's Start a Conversation
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12  rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-primary font-medium mb-1">
                          {item.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Us */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Why Work With Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Free consultation and project analysis
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Transparent pricing and timeline
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Ongoing support and maintenance
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Proven track record of success
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Your full name"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input 
                      placeholder="+91 XXXXX XXXXX (Optional)"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:outline-none bg-background">
                    <option>Select project type</option>
                    <option>Mobile App Development</option>
                    <option>Web Development</option>
                    <option>ERP Solution</option>
                    <option>Digital Marketing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Budget
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:outline-none bg-background">
                    <option>Select budget range</option>
                    <option>₹50,000 - ₹1,00,000</option>
                    <option>₹1,00,000 - ₹3,00,000</option>
                    <option>₹3,00,000 - ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Description *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    rows={5}
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button variant="hero" className="w-full group">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our privacy policy. We'll get back to you within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="max-w-4xl mx-auto  text-white p-12">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Join 30+ satisfied clients who have successfully transformed their businesses with our innovative startup energy and expert IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Download Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;