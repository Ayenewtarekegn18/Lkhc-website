import { Button } from "@/components/ui/button";
import { Shield, CreditCard, Smartphone, Building } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const givingMethods = [
  {
    icon: Building,
    title: "In-Person Giving",
    desc: "Drop your offering in the collection box during any of our services. Envelopes are available at the entrance for designated giving.",
  },
  {
    icon: CreditCard,
    title: "Bank Transfer",
    desc: "Transfer directly to our church bank account. Contact the church office for account details and transfer instructions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Money",
    desc: "Send your offering via mobile money services. Details are available at the church office or by contacting our finance team.",
  },
];

const faqs = [
  {
    q: "Is my giving secure?",
    a: "Absolutely. All donations are processed securely and handled with the utmost integrity by our finance team.",
  },
  {
    q: "Can I designate my gift for a specific purpose?",
    a: "Yes! You can designate your gift for tithes, missions, building fund, charity, or any specific ministry. Please indicate this when giving.",
  },
  {
    q: "Will I receive a receipt for my donation?",
    a: "Yes, receipts are available upon request from the church office for all donations made through any method.",
  },
  {
    q: "How is the money used?",
    a: "Church funds support ministry operations, staff, building maintenance, missions, charity outreach, and community programs. Financial reports are shared with members regularly.",
  },
  {
    q: "Can I give anonymously?",
    a: "Yes, anonymous giving is welcome and respected. You may place your gift in the offering box without identification.",
  },
];

export default function GivePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden border-b border-border py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80"
            alt="Generosity"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 animate-fade-in">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Generosity</p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">Give</h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
            Your generous giving enables us to spread the Gospel, serve our community, and grow our church family. Every gift makes a difference.
          </p>
        </div>
      </section>

      {/* Scripture */}
      <section className="border-b border-border bg-foreground py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-serif text-2xl italic leading-relaxed text-background/80 md:text-3xl">
            {`"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."`}
          </p>
          <p className="mt-6 text-sm font-semibold tracking-wide text-accent">2 Corinthians 9:7</p>
        </div>
      </section>

      {/* Giving Methods */}
      <section className="bg-background py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">How to Give</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">Giving Methods</h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {givingMethods.map((method) => (
              <div key={method.title} className="border border-border bg-background p-8 text-center lg:p-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center bg-accent/10">
                  <method.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{method.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-t border-border bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Shield className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">Your Giving is Secure</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We take stewardship seriously. Our finance team operates with full transparency and accountability. Regular financial reports are shared with the congregation, and all funds are managed in accordance with biblical principles and legal requirements.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Questions?</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground md:text-5xl">Giving FAQ</h2>
          <div className="mt-12">
            <Accordion type="single" collapsible className="flex flex-col">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border py-1">
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
