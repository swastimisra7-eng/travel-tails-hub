import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, PawPrint, X } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About me" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact us" },
] as const;

// Every "Book a visit" button goes to the enquiry form on the Contact page.
function BookLink({ className, children }: { className: string; children: ReactNode }) {
  return (
    <Link to="/contact" className={className}>
      {children}
    </Link>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border/60 backdrop-blur ${
        menuOpen ? "bg-background" : "bg-background/85"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Pet Permit home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" />
          </span>
          <span
            className="whitespace-nowrap font-semibold tracking-tight"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Pet Permit
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <BookLink className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-5">
            Book a visit
          </BookLink>
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
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function MobileBookBar() {
  const [contactVisible, setContactVisible] = useState(false);

  // Hide the bar while the enquiry form itself is on screen (homepage only).
  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(([entry]) =>
      setContactVisible(entry?.isIntersecting ?? false),
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/90 px-6 py-3 backdrop-blur transition-transform lg:hidden ${
        contactVisible ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <BookLink className="block w-full rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground transition-opacity hover:opacity-90">
        Book a visit
      </BookLink>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background pb-20 text-foreground lg:pb-0">
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileBookBar />
    </div>
  );
}
