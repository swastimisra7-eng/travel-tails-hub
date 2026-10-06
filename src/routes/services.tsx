import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck2,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Mail,
  Plane,
  Stethoscope,
  Syringe,
} from "lucide-react";
import travelDog from "@/assets/travel-dog.jpg";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & How It Works | Pet Permit" },
      {
        name: "description",
        content:
          "Animal Health Certificates for EU travel, Australia export certification and fit-to-fly certificates, completed at your home across London.",
      },
    ],
  }),
  component: Services,
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
      "Australia has some of the strictest biosecurity rules in the world. As an OV66-authorised vet, I'll guide you through the Export Health Certificate process, with examinations done at your home.",
    points: [
      "OV66 authorised — helps your pet qualify for 10-day quarantine in Australia instead of 30 days",
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

function Services() {
  return (
    <SiteLayout>
      {/* Services */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What I do</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-medium md:text-4xl">
            One vet, your doorstep, every document covered
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md md:last:col-span-2 lg:last:col-span-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
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
            <Link
              to="/contact"
              className="shrink-0 rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Ask about your destination
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
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
    </SiteLayout>
  );
}
