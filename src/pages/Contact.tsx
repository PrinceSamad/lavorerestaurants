import { useState } from 'react';
import { Phone, Mail, MapPin, Check, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { toast } from '@/hooks/use-toast';

const WHATSAPP_NUMBER = '2349074762834';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' });
      return;
    }
    if (name.trim().length > 100 || email.trim().length > 255 || message.trim().length > 1000) {
      toast({ title: 'Input too long', variant: 'destructive' });
      return;
    }

    const whatsappMessage = `Hello Lavore Restaurant!\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nMessage: ${message.trim()}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );

    setSubmitted(true);
    toast({ title: 'Redirecting to WhatsApp', description: 'Your message has been prepared. Send it via WhatsApp to reach us directly.' });
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="pt-20">
      <section className="py-24 text-center px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl tracking-[0.2em] font-light mb-6 text-foreground">Contact</h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We would love to hear from you.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 pb-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-10">
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-primary mb-6">Get in Touch</h3>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <a href="tel:+2349074762834" className="flex items-center gap-4 hover:text-primary transition-colors">
                    <Phone size={18} className="text-primary" /> 09074762834
                  </a>
                  <a href="mailto:kitchencrave6@gmail.com" className="flex items-center gap-4 hover:text-primary transition-colors">
                    <Mail size={18} className="text-primary" /> kitchencrave6@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-primary mb-6">Locations</h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  {['Gwarimpa, Abuja', 'Kubwa, Abuja', 'Apo, Abuja'].map((loc) => (
                    <div key={loc} className="flex items-center gap-4">
                      <MapPin size={18} className="text-primary flex-shrink-0" /> {loc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={300}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="luxury-input"
                  placeholder="Your name"
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="luxury-input"
                  placeholder="Your email"
                  maxLength={255}
                  required
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="luxury-input min-h-[140px] resize-none"
                  placeholder="Your message"
                  maxLength={1000}
                  required
                />
              </div>
              <button
                type="submit"
                className="border-2 border-primary text-primary px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 w-full flex items-center justify-center gap-3 rounded-sm"
              >
                {submitted ? (
                  <>
                    <Check size={16} /> Sent
                  </>
                ) : (
                  <>
                    <MessageCircle size={16} /> Send via WhatsApp
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
