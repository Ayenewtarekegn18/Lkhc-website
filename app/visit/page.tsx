import { ServiceTimesCard } from "@/components/service-times-card";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

const whatToExpect = [
  { title: "Warm Welcome", desc: "Our greeters will welcome you at the door and help you find a seat. Feel free to ask any questions." },
  { title: "Worship Experience", desc: "Our services include contemporary and traditional worship music in Amharic and English, followed by biblical teaching." },
  { title: "Children's Program", desc: "We offer a vibrant children's program during the main service for kids aged 3-14 with age-appropriate lessons." },
  { title: "Fellowship Time", desc: "After the service, join us for coffee and conversation. It's a great time to meet others and ask questions." },
  { title: "Come As You Are", desc: "There is no dress code. Come as you are and feel at home in our community of faith." },
  { title: "Prayer Support", desc: "Our prayer team is available after every service if you need prayer for any situation in your life." },
];

export default function VisitPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden border-b border-border py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1920&q=80"
            alt="Church visit"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 animate-fade-in">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Plan Your Visit</p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">Visit Us</h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
            We would love to meet you! Plan your visit and discover what makes our church a special place to worship and grow.
          </p>
        </div>
      </section>

      {/* Location & Service Times */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">Find Us</h2>
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-base font-medium text-foreground">Lebbu Kale Heywet Church</p>
                    <p className="text-sm text-muted-foreground">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-base font-medium text-foreground">Phone</p>
                    <a href="tel:+251911000000" className="text-sm text-muted-foreground transition-colors hover:text-foreground">+251 911 000 000</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-base font-medium text-foreground">Email</p>
                    <a href="mailto:info@lebbukaleheywet.org" className="text-sm text-muted-foreground transition-colors hover:text-foreground">info@lebbukaleheywet.org</a>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                  alt="Church location map"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href="https://wa.me/251911000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all hover:scale-105 hover:opacity-90"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+251911000000"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-8 py-4 text-base font-medium text-foreground transition-all hover:scale-105 hover:bg-foreground hover:text-background"
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
            <ServiceTimesCard />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="border-t border-border bg-muted py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">First Time?</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">What to Expect</h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatToExpect.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-xl lg:p-10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-accent">Get in Touch</p>
          <h2 className="mt-3 text-center font-serif text-4xl font-semibold text-foreground">Contact Us</h2>
          <p className="mt-4 text-center text-base text-muted-foreground">
            Have a question or want to learn more? Fill out the form below and we will get back to you.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
