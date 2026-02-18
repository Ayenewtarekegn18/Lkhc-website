import { SermonsArchive } from "@/components/sermons-archive";

export default function SermonsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden border-b border-border py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
            alt="Sermons"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 animate-fade-in">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">The Word</p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">Sermons</h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
            Explore our sermon archive. Search by title, filter by speaker or series, and be encouraged by God&apos;s Word.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SermonsArchive />
        </div>
      </section>
    </div>
  );
}
