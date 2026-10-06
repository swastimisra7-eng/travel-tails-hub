import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Pet Permit" },
      {
        name: "description",
        content:
          "Answers to common questions about pet travel certificates, home visits, areas covered and the Australia export process.",
      },
    ],
  }),
  component: Faqs,
});

const faqs: { q: string; a: string; link?: { to: "/pricing"; label: string } }[] = [
  {
    q: "How much does it cost?",
    a: "You'll find the full list of prices on our Pricing page.",
    link: { to: "/pricing", label: "See pricing" },
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
    a: "An AHC cannot be issued more than 10 days before you enter the EU. I recommend booking your AHC appointment 2–4 weeks ahead and making this appointment usually 6–7 days prior to entry. Your pet's rabies vaccination must also have been given at least 21 days before the AHC is issued.",
  },
  {
    q: "The rabies vaccination in my pet's EU passport has expired — what now?",
    a: "UK vets can't enter rabies vaccinations into an EU-issued passport — only the tapeworm and clinical examination sections may be completed here. If the rabies vaccination recorded in an EU passport has expired while your pet has been in Great Britain, you'll need a new Animal Health Certificate instead. Book a home visit and I'll sort it.",
  },
  {
    q: "How long does the Australia process take?",
    a: "Plan for at least 7–8 months. The rabies antibody blood test must be done at least 180 days before export, and your pet will spend at least 10 days in quarantine on arrival — or 30 days if the preparation wasn't done under the OV66 process. I'm OV66 authorised, so I can help your pet qualify for the shorter 10-day quarantine. I'll support you at each stage of the timeline wherever I can.",
  },
];

function Faqs() {
  return (
    <SiteLayout>
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQs</p>
          <h1 className="mt-3 text-3xl font-medium md:text-4xl">Common questions</h1>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group scroll-mt-24 rounded-2xl border border-border bg-card p-6 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
                {f.link && (
                  <Link
                    to={f.link.to}
                    className="mt-4 inline-flex rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    {f.link.label}
                  </Link>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
