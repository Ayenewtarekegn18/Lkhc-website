import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { sermons } from "@/lib/data";
import { ArrowLeft, Play, BookOpen, User, Calendar, Share2, Download } from "lucide-react";

export function generateStaticParams() {
  return sermons.map((s) => ({ slug: s.slug }));
}

export default async function SermonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sermon = sermons.find((s) => s.slug === slug);

  if (!sermon) {
    notFound();
  }

  return (
    <div>
      <section className="flex min-h-[50vh] items-center border-b border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/sermons" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            All Sermons
          </Link>
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">{sermon.series}</span>
          <h1 className="font-serif text-5xl font-semibold text-foreground md:text-6xl lg:text-7xl">{sermon.title}</h1>
          <p className="mt-4 text-base text-muted-foreground">
            {sermon.speaker} | {new Date(sermon.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex aspect-video items-center justify-center bg-muted">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center bg-foreground">
                    <Play className="h-8 w-8 text-background" />
                  </div>
                  <p className="text-sm text-muted-foreground">Sermon Video</p>
                </div>
              </div>

              <h2 className="mt-16 font-serif text-3xl font-semibold text-foreground">Sermon Notes</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{sermon.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                  <Download className="mr-2 h-4 w-4" />
                  Download Notes
                </Button>
                <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            <div>
              <div className="border border-border bg-background p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground">Sermon Details</h3>
                <div className="mt-6 flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <User className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Speaker</p>
                      <p className="mt-0.5 text-base text-foreground">{sermon.speaker}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Date</p>
                      <p className="mt-0.5 text-base text-foreground">
                        {new Date(sermon.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BookOpen className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Scripture</p>
                      <p className="mt-0.5 text-base text-foreground">{sermon.scripture}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BookOpen className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Series</p>
                      <p className="mt-0.5 text-base text-foreground">{sermon.series}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
