import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ShieldCheck, Clock3, Microscope, Globe2 } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";

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
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
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
            Animal Health Certificates for EU travel, and OV66 authorised export certification for
            Australia offered across London — completed by an Official Veterinarian in the comfort
            of your own home, so your pet stays calm and you skip the clinic trip.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start your pet's journey
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-border bg-card px-7 py-3 font-semibold transition-colors hover:bg-secondary"
            >
              Explore services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-primary" /> Flexible evening & weekend visits
            </span>
            <span className="flex items-center gap-2">
              <Microscope className="h-4 w-4 text-primary" /> 10-day quarantine route for Australia
            </span>
            <span className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-primary" /> EU & Australia exports
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
    </SiteLayout>
  );
}
