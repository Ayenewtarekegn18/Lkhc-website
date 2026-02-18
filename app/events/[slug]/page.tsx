import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/data";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div>
      <section className="flex min-h-[50vh] items-center border-b border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/events" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            All Events
          </Link>
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">{event.category}</span>
          <h1 className="font-serif text-5xl font-semibold text-foreground md:text-6xl lg:text-7xl">{event.title}</h1>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-foreground">About This Event</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{event.description}</p>
            </div>
            <div>
              <div className="border border-border bg-background p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground">Event Details</h3>
                <div className="mt-6 flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <Calendar className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Date</p>
                      <p className="mt-0.5 text-base text-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Time</p>
                      <p className="mt-0.5 text-base text-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Location</p>
                      <p className="mt-0.5 text-base text-foreground">{event.location}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <Button className="w-full rounded-full bg-foreground py-6 text-lg text-background hover:scale-105 hover:bg-foreground/90 transition-transform">
                    Register for Event
                  </Button>
                  <Button variant="outline" className="w-full rounded-full border-2 border-foreground py-6 text-lg text-foreground hover:scale-105 hover:bg-foreground hover:text-background transition-transform">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
