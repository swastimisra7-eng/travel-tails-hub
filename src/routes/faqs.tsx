import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Pet Permit" },
      {
        name: "description",
        content:
          "Answers to common questions about Animal Health Certificates, EU pet travel, Australia exports, home visits and booking.",
      },
    ],
  }),
  component: Faqs,
});

type Faq = {
  q: string;
  a: string;
  link?: { to: "/pricing" | "/services"; label: string } | { href: string; label: string };
};

const groups: { title: string; faqs: Faq[] }[] = [
  {
    title: "EU travel and Animal Health Certificates",
    faqs: [
      {
        q: "What is an Animal Health Certificate (AHC)?",
        a: "An AHC is the official document your dog, cat or ferret needs to travel from Great Britain to the EU. It's issued by an Official Veterinarian after checking your pet's microchip, rabies vaccination and, where your destination requires it, tapeworm treatment.",
      },
      {
        q: "Can I still use my EU pet passport?",
        a: "Not to enter the EU if you live in Great Britain. Under the EU rules that took effect on 22 April 2026, GB residents can't use a pet passport to enter the EU, even one issued in the EU — you'll need an AHC instead. You can still use an EU pet passport for your return journey into Great Britain.",
      },
      {
        q: "How long is an AHC valid for?",
        a: "Your AHC must be used to enter the EU within 10 days of being issued. Once you're in the EU, it's valid for up to 6 months for onward travel within the EU and for re-entering Great Britain, as long as your pet's rabies vaccination stays in date.",
      },
      {
        q: "Do I need a new AHC for every trip?",
        a: "Yes. You need a new AHC for each separate trip from Great Britain to the EU.",
      },
      {
        q: "How far in advance should I book an AHC appointment?",
        a: "An AHC cannot be issued more than 10 days before you enter the EU. I recommend booking your AHC appointment 2–4 weeks ahead and making this appointment usually 6–7 days prior to entry. Your pet's rabies vaccination must also have been given at least 21 days before the AHC is issued.",
      },
      {
        q: "How many pets can I take?",
        a: "Up to 5 pets can travel on one AHC. You can't take more than 5 pets in a private vehicle into the EU (or as a foot passenger), unless they're travelling for a competition, show or training event and you have written proof of registration.",
      },
      {
        q: "Does my dog need tapeworm treatment?",
        a: "Dogs travelling to Finland, Ireland, Malta, Norway or Northern Ireland need tapeworm treatment from a vet no less than 24 hours and no more than 5 days (120 hours) before arrival. It must be recorded on the AHC. Cats and ferrets don't need it, and dogs don't need it for the return journey to Great Britain from these countries.",
      },
      {
        q: "Can someone else travel with my pet?",
        a: "Yes. If you're not travelling with your pet, an authorised person can — with your written authorisation — as long as your pet travels within 5 days of you. If you're using a transport company, please tell me when you book so the paperwork is right.",
      },
      {
        q: "What is a travellers' point of entry (TPE)?",
        a: "It's the port, Eurotunnel terminal or airport where your pet first arrives in the EU and goes through checks. It must be an official travellers' point of entry — your ferry company, Eurotunnel or airline can confirm which one you'll use.",
      },
      {
        q: "Can my puppy or kitten travel?",
        a: "Your pet must be at least 12 weeks old to have its rabies vaccination, and must then wait 21 days before travelling to the EU. In practice, that means your puppy or kitten will be at least 15 weeks old before its first trip.",
      },
      {
        q: "Do I need an AHC for Northern Ireland?",
        a: "Not usually. For travel from Great Britain to Northern Ireland, you can apply online for a free Northern Ireland pet travel document instead — your pet just needs to be microchipped. You'll only need an AHC if you're travelling on to Ireland or another EU country.",
      },
      {
        q: "The rabies vaccination in my pet's EU passport has expired — what now?",
        a: "UK vets can't enter rabies vaccinations into an EU-issued passport — only the tapeworm and clinical examination sections may be completed here. If the rabies vaccination recorded in an EU passport has expired while your pet has been in Great Britain, you'll need a new Animal Health Certificate instead. Book a home visit and I'll sort it.",
      },
    ],
  },
  {
    title: "Australia exports",
    faqs: [
      {
        q: "What does OV66 mean, and how does it reduce quarantine to 10 days?",
        a: "OV66 is the authorisation Official Veterinarians need to carry out the identity checks, blood sampling and declarations for pets going to Australia. When every step is completed under the OV66 process, your pet can qualify for Australia's minimum 10-day quarantine instead of 30 days. I'm OV66 authorised.",
      },
      {
        q: "What's the difference between an AHC and an Export Health Certificate (EHC)?",
        a: "An AHC is for pet travel from Great Britain to the EU. An EHC is the export certificate needed for countries outside the EU, such as Australia. It's specific to the destination country and is issued through APHA.",
      },
      {
        q: "How long does the Australia process take?",
        a: "Plan for at least 7–8 months. The rabies antibody blood test must be done at least 180 days before export, and your pet will spend at least 10 days in quarantine on arrival — or 30 days if the preparation wasn't done under the OV66 process. I'm OV66 authorised, so I can help your pet qualify for the shorter 10-day quarantine. I'll support you at each stage of the timeline wherever I can.",
      },
      {
        q: "What isn't included in your service?",
        a: [
          "For Australia exports, these are arranged separately:",
          "• The blood draw for the rabies antibody (RNATT) test, which is done by another OV66 vet — it can be the same day as your second ID check",
          "• Your Australian import permit",
          "• Quarantine bookings and fees in Australia",
          "• Flights, transport and your pet transport agent's services",
          "",
          "I'll certify the lab results, complete the declarations and Export Health Certificate, and support you at each stage wherever I can.",
        ].join("\n"),
      },
    ],
  },
  {
    title: "Booking and visits",
    faqs: [
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
        q: "What's your cancellation policy?",
        a: "Please give at least 72 hours' notice to cancel or rearrange. With more than 72 hours' notice, you can rearrange for free or cancel and have your £50 deposit refunded in full. With less than 72 hours' notice, or if nobody is home when I arrive, the deposit isn't refunded.",
        link: { href: "/terms-and-conditions.pdf", label: "Read the full terms" },
      },
      {
        q: "What happens if my pet can't be certified on the day?",
        a: "If I can't issue a certificate at the visit — for example because the microchip can't be read, the rabies vaccination isn't valid or documents are missing — you pay a £100 visit fee instead of the full fee. If I come back once the problem is fixed, the full fee for that service applies to the return visit.",
      },
      {
        q: "Do you offer evening and weekend visits?",
        a: "Yes — I offer flexible evening and weekend appointments, subject to availability. Choose the dates that suit you on the enquiry form.",
      },
      {
        q: "Do you see cats, ferrets and nervous pets?",
        a: "Yes — I see dogs, cats and ferrets. Home visits are often much calmer for nervous pets than a trip to a clinic. If your pet is very anxious or can be difficult to handle, please mention it in your enquiry so I can plan the visit.",
      },
      {
        q: "Can I book a fit-to-fly certificate on its own?",
        a: "Yes. Fit-to-fly certificates are £100 and can be booked on their own or combined with an AHC or export visit.",
        link: { to: "/services", label: "See services" },
      },
    ],
  },
];

const linkCls =
  "mt-4 inline-flex rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary";

function Faqs() {
  return (
    <SiteLayout>
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQs</p>
          <h1 className="mt-3 text-3xl font-medium md:text-4xl">Common questions</h1>
          {groups.map((g) => (
            <div key={g.title} className="mt-12 first-of-type:mt-10">
              <h2 className="text-xl font-semibold">{g.title}</h2>
              <div className="mt-4 space-y-4">
                {g.faqs.map((f) => (
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
                    {f.link &&
                      ("href" in f.link ? (
                        <a
                          href={f.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkCls}
                        >
                          {f.link.label}
                        </a>
                      ) : (
                        <Link to={f.link.to} className={linkCls}>
                          {f.link.label}
                        </Link>
                      ))}
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
