import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Pet Permit" },
      {
        name: "description",
        content:
          "Book a home visit for your pet's travel certificate. Tell us where you're headed and we'll reply within 48 hours.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
          <h1 className="text-3xl font-medium md:text-4xl">
            Tell me where you're headed — I'll come to you
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Tell me a little about your trip and when you're free, and I will get back to you within
            48 hours with a personalised document plan.
          </p>
          <div className="mx-auto mt-8 max-w-3xl">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
