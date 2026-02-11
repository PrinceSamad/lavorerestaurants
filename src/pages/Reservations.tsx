import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import ScrollReveal from '@/components/ScrollReveal';
import { toast } from '@/hooks/use-toast';

const timeSlots = ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];

const Reservations = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requests, setRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !name || !phone || !email) {
      toast({ title: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }
    setSubmitted(true);
    toast({ title: 'Reservation confirmed', description: 'We look forward to welcoming you.' });
  };

  if (submitted) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-8 animate-reveal-scale">
            <Check size={36} className="text-primary" />
          </div>
          <h2 className="text-3xl tracking-wider mb-4">Reservation Confirmed</h2>
          <p className="text-muted-foreground text-lg">
            Thank you, {name}. We await your arrival on {date && format(date, 'MMMM d, yyyy')} at {time}.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-10 border border-primary/50 text-primary px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            New Reservation
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="py-24 text-center px-6">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl tracking-[0.2em] font-light mb-6">Reservations</h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Secure your evening of culinary excellence.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-6 pb-32 max-w-2xl mx-auto">
        <ScrollReveal delay={300}>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="luxury-input"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Phone *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="luxury-input"
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="luxury-input"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Date */}
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Date *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        'luxury-input flex items-center gap-2 text-left',
                        !date && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon size={14} className="text-primary" />
                      {date ? format(date, 'MMM d, yyyy') : 'Select date'}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time */}
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Time *</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="luxury-input bg-transparent"
                  required
                >
                  <option value="" className="bg-card">Select time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t} className="bg-card">{t}</option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="luxury-input bg-transparent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-card">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Special Requests</label>
              <textarea
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
                className="luxury-input min-h-[100px] resize-none"
                placeholder="Allergies, celebrations, seating preferences..."
              />
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="border border-primary/50 text-primary px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Reservations;
