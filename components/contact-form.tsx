"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 3000);
  }

  if (submitted) {
    return (
      <div className="mt-10 flex flex-col items-center gap-4 border border-border p-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="font-serif text-3xl font-bold text-foreground">Message Sent!</h3>
        <p className="text-lg text-muted-foreground">Thank you for reaching out. We will respond as soon as possible.</p>
      </div>
    );
  }

  return (
    <div className="mt-10 border border-border p-8 lg:p-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-name" className="text-base font-medium text-foreground">Name</Label>
            <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="rounded-none border border-border text-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-email" className="text-base font-medium text-foreground">Email</Label>
            <Input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="rounded-none border border-border text-lg" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-subject" className="text-base font-medium text-foreground">Subject</Label>
          <Input id="contact-subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="What is this about?" required className="rounded-none border border-border text-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-message" className="text-base font-medium text-foreground">Message</Label>
          <Textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message..." rows={5} required className="rounded-none border border-border text-lg" />
        </div>
        <Button type="submit" className="rounded-none bg-foreground py-6 text-lg text-background hover:bg-foreground/90">
          Send Message
        </Button>
      </form>
    </div>
  );
}
