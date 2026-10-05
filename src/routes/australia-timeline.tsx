import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import {
  PawPrint,
  ArrowLeft,
  Microchip,
  Syringe,
  ScanLine,
  Droplets,
  FileCheck2,
  FileSignature,
  Plane,
  ShieldCheck,
  CalendarClock,
  AlertTriangle,
  CheckCircle2,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/australia-timeline")({
  head: () => ({
    meta: [
      { title: "Australia Pet Export Timeline — What Happens When | Pet Permit" },
      {
        name: "description",
        content:
          "A step-by-step timeline for UK pet owners exporting a dog or cat to Australia — from rabies vaccination and RNATT blood tests to the export health certificate and quarantine on arrival.",
      },
      { property: "og:title", content: "Australia Pet Export Timeline — What Happens When" },
      {
        property: "og:description",
        content:
          "Every milestone in the Australia pet export process, mapped backwards from your travel date — RNATT, identity checks, import permit and quarantine.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AustraliaTimeline,
});

type Milestone = {
  when: string;
  countdown: string;
  icon: typeof Syringe;
  title: string;
  body: string;
  points?: string[];
  highlight?: boolean;
};

const milestones: Milestone[] = [
  {
    when: "As early as possible",
    countdown: "12+ months before travel",
    icon: CalendarClock,
    title: "Start planning & check the microchip",
    body: "Australia's process is long, so the earlier we start, the smoother it goes. At a first home visit I'll scan your pet's microchip and confirm it's registered on a UK government-approved database with your correct details.",
    points: [
      "Microchip must be scanned and verified every time your pet is tested, treated or examined",
      "Owner details on the database must match the exporter's details exactly",
    ],
  },
  {
    when: "At least 4 weeks before the blood test",
    countdown: "7–12 months before travel",
    icon: Syringe,
    title: "Rabies vaccination",
    body: "Your pet must be vaccinated against rabies with a government-approved vaccine when at least 12 weeks old. Any UK vet (MRCVS) can do this — but the microchip must be read and recorded at the time.",
    points: [
      "For a first vaccination, allow at least 4 weeks before blood sampling so antibody levels are high enough",
      "Keep the rabies vaccination certificate safe — it's needed later",
    ],
  },
  {
    when: "Two separate visits",
    countdown: "Before the blood test",
    icon: ScanLine,
    title: "Two identity checks by two different OV66 vets",
    body: "For your pet to qualify for the shorter 10-day quarantine, two Official Veterinarians with OV66 authorisation — from different, unconnected practices — must each verify your pet's identity and email a declaration directly to the Australian authorities (DAFF).",
    points: [
      "Each vet takes a colour photo of your pet with the microchip number visible on the scanner",
      "The second ID check date counts as the official verification date",
      "If the ID photos aren't accepted, your pet may only qualify for 30-day quarantine — I make sure they're right first time",
    ],
    highlight: true,
  },
  {
    when: "180–365 days before export",
    countdown: "6–12 months before travel",
    icon: Droplets,
    title: "RNATT blood test",
    body: "The rabies antibody blood sample must be taken by an OV66-authorised vet, on or after the second identity check, and tested at an approved laboratory. The result must be at least 0.5 IU/ml.",
    points: [
      "I don't take blood samples myself — the draw is done by another OV66 vet (this can be the same day as the second ID check)",
      "Once the laboratory report is issued, I certify the results and complete the RNATT declaration",
    ],
    highlight: true,
  },
  {
    when: "After the blood test result",
    countdown: "~6 months before travel",
    icon: FileSignature,
    title: "RNATT declaration & import permit application",
    body: "The RNATT declaration must be completed by an OV66 vet who did not take the blood sample — that's where I come in. The declaration, lab report and rabies certificate then go into your pet's import permit application to Australia.",
    points: [
      "The import permit states whether your pet is eligible for 10-day or 30-day quarantine",
      "Book your pet's quarantine place and travel as soon as the permit is granted",
    ],
  },
  {
    when: "Final weeks",
    countdown: "Weeks before travel",
    icon: FileCheck2,
    title: "Final tests, treatments & Export Health Certificate",
    body: "Any remaining tests and treatments required by the certificate are completed (microchip verified each time). I then examine your pet at home, certify the Export Health Certificate, and endorse all lab reports and declarations.",
    points: [
      "The certifying vet must be different from the vet who took the blood sample",
      "Everything is checked and stamped before your pet travels",
    ],
  },
  {
    when: "Travel day",
    countdown: "Departure",
    icon: Plane,
    title: "Fly to Australia",
    body: "Your pet travels with the Export Health Certificate and all endorsed documents. On arrival they go into post-entry quarantine — a minimum of 10 days if every step above was followed by OV66-authorised vets, otherwise 30 days.",
    points: [
      "10-day quarantine: all preparation done under the OV66 process",
      "30-day quarantine: standard preparation route",
    ],
  },
];

function AustraliaTimeline() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <PawPrint className="h-5 w-5" />
            </span>
            <span
              className="font-semibold tracking-tight"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Pet Permit
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-4 pt-16 text-center md:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
          <ShieldCheck className="h-3.5 w-3.5" />
          Based on APHA guidance ET258 (Aug 2025)
        </span>
        <h1 className="mt-6 text-4xl font-medium leading-tight md:text-5xl">
          Your pet's journey to Australia, step by step
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Australia's biosecurity rules mean preparation starts many months before you fly. Here's
          every milestone, mapped backwards from your travel date — and which ones I handle for you
          at home.
        </p>
        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-dashed border-border bg-card/60 px-6 py-4 text-left">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">The golden rule:</span> the rabies blood
            test (RNATT) must be done between 180 and 365 days before export. Miss that window and
            the timeline resets — so start at least 7–8 months ahead.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="relative">
          <span className="absolute bottom-6 left-[27px] top-6 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div
                key={m.title}
                className={`relative flex gap-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:flex-row-reverse md:pl-12 md:text-right"
                }`}
              >
                {/* Node */}
                <span
                  className={`z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background shadow-md md:absolute md:top-0 ${
                    i % 2 === 0 ? "md:-right-7" : "md:-left-7"
                  } ${m.highlight ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}
                >
                  <m.icon className="h-6 w-6" />
                </span>
                <article
                  className={`flex-1 rounded-3xl border bg-card p-6 shadow-sm ${
                    m.highlight ? "border-primary/40" : "border-border"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {m.countdown}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{m.when}</p>
                  <h2 className="mt-2 text-xl font-semibold">{m.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                  {m.points && (
                    <ul className="mt-4 space-y-2">
                      {m.points.map((p) => (
                        <li
                          key={p}
                          className={`flex items-start gap-2.5 text-sm ${
                            i % 2 === 1 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
          <h2 className="text-3xl font-medium md:text-4xl">
            Tell me your travel date — I'll map out every deadline
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            I'll build a personalised timeline for your pet, coordinate with the OV66 vet who takes
            the blood sample, and complete the certification visits at your home.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:swasti@petpermit.co.uk"
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3 font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> swasti@petpermit.co.uk
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
