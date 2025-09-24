import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Mobile App Development",
    "Web Development", 
    "ERP Solutions",
    "Digital Marketing",
    "Cloud Integration"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Bytesflare Infotech</h3>
            <p className="text-white mb-6 leading-relaxed">
              Shaping Ideas into Digital Reality. We specialize in creating innovative IT solutions that transform businesses and drive growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-white">bytesflareinfotechsales@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm text-white">Bhavnagar, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-white text-sm mb-4">
              Follow us for the latest updates and tech insights.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com/BytesFlareInfotech" target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200 text-white">
                <Facebook className="h-5 w-5" />
              </a>

              <a href="https://x.com/BytesF99635" target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200 text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/bytesflareinfotech/ " target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200 text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/bytesflareinfotech/" target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200 text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm placeholder-white/60 focus:outline-none focus:border-accent text-white"
              />
              <button className="w-full px-3 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Bytesflare Infotech. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-white hover:text-accent text-sm transition-colors"
              >
                <ArrowUp className="h-4 w-4" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;