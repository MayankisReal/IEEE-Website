import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const scrollToTechFest = () => {
    const section = document.getElementById('ieee-techfest');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="https://example.com"   // destination URL
              target="_blank"              // opens in new tab (optional)
              rel="noopener noreferrer"
              className="w-50 h-32 pt-3 rounded-lg flex items-center justify-center "
            >
              <img
                src="../public/1.png"             // your image path
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </a>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              Home
            </a>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button className="text-white hover:text-white/80 transition-colors flex items-center gap-1">
                About
                <ChevronDown className="w-4 h-4" />
              </button>

              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl py-2">
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/5 transition-colors">
                    Our Team
                  </a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/5 transition-colors">
                    Our Mission
                  </a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/5 transition-colors">
                    History
                  </a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/5 transition-colors">
                    Partners
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={scrollToTechFest}
              className="text-white hover:text-white/80 transition-colors"
            >
              IEEE TechFest
            </button>

            <a
              href="https://example.com/contact"
              className="text-white hover:text-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="flex flex-col gap-6 px-6 py-8">
                <a
                  href="#"
                  className="text-white text-2xl py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>

                {/* About Dropdown Mobile */}
                <div>
                  <button
                    className="text-white text-2xl py-3 flex items-center gap-2 w-full"
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  >
                    About
                    <ChevronDown className={`w-5 h-5 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isAboutDropdownOpen && (
                    <div className="flex flex-col gap-3 pl-6 mt-3">
                      <a
                        href="#"
                        className="text-white/80 text-xl py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Our Team
                      </a>
                      <a
                        href="#"
                        className="text-white/80 text-xl py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Our Mission
                      </a>
                      <a
                        href="#"
                        className="text-white/80 text-xl py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        History
                      </a>
                      <a
                        href="#"
                        className="text-white/80 text-xl py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Partners
                      </a>
                    </div>
                  )}
                </div>

                <button
                  onClick={scrollToTechFest}
                  className="text-white text-2xl py-3 text-left"
                >
                  IEEE TechFest
                </button>

                <a
                  href="https://example.com/contact"
                  className="text-white text-2xl py-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
