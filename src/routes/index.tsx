import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PawPrint,
  FileCheck2,
  Plane,
  ClipboardList,
  Syringe,
  Microscope,
  CalendarCheck2,
  ShieldCheck,
  Clock3,
  Globe2,
  Mail,
  CheckCircle2,
} from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import travelDog from "@/assets/travel-dog.jpg";
import { EnquiryForm } from "@/components/EnquiryForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pet Permit — Pet Travel Documents for the EU & Australia" },
      {
        name: "description",
      content:
          "A UK Official Veterinarian providing home visits for Animal Health Certificates (AHCs) for EU travel and export certification for Australia. Stress-free pet travel paperwork, completed at your home.",
      },
      { property: "og:title", content: "Pet Permit — Pet Travel Documents for the EU & Australia" },
      {
        property: "og:description",
        content:
          "Animal Health Certificates for EU travel and export certification for Australia, completed at your home by a UK Official Veterinarian.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: FileCheck2,
    title: "Animal Health Certificates (EU)",
    description:
      "Under the EU rules that took effect on 22 April 2026, GB residents should no longer rely on EU pet passports — an Animal Health Certificate is now the document to travel with. I issue AHCs at your home, valid for entry to the EU and Northern Ireland.",
    points: [
      "Valid for 10 days for EU entry from date of issue",
      "Up to 6 months onward travel in the EU & re-entry to GB",
      "Microchip & rabies vaccination checks included",
      "Free return-to-GB checklist with every appointment",
      "Completed at your home — no stressful clinic trip",
    ],
  },
  {
    icon: Plane,
    title: "Australia Export Certification",
    description:
      "Australia has some of the strictest biosecurity rules in the world. I manage the full Export Health Certificate process — from rabies titre testing timelines to the mandatory quarantine booking paperwork — with examinations done at your home.",
    points: [
      "Export Health Certificate (EHC) via APHA",
      "RNATT: I certify the laboratory results once the blood draw has been completed by another OV",
      "180-day timeline planning from blood draw",
      "Liaison with your chosen pet transport agent",
    ],
  },
];

const steps = [
  {
    icon: Mail,
    title: "Tell us your plans",
    description:
      "Send me a quick enquiry with your destination, travel dates, and your pet's details. I map out every deadline backwards from your departure day.",
  },
  {
    icon: Syringe,
    title: "Vaccines, chips & tests",
    description:
      "I verify microchips, rabies vaccinations and any blood tests your destination requires — and arrange anything that's missing.",
  },
  {
    icon: ClipboardList,
    title: "Home certification visit",
    description:
      "I visit your home at a time that suits you, examine your pet in familiar surroundings, and issue the documents there and then.",
  },
  {
    icon: CalendarCheck2,
    title: "Travel with confidence",
    description:
      "You leave with every certificate, stamp and supporting document in order — plus a checklist for travel day itself.",
  },
];

