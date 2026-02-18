"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { sermons } from "@/lib/data";
import { Search, Play, ArrowRight } from "lucide-react";

export function SermonsArchive() {
  const [query, setQuery] = useState("");
  const [speakerFilter, setSpeakerFilter] = useState("all");
  const [seriesFilter, setSeriesFilter] = useState("all");

  const speakers = useMemo(() => [...new Set(sermons.map((s) => s.speaker))], []);
  const series = useMemo(() => [...new Set(sermons.map((s) => s.series))], []);

  const filtered = useMemo(() => {
    return sermons.filter((sermon) => {
      const matchesQuery = query === "" || sermon.title.toLowerCase().includes(query.toLowerCase()) || sermon.description.toLowerCase().includes(query.toLowerCase());
      const matchesSpeaker = speakerFilter === "all" || sermon.speaker === speakerFilter;
      const matchesSeries = seriesFilter === "all" || sermon.series === seriesFilter;
      return matchesQuery && matchesSpeaker && matchesSeries;
    });
  }, [query, speakerFilter, seriesFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-12 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search sermons..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-full border-2 border-border bg-background pl-12 text-lg"
          />
        </div>
        <select
          value={speakerFilter}
          onChange={(e) => setSpeakerFilter(e.target.value)}
          className="rounded-full border-2 border-border bg-background px-6 py-3 text-base text-foreground"
        >
          <option value="all">All Speakers</option>
          {speakers.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          value={seriesFilter}
          onChange={(e) => setSeriesFilter(e.target.value)}
          className="rounded-full border-2 border-border bg-background px-6 py-3 text-base text-foreground"
        >
          <option value="all">All Series</option>
          {series.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg text-muted-foreground">No sermons found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((sermon, index) => (
            <Link key={sermon.slug} href={`/sermons/${sermon.slug}`} className="group overflow-hidden rounded-2xl bg-background shadow-md transition-all hover:shadow-xl hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${1507003211169 + index}?w=600&q=80`}
                  alt={sermon.title}
                  className="aspect-video w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] transition-all group-hover:bg-black/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{sermon.series}</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">{sermon.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {sermon.speaker} | {new Date(sermon.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
                <p className="mt-1 text-base text-muted-foreground">Scripture: {sermon.scripture}</p>
                <p className="mt-3 line-clamp-2 text-base leading-relaxed text-muted-foreground">{sermon.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  Watch <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
