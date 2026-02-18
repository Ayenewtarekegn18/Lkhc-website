import Link from "next/link";
import { notFound } from "next/navigation";
import { ministries } from "@/lib/data";
import { ArrowLeft, Clock, User, Users as UsersIcon, Calendar } from "lucide-react";
import { MinistryJoinForm } from "@/components/ministry-join-form";

export function generateStaticParams() {
  return ministries.map((m) => ({ slug: m.slug }));
}

export default async function MinistryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = ministries.find((m) => m.slug === slug);

  if (!ministry) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-center border-b border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/ministries" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            All Ministries
          </Link>
          <h1 className="font-serif text-5xl font-semibold text-foreground md:text-6xl lg:text-7xl">{ministry.name}</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{ministry.description}</p>
        </div>
      </section>

      {/* Details */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-foreground">Purpose</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{ministry.purpose}</p>

              <h2 className="mt-16 font-serif text-3xl font-semibold text-foreground">Who Can Join</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{ministry.whoCanJoin}</p>

              {/* Photo gallery placeholders */}
              <h2 className="mt-16 font-serif text-3xl font-semibold text-foreground">Gallery</h2>
              <div className="mt-6 grid grid-cols-2 gap-1 sm:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex aspect-square items-center justify-center bg-muted text-sm text-muted-foreground">
                    Photo {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="border border-border bg-background p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground">Details</h3>
                <div className="mt-6 flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <User className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Leader</p>
                      <p className="mt-0.5 text-base text-foreground">{ministry.leader}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Meeting Time</p>
                      <p className="mt-0.5 text-base text-foreground">{ministry.meetingTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Schedule</p>
                      <p className="mt-0.5 text-base text-foreground">{ministry.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <UsersIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Open To</p>
                      <p className="mt-0.5 text-base text-foreground">{ministry.whoCanJoin}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Join Form */}
              <div className="border border-border bg-background p-8">
                <h3 className="mb-6 font-serif text-2xl font-semibold text-foreground">Join This Ministry</h3>
                <MinistryJoinForm ministryName={ministry.name} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
