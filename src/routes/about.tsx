import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Home, ShieldCheck } from "lucide-react";
import swastiPhoto from "@/assets/swasti-misra.jpg";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me | Pet Permit" },
      {
        name: "description",
        content:
          "Meet Dr Swasti Misra, the RCVS-registered, APHA-authorised vet behind Pet Permit's home-visit pet travel certification in London.",
      },
    ],
  }),
  component: About,
});

const badges = [
  { icon: ShieldCheck, label: "APHA Authorised. RCVS Registered." },
  { icon: Home, label: "Home visits only" },
  { icon: HeartHandshake, label: "One vet, start to finish" },
];

function About() {
  return (
    <SiteLayout>
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-[2fr_3fr]">
            <img
              src={swastiPhoto}
              alt="Dr Swasti Misra, the vet behind Pet Permit"
              width={800}
              height={800}
              className="aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-lg"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                About me
              </p>
              <h1 className="mt-3 text-3xl font-medium md:text-4xl">
                Hi, I'm Swasti — the vet behind Pet Permit
              </h1>
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
                {badges.map((c) => (
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
    </SiteLayout>
  );
}
