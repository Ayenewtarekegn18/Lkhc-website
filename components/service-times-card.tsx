import { Clock, MapPin } from "lucide-react";

export function ServiceTimesCard() {
  return (
    <div className="rounded-2xl border-2 border-border bg-background p-8 shadow-lg">
      <h3 className="font-serif text-3xl font-bold text-foreground">Service Times</h3>
      <div className="mt-6 flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">Sunday Service</p>
            <p className="text-base text-muted-foreground">3:00 PM</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">Midweek Prayer</p>
            <p className="text-base text-muted-foreground">Wednesday 6:30 PM</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">Teaching & Seminar</p>
            <p className="text-base text-muted-foreground">Saturday 4:00 PM</p>
          </div>
        </div>
        <div className="mt-2 flex items-start gap-4 border-t border-border pt-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
            <MapPin className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">Our Location</p>
            <p className="text-base text-muted-foreground">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
