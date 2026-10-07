import { useState, type FormEvent } from "react";
import { AvailabilityPicker } from "@/components/AvailabilityPicker";

const SPECIES = ["Dog", "Cat", "Ferret"];
// Up to five pets can travel on one AHC.
const MAX_PETS = 5;
// Netlify Forms: one file per field, 8 MB per submission in total.
const MAX_FILES = 3;
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
const ACCEPTED_FILES = ".pdf,.jpg,.jpeg,.png,.heic,.doc,.docx";

const inputCls =
  "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";
const labelCls = "block text-sm font-semibold text-foreground";

// Visual marker for compulsory fields; the inputs themselves carry `required`.
function Req() {
  return (
    <span className="text-destructive" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

export function EnquiryForm() {
  const [travelDate, setTravelDate] = useState("");
  const [availability, setAvailability] = useState("");
  const [pets, setPets] = useState<string[]>([""]);
  const [fileSlots, setFileSlots] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const petsSummary = pets.filter(Boolean).join(", ");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    fd.set("form-name", "enquiry");
    fd.set("availability", availability);
    fd.set("pets", petsSummary);
    const uploadBytes = [...fd.values()].reduce(
      (sum, v) => sum + (v instanceof File ? v.size : 0),
      0,
    );
    if (uploadBytes > MAX_UPLOAD_BYTES) {
      setStatus("idle");
      setError(
        "Your files add up to more than 8 MB. Please remove one, or ask your vet to email them to me.",
      );
      return;
    }
    try {
      // Sent as multipart so uploaded files come through; the browser sets the Content-Type.
      const res = await fetch("/__forms.html", { method: "POST", body: fd });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "Sorry, something went wrong sending your enquiry. Please try again or email me directly at",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-card p-10 text-center text-foreground">
        <p className="text-xl font-semibold">Thanks — I will be in touch within 48 hours.</p>
      </div>
    );
  }

  return (
    <form
      name="enquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      encType="multipart/form-data"
      onSubmit={onSubmit}
      className="rounded-2xl bg-card p-6 text-left text-foreground md:p-8"
    >
      <input type="hidden" name="form-name" value="enquiry" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <input type="hidden" name="availability" value={availability} />
      <input type="hidden" name="pets" value={petsSummary} />

      <p className="mb-5 text-xs text-muted-foreground">
        <span className="text-destructive">*</span> Required
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className={labelCls}>
            What do you need?
            <Req />
            <select name="service" required defaultValue="" className={inputCls}>
              <option value="" disabled>
                Select a service
              </option>
              <option>AHC for travel to the EU</option>
              <option>Australia export</option>
              <option>Other</option>
            </select>
          </label>
          <label className="mt-3 flex cursor-pointer items-center gap-2.5 text-sm">
            <input
              type="checkbox"
              name="fit_to_fly"
              value="Yes"
              className="h-4 w-4 accent-primary"
            />
            Select if you require a fit-to-fly certificate
          </label>
        </div>
        <label className={labelCls}>
          Your name
          <Req />
          <input name="name" required className={inputCls} autoComplete="name" />
        </label>
        <label className={labelCls}>
          Email address
          <Req />
          <input name="email" type="email" required className={inputCls} autoComplete="email" />
        </label>
        <label className={labelCls}>
          Postcode
          <Req />
          <input
            name="postcode"
            required
            maxLength={10}
            className={`${inputCls} uppercase`}
            autoComplete="postal-code"
          />
        </label>
        <label className={labelCls}>
          Where are you travelling?
          <Req />
          <input
            name="destination"
            required
            placeholder="e.g. France, Spain, Australia"
            className={inputCls}
          />
        </label>
        <label className={labelCls}>
          Travel date (approx.)
          <Req />
          <input
            name="travel_date"
            type="date"
            required
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className={inputCls}
          />
        </label>
        <fieldset>
          <legend className={labelCls}>
            Your pet(s)
            <Req />
          </legend>
          <div className="space-y-2">
            {pets.map((species, i) => (
              <div key={i} className="flex items-center gap-2">
                <select
                  aria-label={`Pet ${i + 1}`}
                  required
                  value={species}
                  onChange={(e) =>
                    setPets((prev) => prev.map((p, j) => (j === i ? e.target.value : p)))
                  }
                  className={inputCls}
                >
                  <option value="">Select a pet</option>
                  {SPECIES.map((sp) => (
                    <option key={sp}>{sp}</option>
                  ))}
                </select>
                {pets.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setPets((prev) => prev.filter((_, j) => j !== i))}
                    aria-label={`Remove pet ${i + 1}`}
                    className="mt-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-input bg-background text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
          {pets.length < MAX_PETS && (
            <button
              type="button"
              onClick={() => setPets((prev) => [...prev, ""])}
              className="mt-3 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              + Add pet
            </button>
          )}
        </fieldset>
      </div>

      <fieldset className="mt-6">
        <legend className={labelCls}>
          Preferred availability for the home visit{" "}
          <span className="font-normal text-muted-foreground">(add as many dates as you like)</span>
        </legend>
        <AvailabilityPicker travelDate={travelDate} onChange={setAvailability} />
      </fieldset>

      <label className={`${labelCls} mt-6`}>
        Anything else?{" "}
        <span className="font-normal text-muted-foreground">(the more details, the better)</span>
        <textarea name="message" rows={4} className={inputCls} />
      </label>

      <fieldset className="mt-6">
        <legend className={labelCls}>
          Clinical notes from your vet{" "}
          <span className="font-normal text-muted-foreground">
            (optional — PDF, photo or Word, up to 8 MB in total)
          </span>
        </legend>
        <div className="mt-2 space-y-2">
          {Array.from({ length: fileSlots }, (_, i) => (
            <input
              key={i}
              type="file"
              name={`clinical_notes_${i + 1}`}
              accept={ACCEPTED_FILES}
              aria-label={`Clinical notes file ${i + 1}`}
              className="block w-full rounded-xl border border-input bg-background text-sm text-muted-foreground file:mr-3 file:border-0 file:border-r file:border-input file:bg-secondary file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-foreground hover:file:bg-secondary/70"
            />
          ))}
        </div>
        {fileSlots < MAX_FILES && (
          <button
            type="button"
            onClick={() => setFileSlots((n) => n + 1)}
            className="mt-3 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            + Add another file
          </button>
        )}
        <p className="mt-3 text-xs text-muted-foreground">
          Unable to upload? Ask your vet to email the notes directly to{" "}
          <a
            href="mailto:swasti@petpermit.co.uk"
            className="font-medium text-primary underline underline-offset-2"
          >
            swasti@petpermit.co.uk
          </a>
          .
        </p>
      </fieldset>

      {error && (
        <p className="mt-4 text-sm font-medium text-destructive" role="alert">
          {error}
          {status === "error" && (
            <>
              {" "}
              <a href="mailto:swasti@petpermit.co.uk" className="underline underline-offset-2">
                swasti@petpermit.co.uk
              </a>
              .
            </>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 md:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
