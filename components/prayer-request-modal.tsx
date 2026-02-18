"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

interface PrayerRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrayerRequestModal({ open, onOpenChange }: PrayerRequestModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setRequest("");
      onOpenChange(false);
    }, 2500);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl font-bold text-foreground">Prayer Request</DialogTitle>
          <DialogDescription className="text-base">
            Share your prayer request with our prayer team. We will lift you up in prayer.
          </DialogDescription>
        </DialogHeader>
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-accent" />
            <h3 className="font-serif text-2xl font-bold text-foreground">Thank You!</h3>
            <p className="text-lg text-muted-foreground">
              Your prayer request has been received. Our team will be praying for you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="prayer-name" className="text-base text-foreground">Name</Label>
              <Input
                id="prayer-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="rounded-xl border-2 border-border text-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="prayer-email" className="text-base text-foreground">Email (optional)</Label>
              <Input
                id="prayer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="rounded-xl border-2 border-border text-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="prayer-request" className="text-base text-foreground">Prayer Request</Label>
              <Textarea
                id="prayer-request"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                placeholder="Share your prayer request..."
                rows={4}
                required
                className="rounded-xl border-2 border-border text-lg"
              />
            </div>
            <Button type="submit" className="rounded-full bg-foreground py-6 text-lg text-background hover:scale-105 hover:bg-foreground/90 transition-transform">
              Submit Prayer Request
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
