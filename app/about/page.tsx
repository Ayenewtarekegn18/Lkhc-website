import { leadership } from "@/lib/data";
import { BookOpen, Eye, Heart, Shield, Users, Target, Lightbulb } from "lucide-react";

const values = [
  { icon: Heart, label: "Faith", desc: "Trusting God in all things" },
  { icon: BookOpen, label: "Biblical Teaching", desc: "Grounded in the Word" },
  { icon: Users, label: "Unity", desc: "One body in Christ" },
  { icon: Shield, label: "Integrity", desc: "Living with honesty" },
  { icon: Target, label: "Compassion", desc: "Serving with love" },
  { icon: Lightbulb, label: "Service", desc: "Hands and feet of Christ" },
];

const timeline = [
  { year: "1998", title: "Church Founded", desc: "A small group of believers gathered in a living room to worship and study the Word." },
  { year: "2003", title: "First Building", desc: "The church moved into its first dedicated worship space, serving over 100 members." },
  { year: "2010", title: "Ministry Growth", desc: "Multiple ministries were launched including youth, women's, and children's programs." },
  { year: "2015", title: "Community Outreach", desc: "Expanded charity and mission work, reaching hundreds of families in the community." },
  { year: "2020", title: "Digital Ministry", desc: "Launched online services and digital discipleship programs during challenging times." },
  { year: "2024", title: "New Season", desc: "Entered a new season of growth with expanded facilities and a renewed vision for the city." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden border-b border-border py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80"
            alt="Church community"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 animate-fade-in">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Who We Are</p>
          <h1 className="mt-4 font-serif text-5xl font-bold text-foreground md:text-6xl lg:text-7xl">About Us</h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
            Learn about our mission, our story, and the people who make Lebbu Kale Heywet Church a vibrant community of faith.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 p-10 shadow-md lg:p-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mt-6 font-serif text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We exist to worship God, make disciples through teaching and fellowship, and serve our community with compassion and integrity. Our mission is to see every member grow in their relationship with Christ and to be a light in our city.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 p-10 shadow-md lg:p-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mt-6 font-serif text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                To see lives transformed by the Gospel and families strengthened through Christ-centered community. We envision a church that impacts generations, crossing cultural and social barriers with the love of Jesus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-muted py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">What We Believe</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">Our Core Values</h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.label} className="flex items-start gap-5 rounded-2xl bg-background p-8 shadow-md transition-all hover:shadow-xl lg:p-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{value.label}</h3>
                  <p className="mt-1 text-lg text-muted-foreground">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Foundation</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground md:text-5xl">Statement of Faith</h2>
          <div className="mt-12 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
            <p>We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.</p>
            <p>We believe that the Bible is the inspired, infallible, and authoritative Word of God, our guide for faith and practice.</p>
            <p>We believe in the deity of our Lord Jesus Christ, His virgin birth, His sinless life, His miracles, His atoning death, His bodily resurrection, and His ascension to the right hand of the Father.</p>
            <p>We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life.</p>
            <p>We believe in the spiritual unity of all believers in our Lord Jesus Christ, forming the body of Christ, the Church.</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-border bg-muted py-24 lg:py-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Our Team</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">Church Leadership</h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader) => (
              <div key={leader.name} className="rounded-2xl bg-background p-8 text-center shadow-md transition-all hover:shadow-xl lg:p-10">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 font-serif text-2xl font-bold text-white shadow-lg">
                  {leader.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{leader.name}</h3>
                <p className="text-base font-medium text-accent">{leader.role}</p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Church Story Timeline */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Our Journey</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground md:text-5xl">Church History</h2>
          <div className="mt-16 flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-8 pb-10">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-foreground font-serif text-sm font-semibold text-background">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="mt-2 h-full w-px bg-border" />}
                </div>
                <div className="pb-2 pt-2">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{item.year}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
