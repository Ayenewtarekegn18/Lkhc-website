"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  }

  if (submitted) {
    return (
      <div className="mt-8 flex items-center justify-center gap-2 text-lg font-medium text-foreground">
        <CheckCircle2 className="h-6 w-6 text-accent" />
        Thank you for subscribing!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex gap-3">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="rounded-full border-2 border-foreground bg-background text-lg"
      />
      <Button type="submit" className="shrink-0 rounded-full bg-foreground px-10 text-lg text-background hover:bg-foreground/90 hover:scale-105 transition-transform">
        Subscribe
      </Button>
    </form>
  );
}
