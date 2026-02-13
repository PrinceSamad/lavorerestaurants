import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl tracking-[0.3em] font-semibold text-primary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              LAVORE
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Home of Delicious Delicacies. An exquisite dining experience crafted with passion and precision.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary text-sm tracking-[0.2em] uppercase mb-6">Contact</h4>
            <div className="flex flex-col gap-4 text-muted-foreground text-lg">
              <a href="tel:+2349074762834" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" /> 09074762834
              </a>
              <a href="mailto:kitchencrave6@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" /> kitchencrave6@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>Gwarimpa · Kubwa · Apo, Abuja</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        <div className="text-center text-muted-foreground">
          <p className="text-sm tracking-wider">
            &copy; {new Date().getFullYear()} Lavore Restaurant. Founded by Dr. Adam Muhammed Bedemasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
