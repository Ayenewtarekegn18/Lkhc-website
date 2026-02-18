import { EventsList } from "@/components/events-list";

export default function EventsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden border-b border-border py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
            alt="Church events"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 animate-fade-in">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Calendar</p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">Events</h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
            Stay connected with upcoming gatherings, retreats, and special services. There is always something happening at our church.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <EventsList />
        </div>
      </section>
    </div>
  );
}
