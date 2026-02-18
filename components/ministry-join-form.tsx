"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export function MinistryJoinForm({ ministryName }: { ministryName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
    }, 3000);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <p className="text-lg font-medium text-foreground">Request Sent!</p>
        <p className="text-base text-muted-foreground">We will contact you about joining {ministryName}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="join-name" className="text-base text-foreground">Full Name</Label>
        <Input id="join-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="rounded-xl border-2 border-border text-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="join-phone" className="text-base text-foreground">Phone Number</Label>
        <Input id="join-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+251 ..." required className="rounded-xl border-2 border-border text-lg" />
      </div>
      <Button type="submit" className="mt-2 rounded-full bg-foreground py-6 text-lg text-background hover:scale-105 hover:bg-foreground/90 transition-transform">
        Join Ministry
      </Button>
    </form>
  );
}
