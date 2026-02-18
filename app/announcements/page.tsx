import Link from "next/link";
import { announcements } from "@/lib/data";
import { ArrowRight, Calendar } from "lucide-react";

export default function AnnouncementsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-center border-b border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Latest Updates</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold text-foreground md:text-6xl lg:text-7xl">Announcements</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Stay up to date with the latest news, updates, and announcements from our church community.
          </p>
        </div>
      </section>

      {/* Announcements List */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col">
            {announcements.map((post, i) => (
              <Link key={post.slug} href={`/announcements/${post.slug}`} className={`group py-10 transition-colors hover:bg-muted/30 ${i > 0 ? "border-t border-border" : ""}`}>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground md:text-3xl">{post.title}</h3>
                <p className="mt-3 line-clamp-2 text-base leading-relaxed text-muted-foreground">{post.content}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
