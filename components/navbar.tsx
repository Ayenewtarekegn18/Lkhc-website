"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrayerRequestModal } from "@/components/prayer-request-modal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/ministries",
    label: "Ministries",
    children: [
      { href: "/ministries", label: "All Ministries" },
      { href: "/ministries/spiritual-service", label: "Spiritual Service" },
      { href: "/ministries/youth-ministry", label: "Youth Ministry" },
      { href: "/ministries/womens-ministry", label: "Women's Ministry" },
      { href: "/ministries/children-ministry", label: "Children Ministry" },
      { href: "/ministries/stage-worship", label: "Stage & Worship" },
    ],
  },
  { href: "/events", label: "Events" },
  { href: "/sermons", label: "Sermons" },
  { href: "/give", label: "Give" },
  { href: "/visit", label: "Visit" },
  { href: "/announcements", label: "News" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Lebbu Kale
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-base tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute left-0 top-full w-56 rounded-xl border border-border bg-background p-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-base text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-base tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPrayerOpen(true)}
              className="hidden text-base tracking-wide text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Prayer
            </button>
            <Button asChild size="sm" className="rounded-full bg-foreground px-6 text-background hover:bg-foreground/90">
              <Link href="/visit">Visit Us</Link>
            </Button>
            <button
              className="inline-flex items-center justify-center p-2 text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="border-t border-border bg-background px-6 pb-6 pt-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border-b border-border py-3 text-base text-foreground transition-colors last:border-0 hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setPrayerOpen(true);
                setMobileOpen(false);
              }}
              className="mt-4 w-full rounded-full border-2 border-foreground py-3 text-center text-base font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Submit Prayer Request
            </button>
          </div>
        )}
      </header>
      <PrayerRequestModal open={prayerOpen} onOpenChange={setPrayerOpen} />
    </>
  );
}
