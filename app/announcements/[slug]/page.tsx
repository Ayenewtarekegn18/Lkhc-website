import Link from "next/link";
import { notFound } from "next/navigation";
import { announcements } from "@/lib/data";
import { ArrowLeft, Calendar } from "lucide-react";

export function generateStaticParams() {
  return announcements.map((a) => ({ slug: a.slug }));
}

export default async function AnnouncementDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = announcements.find((a) => a.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <section className="flex min-h-[50vh] items-center border-b border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/announcements" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            All Announcements
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{post.category}</span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>
          <h1 className="mt-4 font-serif text-5xl font-semibold text-foreground md:text-6xl lg:text-7xl">{post.title}</h1>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-muted-foreground">{post.content}</p>
        </div>
      </section>
    </div>
  );
}
