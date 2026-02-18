import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/ministries", label: "Ministries" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/visit", label: "Visit Us" },
];

const ministryLinks = [
  { href: "/ministries/youth-ministry", label: "Youth Ministry" },
  { href: "/ministries/womens-ministry", label: "Women's Ministry" },
  { href: "/ministries/children-ministry", label: "Children Ministry" },
  { href: "/ministries/prayer-groups", label: "Prayer Groups" },
  { href: "/ministries/stage-worship", label: "Worship Ministry" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Church Info */}
          <div>
            <p className="font-serif text-3xl font-semibold tracking-tight">Lebu Kale</p>
            <p className="mt-1 text-sm tracking-wide opacity-60">Heywet Church</p>
            <p className="mt-6 text-sm leading-relaxed opacity-60">
              A community of faith, worship, and love. Growing in Christ, serving our city.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+251911000000"
                className="flex items-center gap-2 text-base opacity-60 transition-opacity hover:opacity-100"
              >
                <Phone className="h-5 w-5" />
                +251 911 000 000
              </a>
              <a
                href="mailto:info@Lebukaleheywet.org"
                className="flex items-center gap-2 text-base opacity-60 transition-opacity hover:opacity-100"
              >
                <Mail className="h-5 w-5" />
                info@Lebukaleheywet.org
              </a>
              <div className="flex items-center gap-2 text-base opacity-60">
                <MapPin className="h-5 w-5 shrink-0" />
                Addis Ababa, Ethiopia
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] opacity-40">Navigation</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base opacity-60 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] opacity-40">Ministries</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {ministryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base opacity-60 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] opacity-40">Service Times</h3>
            <div className="mt-6 flex flex-col gap-4">
              <div>
                <p className="text-base font-medium">Sunday Service</p>
                <p className="text-base opacity-60">3:00 PM</p>
              </div>
              <div>
                <p className="text-base font-medium">Midweek Prayer</p>
                <p className="text-base opacity-60">Wednesday 6:30 PM</p>
              </div>
              <div>
                <p className="text-base font-medium">Teaching & Seminar</p>
                <p className="text-base opacity-60">Saturday 4:00 PM</p>
              </div>
            </div>
            <a
              href="https://wa.me/251911000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-background/20 px-6 py-3 text-base transition-colors hover:bg-background/10"
            >
              <Phone className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 pt-8 text-center text-xs opacity-40">
          <p>Lebu Kale Heywet Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
