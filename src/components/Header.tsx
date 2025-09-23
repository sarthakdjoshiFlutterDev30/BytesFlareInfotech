import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={
        `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border text-foreground"
            : "bg-transparent backdrop-blur-0 border-b border-white/20 text-white"
        }`
      }
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>
              Bytesflare Infotech
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"} transition-colors duration-200 font-medium`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-sm ${isScrolled ? "text-muted-foreground" : "text-white"}`}>
              <Mail className="h-4 w-4" />
              <span>Get Quote Today</span>
            </div>
            <Button variant="hero" size="lg" className="text-white">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isScrolled ? "border-border text-foreground" : "border-white/20 text-white"}`}>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block py-2 ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"} transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <div className={`flex items-center space-x-2 text-sm ${isScrolled ? "text-muted-foreground" : "text-white"}`}>
                  <Mail className="h-4 w-4" />
                  <span>Contact Us Today</span>
                </div>
                <Button variant="hero" size="lg" className="w-full">Get Quote</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;