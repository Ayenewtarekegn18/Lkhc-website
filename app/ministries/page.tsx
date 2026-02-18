import Link from "next/link";
import { ministries } from "@/lib/data";
import { ArrowRight, Heart, BookOpen, Users, Zap, Baby, Globe, Music, Gift, Mic, Shield, Wallet, HandMetal, HeartHandshake, ClipboardList } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Heart, BookOpen, Users, Zap, Baby, Globe, Music, Gift, Mic, Shield, Wallet, HandMetal, HeartHandshake, ClipboardList,
};

export default function MinistriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-center border-b border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Get Involved</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold text-foreground md:text-6xl lg:text-7xl">Our Ministries</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Discover the many ways you can connect, grow, and serve through our diverse ministries. There is a place for everyone.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry) => {
              const Icon = iconMap[ministry.icon] || Heart;
              return (
                <Link key={ministry.slug} href={`/ministries/${ministry.slug}`} className="group bg-background p-8 transition-colors hover:bg-accent/5 lg:p-10">
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{ministry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ministry.description}</p>
                  <div className="mt-4 flex flex-col gap-1">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Leader:</span> {ministry.leader}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Meets:</span> {ministry.meetingTime}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
