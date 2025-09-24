import { Card, CardContent } from "../components/ui/card";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "College Management System",
      category: "ERP Solution",
      problem: "Educational institutions struggled with manual processes like attendance tracking, assignment management, and communication gaps between students, teachers, and administrators.",
      solution: "Developed a comprehensive ERP solution with dedicated portals for students, teachers, and admins. Real-time analytics ensured transparency and efficiency.",
      impact: [
        "Reduced manual attendance errors by 90%",
        "Improved communication between teachers and students",
        "Enabled admins to oversee operations in real-time",
      ],
      technologies: ["Flutter", "Firebase", "Node.js", "React.js"],
      status: "Live Project"
    },
    {
      title: "E-commerce Mobile App",
      category: "Mobile Application",
      problem: "Businesses needed a mobile-first e-commerce solution with smooth product management, secure payments, and real-time order tracking.",
      solution: "Built user and admin apps with catalog management, Razorpay/Stripe payments, and a full-featured admin dashboard.",
      impact: [
        "Reduced cart abandonment by 40% with smooth checkout",
        "Boosted sales with real-time order updates",
        "Gave admins complete control over inventory and offers",
      ],
      technologies: ["Flutter", "Firebase", "Stripe API", "Admin Web Portal"],
      status: "Recently Delivered"
    },
    {
      title: "Real-time Chat Application",
      category: "Communication Platform",
      problem: "Teams needed a modern communication platform with messaging, calls, and file sharing across devices.",
      solution: "Developed a real-time chat app with Socket.io, WebRTC, and Firebase for authentication, with support for groups, media, and video calls.",
      impact: [
        "Enabled cross-platform communication instantly",
        "Integrated video calls for remote collaboration",
        "Enhanced team productivity with file sharing",
      ],
      technologies: ["React Native", "Node.js", "Socket.io", "WebRTC"],
      status: "In Development"
    },
    {
      title: "Business Analytics Dashboard",
      category: "Web Application",
      problem: "Enterprises struggled with fragmented data and lack of visualization for decision-making.",
      solution: "Built a React.js-based dashboard with D3.js charts and MongoDB backend for real-time data and custom reports.",
      impact: [
        "Improved decision-making with live KPIs",
        "Reduced reporting time by 70%",
        "Custom export tools streamlined data sharing",
      ],
      technologies: ["React.js", "D3.js", "Node.js", "MongoDB"],
      status: "Completed"
    },
    {
      title: "Restaurant Management System",
      category: "POS Solution",
      problem: "Restaurants needed a complete system for POS, inventory, and customer relationship management.",
      solution: "Delivered a Flutter-based app with POS, sales analytics, and integrated payment APIs with a web-based admin portal.",
      impact: [
        "Automated inventory tracking",
        "Reduced order processing delays",
        "Boosted sales tracking accuracy",
      ],
      technologies: ["Flutter", "Firebase", "Payment APIs", "Web Portal"],
      status: "Live Project"
    },
    {
      title: "Healthcare Management App",
      category: "Healthcare Solution",
      problem: "Patients faced issues booking appointments and accessing medical records digitally.",
      solution: "Developed a healthcare app with telemedicine, digital records, and appointment booking using a secure backend.",
      impact: [
        "Reduced appointment booking delays by 60%",
        "Enabled secure telemedicine during COVID",
        "Improved patient satisfaction with digital prescriptions",
      ],
      technologies: ["Flutter", "Node.js", "MongoDB", "Video Call API"],
      status: "Recently Delivered"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Detailed <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
          Get in-depth insights into our development process, challenges faced, and solutions implemented for each project.
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            A closer look at how we solved real-world challenges for our clients.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-card border-border shadow-md">
              <CardContent className="p-8">
                {/* Title & Status */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                  <span className="text-xs font-medium px-3 py-1 bg-success/10 text-success rounded-full">
                    {study.status}
                  </span>
                </div>

                <p className="text-sm font-semibold text-accent mb-2">{study.category}</p>

                {/* Problem */}
                <div className="mb-4">
                  <h4 className="text-md font-semibold mb-2">Problem:</h4>
                  <p className="text-muted-foreground">{study.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-md font-semibold mb-2">Solution:</h4>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>

                {/* Impact */}
                <div className="mb-4">
                  <h4 className="text-md font-semibold mb-2">Impact:</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {study.impact.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-md font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <span
                        key={i}
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

export default CaseStudies;
