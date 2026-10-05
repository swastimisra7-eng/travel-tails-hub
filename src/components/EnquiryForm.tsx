import { useState, type FormEvent } from "react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIMES = ["AM", "PM"];

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
  const [slots, setSlots] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const ordered = DAYS.flatMap((d) => TIMES.map((t) => `${d} ${t}`)).filter((s) =>
    slots.includes(s),
  );
  const availability = ordered.join(", ");

  const toggle = (slot: string) =>
    setSlots((prev) => (prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    fd.set("form-name", "enquiry");
    fd.set("availability", availability);
    const body = new URLSearchParams();
    fd.forEach((v, k) => body.append(k, String(v)));
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
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
          <input name="travel_date" type="date" required className={inputCls} />
        </label>
        <label className={labelCls}>
          Your pet(s)
          <input name="pets" placeholder="e.g. Dog – Labrador, 4 yrs" className={inputCls} />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className={labelCls}>
          Preferred availability for the home visit{" "}
          <span className="font-normal text-muted-foreground">(select as many as you like)</span>
        </legend>
        <div className="mt-3 grid max-w-sm grid-cols-[3rem_1fr_1fr] gap-2 text-sm">
          <span />
          {TIMES.map((t) => (
            <span key={t} className="text-center text-xs font-semibold text-muted-foreground">
              {t}
            </span>
          ))}
          {DAYS.map((d) => (
            <div key={d} className="contents">
              <span className="self-center font-medium">{d}</span>
              {TIMES.map((t) => {
                const slot = `${d} ${t}`;
                const on = slots.includes(slot);
                return (
                  <label
                    key={slot}
                    className={`flex cursor-pointer items-center justify-center rounded-lg border py-2 text-xs font-semibold transition-colors ${
                      on
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input bg-background hover:bg-secondary"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={on}
                      onChange={() => toggle(slot)}
                      aria-label={slot}
                    />
                    {t}
                  </label>
                );
              })}
            </div>
          ))}
        </div>
      </fieldset>

      <label className={`${labelCls} mt-6`}>
        Anything else?{" "}
        <span className="font-normal text-muted-foreground">(the more details, the better)</span>
        <textarea name="message" rows={4} className={inputCls} />
      </label>

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
