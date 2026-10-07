import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck2, Info, Plane, Stethoscope } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Pet Permit" },
      {
        name: "description",
        content:
          "Prices for Animal Health Certificates, Australia export certification and fit-to-fly certificates, including home visits across London.",
      },
    ],
  }),
  component: Pricing,
});

const groups = [
  {
    icon: FileCheck2,
    title: "EU travel",
    items: [
      { label: "Animal Health Certificate (AHC)", price: "£200" },
      { label: "Repeat customers", price: "£185" },
      { label: "Urgent AHC, booked less than 5 days ahead", price: "£250" },
      { label: "Each additional pet on the same AHC (up to 5)", price: "£50" },
    ],
  },
  {
    icon: Plane,
    title: "Australia export",
    items: [
      { label: "ID checks", price: "£200" },
      { label: "RNATT certification", price: "£100" },
      { label: "Export Health Certificate (EHC)", price: "£250" },
    ],
    link: { to: "/australia-timeline", label: "See the step-by-step timeline" },
  },
  {
    icon: Stethoscope,
    title: "Other services",
    items: [
      { label: "Fit-to-fly certificate", price: "£100" },
      { label: "Amendments to a document", price: "£100 per document" },
      { label: "Other documents", price: "Price on request" },
    ],
  },
] as const;

function Pricing() {
  return (
    <SiteLayout>
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-medium md:text-4xl">Clear, upfront prices</h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <article
                key={g.title}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm md:last:col-span-2 lg:last:col-span-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <g.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-semibold">{g.title}</h2>
                <dl className="mt-5 divide-y divide-border">
                  {g.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <dt className="text-sm text-muted-foreground">{item.label}</dt>
                      <dd className="shrink-0 text-right font-semibold">{item.price}</dd>
                    </div>
                  ))}
                </dl>
                {"link" in g && (
                  <Link
                    to={g.link.to}
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    {g.link.label}
                  </Link>
                )}
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-border bg-card/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Not sure what you need?</span> Send an
              enquiry and I'll confirm the documents and the total cost for your trip.
            </p>
            <Link
              to="/contact"
              className="shrink-0 rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Get a quote
            </Link>
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">£50 deposit for all services.</span> A
              £50 deposit is taken when you book and comes off your final fee. It's fully refundable
              if you cancel more than 72 hours before your appointment.{" "}
              <a
                href="/terms-and-conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-2"
              >
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
