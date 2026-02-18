"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/data";
import { Calendar, MapPin, Clock, ArrowRight, List, Grid3X3 } from "lucide-react";

export function EventsList() {
  const [view, setView] = useState<"list" | "calendar">("list");

  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const groupedByMonth: Record<string, typeof events> = {};
  for (const event of sortedEvents) {
    const month = new Date(event.date).toLocaleDateString("en-US", { year: "numeric", month: "long" });
    if (!groupedByMonth[month]) groupedByMonth[month] = [];
    groupedByMonth[month].push(event);
  }

  return (
    <div>
      <div className="mb-12 flex items-center justify-between">
        <h2 className="font-serif text-3xl font-bold text-foreground">Upcoming Events</h2>
        <div className="flex border border-border">
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-2 px-6 py-3 text-base transition-colors ${view === "list" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
          >
            <List className="h-4 w-4" />
            List
          </button>
          <button
            onClick={() => setView("calendar")}
            className={`flex items-center gap-2 px-6 py-3 text-base transition-colors ${view === "calendar" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Grid3X3 className="h-4 w-4" />
            Calendar
          </button>
        </div>
      </div>

      {view === "list" ? (
        <div className="flex flex-col gap-4">
          {sortedEvents.map((event) => (
            <Link key={event.slug} href={`/events/${event.slug}`} className="group flex flex-col gap-6 border-b border-border bg-background p-6 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-6">
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center bg-foreground text-background">
                  <span className="text-2xl font-bold leading-none">{new Date(event.date).getDate()}</span>
                  <span className="text-xs uppercase tracking-wide">{new Date(event.date).toLocaleDateString("en-US", { month: "short" })}</span>
                </div>
                <div>
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{event.category}</span>
                  <h3 className="mt-1 text-xl font-bold text-foreground">{event.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-base text-muted-foreground">
                    <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{event.time}</span>
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{event.location}</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="h-6 w-6 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-12">
          {Object.entries(groupedByMonth).map(([month, monthEvents]) => (
            <div key={month}>
              <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">{month}</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {monthEvents.map((event) => (
                  <Link key={event.slug} href={`/events/${event.slug}`} className="group border border-border bg-background p-8 transition-colors hover:bg-accent/5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center bg-accent/10">
                        <Calendar className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-base text-muted-foreground">
                        {new Date(event.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <h4 className="mt-3 text-xl font-bold text-foreground">{event.title}</h4>
                    <p className="mt-1 text-base text-muted-foreground">{event.time}</p>
                    <p className="text-base text-muted-foreground">{event.location}</p>
                    <span className="mt-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-accent">{event.category}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
