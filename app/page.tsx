import Link from "next/link";
import { ArrowRight, Play, Calendar, Heart, Users, Zap, Baby, Globe, Music, Gift, BookOpen, ChevronRight, MapPin, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceTimesCard } from "@/components/service-times-card";
import { ministries, events, sermons, testimonies } from "@/lib/data";
import { NewsletterForm } from "@/components/newsletter-form";

const iconMap: Record<string, React.ElementType> = {
  Heart, Users, Zap, Baby, Globe, Music, Gift, BookOpen,
};

const featuredMinistries = ministries.slice(0, 6);
const nextEvent = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
const latestSermon = sermons[0];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Bold Editorial */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&q=80"
            alt="Church background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/75" />
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32 animate-fade-in">
          <div className="grid items-center gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3 animate-slide-up">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
                Welcome to our community
              </p>
              <h1 className="mt-6 font-serif text-balance text-6xl font-bold leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
                Lebu Kale Heywet Church
              </h1>
              <p className="mt-8 max-w-xl text-pretty text-xl leading-relaxed text-muted-foreground">
                A community of faith, worship, and love. Growing in Christ, serving our city with compassion and integrity.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-none bg-foreground px-10 text-lg text-background hover:bg-foreground/90">
                  <Link href="/visit">
                    Plan Your Visit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-none border border-foreground px-10 text-lg text-foreground hover:bg-foreground hover:text-background"
                >
                  <Link href="/sermons">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Live
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:col-span-2 lg:block animate-scale-in">
              <ServiceTimesCard />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Service Times */}
      <section className="border-b border-border bg-background px-6 py-12 lg:hidden">
        <ServiceTimesCard />
      </section>

      {/* New Here - Editorial Steps */}
      <section className="bg-background py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">New Here?</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground md:text-5xl">Welcome to Our Church</h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:text-right">
              Whether you are visiting for the first time or looking for a church home, we are so glad you are here.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
            {[
              { icon: MapPin, title: "Visit Us", desc: "Join us for a Sunday service at 3:00 PM. We would love to meet you and make you feel at home." },
              { icon: Users, title: "Get Connected", desc: "Find a ministry or small group that fits your season of life. There is a place for everyone here." },
              { icon: Sprout, title: "Grow Together", desc: "Deepen your faith through teaching, fellowship, and serving alongside our church family." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-background p-8 lg:p-12">
                  <Icon className="h-12 w-12 text-accent" />
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next Event - Full Width Band */}
      {nextEvent && (
        <section className="border-y border-border bg-foreground py-16 lg:py-20 animate-fade-in">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Upcoming Event</span>
                </div>
                <h3 className="mt-4 font-serif text-3xl font-bold text-background md:text-4xl">{nextEvent.title}</h3>
                <p className="mt-3 text-lg text-background/70">
                  {new Date(nextEvent.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })} | {nextEvent.time}
                </p>
                <p className="mt-1 text-lg text-background/70">{nextEvent.location}</p>
              </div>
              <Button asChild className="rounded-none border border-background/20 bg-background px-10 text-lg text-foreground hover:bg-background/90">
                <Link href={`/events/${nextEvent.slug}`}>
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Latest Sermon - Asymmetric */}
      <section className="bg-background py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Latest Sermon</p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">{latestSermon.title}</h2>
            </div>
            <Link href="/sermons" className="hidden items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-foreground sm:flex">
              All Sermons <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-5">
            <div className="group relative overflow-hidden lg:col-span-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
                alt="Sermon"
                className="h-full w-full object-cover aspect-video transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all group-hover:bg-black/50">
                <div className="flex flex-col items-center gap-4 text-white">
                  <div className="flex h-20 w-20 items-center justify-center bg-white/20 backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                  <p className="text-lg font-medium">Watch Sermon</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{latestSermon.series}</span>
              <h3 className="mt-3 font-serif text-3xl font-bold text-foreground">{latestSermon.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">
                {latestSermon.speaker} | {new Date(latestSermon.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
              <p className="mt-1 text-base text-muted-foreground">Scripture: {latestSermon.scripture}</p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{latestSermon.description}</p>
              <div className="mt-8">
                <Button asChild className="rounded-none bg-foreground px-10 text-lg text-background hover:bg-foreground/90">
                  <Link href={`/sermons/${latestSermon.slug}`}>
                    Watch Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries - Editorial Grid */}
      <section className="border-t border-border bg-muted py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Get Involved</p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">Our Ministries</h2>
            </div>
            <Link href="/ministries" className="inline-flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-foreground">
              View all 14 ministries <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMinistries.map((ministry) => {
              const Icon = iconMap[ministry.icon] || Heart;
              return (
                <Link key={ministry.slug} href={`/ministries/${ministry.slug}`} className="group border border-border bg-background p-8 transition-colors hover:bg-accent/5 lg:p-10">
                  <div className="flex h-14 w-14 items-center justify-center bg-accent/10">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{ministry.name}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{ministry.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-base font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonies - Large Quote */}
      <section className="bg-background py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Testimonies</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">Changed Lives</h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {testimonies.slice(0, 3).map((testimony, i) => (
              <div key={i} className="border border-border bg-background p-8 lg:p-10">
                <svg className="h-10 w-10 text-accent/60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-6 font-serif text-xl leading-relaxed text-foreground italic">
                  {testimony.quote}
                </p>
                <p className="mt-6 text-base font-bold text-foreground">{testimony.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving CTA - Minimal */}
      <section className="border-y border-border bg-foreground py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Give</p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-background md:text-5xl">Support Our Mission</h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-xl leading-relaxed text-background/70">
            Your generous giving enables us to spread the Gospel, serve our community, and grow our church family. Every gift makes a difference.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-none border border-background/20 bg-background px-12 text-lg text-foreground hover:bg-background/90">
              <Link href="/give">
                Give Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter - Clean */}
      <section className="bg-background py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Stay Connected</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground">Subscribe</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get the latest updates on events, sermons, and church news delivered to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
