import { useEffect, useState } from "react";
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
  Stethoscope,
  Menu,
  X,
  HeartHandshake,
  Home,
  Linkedin,
} from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import travelDog from "@/assets/travel-dog.jpg";
import swastiPhoto from "@/assets/swasti-misra.jpg";
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
      "Completed at your home — no stressful clinic trip",
    ],
  },
  {
    icon: Plane,
    title: "Australia Export Certification",
    description:
      "Australia has some of the strictest biosecurity rules in the world. I'll guide you through the Export Health Certificate process, with examinations done at your home.",
    points: [
      "ID check and ID declaration",
      "RNATT: I certify the laboratory results once the blood draw has been completed by another OV",
      "Liaison with your chosen pet transport agent",
      "Export Health Certificate (EHC) via APHA",
    ],
  },
  {
    icon: Stethoscope,
    title: "Fit-to-Fly Certificates",
    description:
      "Some airlines and destinations ask for a vet's confirmation that your pet is healthy enough to travel. I'll examine your pet at home and issue a fit-to-fly certificate to travel alongside your other documents.",
    points: [
      "Full health examination at your home",
      "Signed certificate issued at the visit",
      "Can be combined with an AHC or export visit",
    ],
  },
];

const steps = [
  {
    icon: Mail,
    title: "Tell us your plans",
    description:
      "Send me a quick enquiry with your destination, travel dates, and your pet's details. I'll explain the key deadlines and support you at each stage wherever I can.",
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

const faqs: { id?: string; q: string; a: string }[] = [
  {
    id: "pricing",
    q: "How much does it cost?",
    a: [
      "AHC: £200 (repeat customers £185)",
      "Urgent AHC, under 5 days' notice: £250",
      "Additional pets: £50 each (up to 5 per AHC)",
      "Fit-to-fly certificate: £100",
      "Australia: ID checks £200 · RNATT £100 · EHC £250",
      "Amendments: £100 per document",
      "Other documents: price on request",
    ].join("\n"),
  },
  {
    q: "Which areas do you cover?",
    a: [
      "I regularly cover East London, South East London and parts of North London.",
      "I can often travel further for homes with good public transport links. Send an enquiry with your postcode and I'll confirm whether I can come to you.",
    ].join("\n\n"),
  },
  {
    q: "What should I have ready for the visit?",
    a: [
      "A home visit usually takes 30–45 minutes. Your pet must be microchipped and have a valid rabies vaccination. On the day, please have ready:",
      "• Your pet's original vaccination record",
      "• Your pet's microchip details",
      "• Your travel dates and destination",
      "• An adult (18 or over) at home for the whole visit",
      "• Your pet indoors and safely restrained",
      "• Pre-entry tapeworm treatment (subject to travel destination)",
    ].join("\n"),
  },
  {
    q: "How far in advance should I book an AHC appointment?",
    a: "An AHC must be issued no more than 10 days before you enter the EU. I recommend booking 2–4 weeks ahead, and making sure your pet's rabies vaccination is at least 21 days old before the home visit.",
  },
  {
    q: "The rabies vaccination in my pet's EU passport has expired — what now?",
    a: "UK vets can't enter rabies vaccinations into an EU-issued passport — only the tapeworm and clinical examination sections may be completed here. If the rabies vaccination recorded in an EU passport has expired while your pet has been in Great Britain, you'll need a new Animal Health Certificate instead. Book a home visit and I'll sort it.",
  },
  {
    q: "How long does the Australia process take?",
    a: "Plan for at least 7–8 months. The rabies antibody blood test must be done at least 180 days before export, and your pet will spend a minimum of 10 days in quarantine on arrival. I'll support you at each stage of the timeline wherever I can.",
  },
];

// Open the FAQ <details> matching an id, e.g. the pricing question from the nav link.
function openFaq(id: string) {
  const el = document.getElementById(id);
  if (el instanceof HTMLDetailsElement) el.open = true;
}

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#about", label: "About me" },
  { href: "#pricing", label: "Pricing", faq: "pricing" },
  { href: "#faqs", label: "FAQs" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  // Hide the mobile bottom "Book" bar while the enquiry form itself is on screen.
  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(([entry]) =>
      setContactVisible(entry?.isIntersecting ?? false),
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onHash = () => openFaq(window.location.hash.slice(1));
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20 text-foreground lg:pb-0">
      {/* Header */}
      <header
        className={`sticky top-0 z-40 border-b border-border/60 backdrop-blur ${
          menuOpen ? "bg-background" : "bg-background/85"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
          <div className="flex shrink-0 items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <PawPrint className="h-5 w-5" />
            </span>
            <span
              className="whitespace-nowrap font-semibold tracking-tight"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Pet Permit
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={l.faq ? () => openFaq(l.faq) : undefined}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-5"
            >
              Book a visit
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" className="border-t border-border/60 px-6 pb-4 pt-2 lg:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => {
                  if (l.faq) openFaq(l.faq);
                  setMenuOpen(false);
                }}
                className="block rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            APHA Authorised and RCVS Registered · Home visits across London
          </span>
          <h1 className="mt-6 text-4xl font-medium leading-tight md:text-5xl">
            Taking your pet abroad? I'll handle the paperwork at your home.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Animal Health Certificates for EU travel, and export certification for Australia —
            completed by an Official Veterinarian in the comfort of your own home, so your pet stays
            calm and you skip the clinic trip.
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
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md md:last:col-span-2 lg:last:col-span-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
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
      <section id="process">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                How it works
              </p>
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
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-16 bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-[2fr_3fr]">
            <img
              src={swastiPhoto}
              alt="Dr Swasti Misra, the vet behind Pet Permit"
              width={800}
              height={800}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-lg"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                About me
              </p>
              <h2 className="mt-3 text-3xl font-medium md:text-4xl">
                Hi, I'm Swasti — the vet behind Pet Permit
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  I graduated from the Royal Veterinary College, London in 2020, and have since
                  worked in a variety of practices, from the Norfolk countryside to being lead vet
                  at a busy 24/7 small animal hospital in London.
                </p>
                <p>
                  For over half a decade, I've helped owners with their pet travel paperwork, and
                  I've seen first-hand how overwhelming the process can be.
                </p>
                <p>
                  That's why I started Pet Permit: to take the stress out of travel for your pet,
                  and the confusion out of it for you. From your first question to the final
                  certificate, you'll have one point of contact.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: ShieldCheck, label: "APHA Authorised. RCVS Registered." },
                  { icon: Home, label: "Home visits only" },
                  { icon: HeartHandshake, label: "One vet, start to finish" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium"
                  >
                    <c.icon className="h-5 w-5 shrink-0 text-primary" />
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQs</p>
          <h2 className="mt-3 text-3xl font-medium md:text-4xl">Common questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                id={f.id}
                className="group scroll-mt-24 rounded-2xl border border-border bg-card p-6 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
          <h2 className="text-3xl font-medium md:text-4xl">
            Tell me where you're headed — I'll come to you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Tell me a little about your trip and when you're free, and I will get back to you within
            48 hours with a personalised document plan.
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
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4">
            <span>RCVS-registered · APHA-recognised processes</span>
            <a
              href="https://www.rcvs.org.uk/animal-owners/find-a-vet/people/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium transition-colors hover:text-foreground"
            >
              <ShieldCheck className="h-4 w-4" /> RCVS Find a Vet
            </a>
            <a
              href="https://www.linkedin.com/in/misraswasti/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile & tablet: sticky booking bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/90 px-6 py-3 backdrop-blur transition-transform lg:hidden ${
          contactVisible ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <a
          href="#contact"
          className="block w-full rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Book a visit
        </a>
      </div>
    </div>
  );
}