const faqs = [
  {
    q: "How far in advance should I book an AHC appointment?",
    a: "An AHC must be issued no more than 10 days before you enter the EU. I recommend booking 2–4 weeks ahead, and making sure your pet's rabies vaccination is at least 21 days old before the home visit.",
  },
  {
    q: "My pet has an EU pet passport — can I still use it?",
    a: "Under the EU rules that took effect on 22 April 2026, EU pet passports should no longer be used by people whose main home is in Great Britain — even passports issued before that date may no longer be accepted for EU entry. An Animal Health Certificate is now the recommended document. You can still use an EU pet passport for your return journey to Great Britain.",
  },
  {
    q: "The rabies vaccination in my pet's EU passport has expired — what now?",
    a: "UK vets can't enter rabies vaccinations into an EU-issued passport — only the tapeworm and clinical examination sections may be completed here. If the rabies vaccination recorded in an EU passport has expired while your pet has been in Great Britain, you'll need a new Animal Health Certificate instead. Book a home visit and I'll sort it.",
  },
  {
    q: "Does my pet need a microchip?",
    a: "Yes — your pet must be microchipped (or have a legible tattoo applied before 3 July 2011) before the rabies vaccination is given. I scan and verify the microchip at every visit, and for Australia exports the chip must be registered on a Defra-approved UK database with your correct details.",
  },
  {
    q: "Can my puppy or kitten travel?",
    a: "Puppies and kittens under eight weeks old can't travel unless they're accompanied by their mother. On top of that, the rabies vaccination can only be given from 12 weeks of age, followed by a 21-day wait before EU travel — so in practice, plan on your pet being at least 15 weeks old before their first trip.",
  },
  {
    q: "How long is an Animal Health Certificate valid for?",
    a: "You still need a new AHC for each trip from Great Britain to the EU, and it must be issued within 10 days of arrival. But once you're in the EU, it now covers onward travel for up to six months and re-entry to Great Britain — as long as your pet's rabies vaccination stays valid.",
  },
  {
    q: "Can someone else travel with my pet?",
    a: "Yes, but extra paperwork is needed. If you're not travelling with your pet, the pet must travel within five days of you, and the person accompanying them must carry your written permission alongside the pet's travel document. I can help you prepare this at the home visit.",
  },
  {
    q: "How many pets can I take?",
    a: "Non-commercial travel into the EU is now limited to five pets per private vehicle (previously five per person). The five-pet limit for travelling on foot is unchanged. Exceptions apply for pets travelling to competitions, events or training where specific conditions are met — ask me if this applies to you.",
  },
  {
    q: "How long does the Australia process take?",
    a: "Plan for at least 7–8 months. The rabies antibody blood test must be done at least 180 days before export, and your pet will spend a minimum of 10 days in quarantine on arrival. I'll build the full timeline with you.",
  },
  {
    q: "Do you carry out the blood draw for the Australia rabies titre test (RNATT)?",
    a: "No — I don't perform blood draws. Once the sample has been taken by another OV and tested at the appropriate laboratory, I can certify the results and complete the rest of your export documentation.",
  },
  {
    q: "Can you help if my dates change?",
    a: "Yes — export documentation is date-sensitive, so if your travel moves, get in touch as early as possible and I'll re-issue or re-schedule whatever is affected.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight" style={{ fontFamily: "Fraunces, serif" }}>
              Pet Permit
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#process" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#faqs" className="transition-colors hover:text-foreground">FAQs</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            RCVS Official Veterinarian · Home visits
          </span>
          <h1 className="mt-6 text-4xl font-medium leading-tight md:text-5xl">
            Taking your pet abroad? I'll handle the paperwork — at your home.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Animal Health Certificates for EU travel, and full export certification for
            Australia — completed by an Official Veterinarian in the comfort of your own
            home, so your pet stays calm and you skip the clinic trip.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start your pet's journey
            </a>
            <a
              href="#services"
              className="rounded-full border border-border bg-card px-7 py-3 font-semibold transition-colors hover:bg-secondary"
            >
              Explore services
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-primary" /> Flexible evening & weekend visits
            </span>
            <span className="flex items-center gap-2">
              <Microscope className="h-4 w-4 text-primary" /> RNATT result certification
            </span>
            <span className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-primary" /> EU & Australia specialists
            </span>
          </div>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
          <img
            src={heroPets}
            alt="A dog and cat ready for travel beside a pet carrier and travel documents"
            width={1600}
            height={1008}
            className="w-full rounded-3xl border border-border object-cover shadow-xl"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What I do</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium md:text-4xl">
            One vet, your doorstep, every document covered
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {s.title.includes("Australia") && (
                  <Link
                    to="/australia-timeline"
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    See the step-by-step timeline
                  </Link>
                )}
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-border bg-card/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Travelling elsewhere?</span>{" "}
              Requirements vary by destination — get in touch and we'll see how we can help.
            </p>
            <a
              href="#contact"
              className="shrink-0 rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Ask about your destination
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">How it works</p>
            <h2 className="mt-3 text-3xl font-medium md:text-4xl">
              A clear path from booking to boarding
            </h2>
            <div className="mt-10 space-y-8">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <step.icon className="h-5 w-5" />
                    </span>
                    {i < steps.length - 1 && <span className="mt-2 w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Step {i + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src={travelDog}
            alt="A corgi waiting at an airport beside an IATA-approved travel crate"
            width={1200}
            height={912}
            loading="lazy"
            className="w-full rounded-3xl border border-border object-cover shadow-lg"
          />
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQs</p>
          <h2 className="mt-3 text-3xl font-medium md:text-4xl">Common questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-card p-6 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
          <h2 className="text-3xl font-medium md:text-4xl">
            Tell me where you're headed — I'll come to you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Tell me a little about your trip and when you're free, and I'll get back to you within
            one working day with a personalised document plan.
          </p>
          <div className="mx-auto mt-8 max-w-3xl">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <span className="flex items-center gap-2">
            <PawPrint className="h-4 w-4" /> Pet Permit — UK pet travel documentation
          </span>
          <span>
            Certification by RCVS-registered Official Veterinarians · APHA-recognised processes
          </span>
        </div>
      </footer>
    </div>
  );
}
