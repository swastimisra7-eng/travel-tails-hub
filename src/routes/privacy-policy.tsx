import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Pet Permit" },
      {
        name: "description",
        content:
          "How Pet Permit collects, uses, shares and protects your personal information, and your rights under UK data protection law.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

const LAST_UPDATED = "5 October 2026";

const lawfulBases = [
  [
    "Replying to your enquiry and preparing a document plan",
    "Steps taken at your request before a contract",
  ],
  ["Arranging and carrying out home visits", "Performance of a contract"],
  [
    "Completing and issuing travel and export certificates",
    "Performance of a contract, and legal obligation",
  ],
  ["Sending certification records to APHA and other authorities", "Legal obligation"],
  ["Keeping records of certificates issued", "Legal obligation"],
  ["Invoicing and keeping business accounts", "Legal obligation"],
  ["Answering follow-up questions about a past trip", "Legitimate interests"],
];

const recipients: { who: string; what: string; why: string; notice: string; href?: string }[] = [
  {
    who: "Animal and Plant Health Agency (APHA)",
    what: "Certification records, your details and your pet's details",
    why: "Legal requirement for Official Veterinarians",
    notice: "APHA personal information charter",
    href: "https://www.gov.uk/government/organisations/animal-and-plant-health-agency/about/personal-information-charter",
  },
  {
    who: "OVForm (Hamerkop Ltd)",
    what: "Your details and your pet's details needed for the certificate",
    why: "Software we use to prepare export paperwork",
    notice: "OVForm privacy policy",
    href: "https://www.ovform.com/privacy-policy",
  },
  {
    who: "Australian Department of Agriculture, Fisheries and Forestry (DAFF)",
    what: "Identity declarations and export documents, Australia exports only",
    why: "Required for import into Australia",
    notice: "DAFF privacy",
    href: "https://www.agriculture.gov.au/about/commitment/privacy",
  },
  {
    who: "Other Official Veterinarians",
    what: "Your pet's identity details",
    why: "Australia requires a second, independent identity check",
    notice: "Their own practice's notice",
  },
  {
    who: "Your pet transport agent",
    what: "Travel documents and dates",
    why: "Only when you ask us to liaise with them",
    notice: "The agent's own notice",
  },
  {
    who: "Google Workspace",
    what: "Emails and documents",
    why: "Our business email and file storage",
    notice: "Google Workspace data processing terms",
    href: "https://cloud.google.com/terms/data-processing-addendum/",
  },
  {
    who: "Netlify",
    what: "Website enquiry form submissions",
    why: "Hosts the website and receives the enquiry form",
    notice: "Netlify privacy policy",
    href: "https://www.netlify.com/privacy/",
  },
];

const retention = [
  ["Enquiries that don't go ahead", "12 months from your last contact"],
  [
    "Certification and visit records",
    "3 years after the certificate is issued or your pet travels, whichever is later, in line with APHA guidance",
  ],
  ["Invoices and accounts", "7 years, as required for tax records"],
];

const extLink =
  "font-medium text-primary underline underline-offset-2 transition-opacity hover:opacity-80";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Table({
  head,
  rows,
  wide = false,
}: {
  head: string[];
  rows: ReactNode[][];
  wide?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className={`w-full text-left text-sm ${wide ? "min-w-[40rem]" : ""}`}>
        <thead className="bg-secondary/60 text-foreground">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border align-top">
              {r.map((c, j) => (
                <td key={j} className="px-4 py-3">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h1 className="text-4xl font-medium md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <Section title="Who we are">
          <p>
            Pet Permit is run by Dr Swasti Misra, an RCVS-registered veterinary surgeon and
            APHA-authorised Official Veterinarian. They are the data controller for the personal
            information described in this policy.
          </p>
          <p>
            This policy explains what information we collect when you contact us or use our
            services, why we need it, who we share it with, and your rights.
          </p>
          <p>
            <span className="font-semibold text-foreground">Contact:</span>{" "}
            <a href="mailto:swasti@petpermit.co.uk" className={extLink}>
              swasti@petpermit.co.uk
            </a>{" "}
            · Tandem House, 29 Track Street, London E17 7FQ
          </p>
          <p>
            <span className="font-semibold text-foreground">ICO registration:</span> ZC257116
            (registered as Dr Swasti Misra)
          </p>
        </Section>

        <Section title="What information we collect">
          <p>
            We only collect what we need to plan your pet's travel and issue the right documents.
          </p>
          <p className="font-semibold text-foreground">
            When you send an enquiry through the website:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Your name and email address</li>
            <li>Your postcode</li>
            <li>The service you need, your destination and approximate travel date</li>
            <li>Basic details about your pet(s), such as species, breed and age</li>
            <li>Your preferred times for a home visit</li>
            <li>Anything else you choose to tell us in the message box</li>
          </ul>
          <p className="font-semibold text-foreground">
            When we carry out a visit or issue a certificate:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Your full name, home address and phone number</li>
            <li>Your pet's microchip number, description, vaccination history and test results</li>
            <li>Travel details, such as dates, routes and points of entry</li>
            <li>Details of anyone travelling with your pet on your behalf, where relevant</li>
            <li>Details of your pet transport agent, where you use one</li>
          </ul>
          <p>We do not collect payment card details through the website.</p>
        </Section>

        <Section title="How we use your information">
          <p>
            UK data protection law requires a lawful basis for each use of your information. These
            are ours:
          </p>
          <Table head={["What we use it for", "Lawful basis"]} rows={lawfulBases} />
          <p>We do not use your information for marketing, and we never sell it.</p>
        </Section>

        <Section title="Who we share it with">
          <p>
            We only share your information where the law requires it, where it's needed to issue
            your documents, or with services that help us run the business. Each organisation below
            handles your information under its own privacy notice.
          </p>
          <Table
            head={["Who", "What they receive", "Why", "Their privacy notice"]}
            wide
            rows={recipients.map((r) => [
              r.who,
              r.what,
              r.why,
              r.href ? (
                <a href={r.href} target="_blank" rel="noopener noreferrer" className={extLink}>
                  {r.notice}
                </a>
              ) : (
                r.notice
              ),
            ])}
          />
          <p>We may also share information if required by law, for example with the police.</p>
        </Section>

        <Section title="Information sent outside the UK">
          <p>Some of your information may be processed outside the UK:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <span className="font-semibold text-foreground">Australia exports:</span> documents go
              to the Australian authorities, because your pet cannot enter Australia without them.
            </li>
            <li>
              <span className="font-semibold text-foreground">Google and Netlify:</span> both may
              store data outside the UK, including in the United States. Their terms include
              safeguards approved under UK law, such as standard contractual clauses.
            </li>
          </ul>
          <p>For EU travel, your certificate travels with you and is checked at the EU border.</p>
        </Section>

        <Section title="How long we keep it">
          <Table head={["Information", "How long"]} rows={retention} />
          <p>After that, we delete it securely.</p>
        </Section>

        <Section title="Your rights">
          <p>You have the right to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Ask for a copy of the information we hold about you</li>
            <li>Ask us to correct anything that's wrong</li>
            <li>Ask us to delete your information, unless the law requires us to keep it</li>
            <li>Object to, or ask us to limit, how we use it</li>
            <li>Ask for your information in a format you can take elsewhere</li>
          </ul>
          <p>
            To use any of these rights, email{" "}
            <a href="mailto:swasti@petpermit.co.uk" className={extLink}>
              swasti@petpermit.co.uk
            </a>
            . We'll reply within one month.
          </p>
          <p>
            If you're unhappy with how we've handled your information, please tell us first. Email
            us at{" "}
            <a href="mailto:swasti@petpermit.co.uk" className={extLink}>
              swasti@petpermit.co.uk
            </a>{" "}
            and we'll reply within one month. You can also complain to the{" "}
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
              className={extLink}
            >
              Information Commissioner's Office (ICO)
            </a>
            .
          </p>
        </Section>

        <Section title="Website data and cookies">
          <p>
            This website does not use advertising or tracking cookies, and we don't use analytics.
          </p>
          <p>
            The site loads its fonts from Google Fonts, so your browser shares your IP address with
            Google when a page loads. Netlify, which hosts the site, keeps basic server logs for
            security. See the Google and Netlify privacy notices linked above.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We'll update this policy if the way we handle your information changes. The date at the
            top shows when it was last updated.
          </p>
          <p>
            Questions? Email{" "}
            <a href="mailto:swasti@petpermit.co.uk" className={extLink}>
              swasti@petpermit.co.uk
            </a>
            .
          </p>
        </Section>
      </main>
    </SiteLayout>
  );
}
