import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-image.jpg";


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 fade-in-up">
            <span className="text-white text-sm font-medium">🚀 Innovative Startup Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 fade-in-up ">
            Shaping Ideas into{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent text-shadow-white">
              Digital Reality
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl leading-relaxed fade-in-up  font-medium">
            Dynamic startup specializing in mobile app development, 
            web development, ERP solutions, and digital transformation with fresh innovation.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 mb-8 fade-in-up">
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>Flutter & React Native Apps</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>Custom ERP Solutions</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>MERN Stack Development</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-white text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
              <div className="text-white text-sm md:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-white text-sm md:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
};

export default Hero;