import { Link } from "@tanstack/react-router";
import { Linkedin, PawPrint, ShieldCheck } from "lucide-react";

const linkCls =
  "inline-flex items-center gap-1.5 whitespace-nowrap font-medium transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
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
            className={linkCls}
          >
            <ShieldCheck className="h-4 w-4" /> RCVS Find a Vet
          </a>
          <a
            href="https://www.linkedin.com/in/misraswasti/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <Link to="/privacy-policy" className={linkCls}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
