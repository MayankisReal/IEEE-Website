import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* University Info */}
          <div>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <div className="flex items-center">
            <a
              href="https://atharvauniversity.org/"   // destination URL
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
            </div>
            <p className="text-white/70 mb-4">
              Leading institution in technology education and innovation, fostering excellence in engineering and applied sciences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Atharva-University-Mumbai/61577145298845/"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://x.com/Uni_atharva"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/atharva_university/"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://in.linkedin.com/company/atharva-university"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/70 mt-0.5" />
                <p className="text-white/70">
                  Atharva University Mumbai<br />
                  Marve Road, Malad West,<br />
                  Mumbai, Maharashtra 400064
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/70" />
                <p className="text-white/70"></p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/70" />
                <p className="text-white/70">info@university.edu</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h4 className="text-white mb-4">Location</h4>
            <div className="w-full h-48 bg-white/5 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white/50">
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p>Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Copyright */}
        <div className="text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} </p>
        </div>
      </div>
    </footer>
  );
}
