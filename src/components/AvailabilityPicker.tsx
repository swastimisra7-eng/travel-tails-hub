import { useEffect, useMemo, useState } from "react";
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, X } from "lucide-react";

// An AHC must be issued within 10 days of travel, counting the travel day itself:
// travelling on the 30th means visits from the 21st up to and including the 30th.
const WINDOW_DAYS = 10;
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

type Slot = "AM" | "PM" | "Any time";
type Picked = Record<string, Slot[]>;

const pad = (n: number) => String(n).padStart(2, "0");
const toKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromKey = (k: string) => {
  const [y, m, d] = k.split("-").map(Number);
  return new Date(y!, m! - 1, d!);
};
const startOfToday = () => {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
};
const label = (d: Date) =>
  d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });

export function AvailabilityPicker({
  travelDate,
  onChange,
}: {
  travelDate: string;
  onChange: (summary: string) => void;
}) {
  const [picked, setPicked] = useState<Picked>({});
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<Date | null>(null);

  // Selectable window: max(today, travel − 9 days) … travel date (10 days in all).
  const range = useMemo(() => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(travelDate)) return null;
    const end = fromKey(travelDate);
    const start = new Date(end);
    start.setDate(start.getDate() - (WINDOW_DAYS - 1));
    const today = startOfToday();
    const from = start < today ? today : start;
    return from > end ? null : { from, to: end };
  }, [travelDate]);

  // Drop picked dates that fall outside a new window, and jump the calendar to it.
  useEffect(() => {
    if (!range) {
      setPicked({});
      setOpen(false);
      return;
    }
    setPicked((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([k]) => {
          const d = fromKey(k);
          return d >= range.from && d <= range.to;
        }),
      ),
    );
    setView(new Date(range.from.getFullYear(), range.from.getMonth(), 1));
  }, [range]);

  const keys = Object.keys(picked).sort();

  useEffect(() => {
    onChange(keys.map((k) => `${label(fromKey(k))}: ${picked[k]!.join(" & ")}`).join("; "));
  }, [picked]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleDate = (k: string) => {
    if (picked[k]) {
      setPicked((prev) => Object.fromEntries(Object.entries(prev).filter(([key]) => key !== k)));
    } else {
      setPicked((prev) => ({ ...prev, [k]: ["Any time"] }));
      setOpen(false);
    }
  };

  const toggleSlot = (k: string, slot: Slot) =>
    setPicked((prev) => {
      const cur = prev[k] ?? [];
      let next: Slot[];
      if (slot === "Any time") next = ["Any time"];
      else {
        const withoutAny = cur.filter((s) => s !== "Any time");
        next = withoutAny.includes(slot)
          ? withoutAny.filter((s) => s !== slot)
          : [...withoutAny, slot].sort();
      }
      return { ...prev, [k]: next.length ? next : ["Any time"] };
    });

  if (!range) {
    return (
      <p className="mt-2 rounded-xl border border-dashed border-input bg-background px-4 py-3 text-sm text-muted-foreground">
        {travelDate
          ? "Your travel date is in the past — please check it."
          : "Enter your travel date first, then pick dates within the 10 days before you travel."}
      </p>
    );
  }

  const month = view ?? new Date(range.from.getFullYear(), range.from.getMonth(), 1);
  const firstMonth = new Date(range.from.getFullYear(), range.from.getMonth(), 1);
  const lastMonth = new Date(range.to.getFullYear(), range.to.getMonth(), 1);
  const lead = (month.getDay() + 6) % 7;
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();

  const pillCls = (on: boolean) =>
    `rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
      on
        ? "border-primary bg-primary text-primary-foreground"
        : "border-input bg-background hover:bg-secondary"
    }`;

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl border border-input bg-background px-4 py-2.5 text-sm transition-colors hover:bg-secondary"
      >
        <span className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-primary" />
          {keys.length ? "Add another date" : "Add a date"}
        </span>
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {open && (
        <div className="mt-2 rounded-xl border border-input bg-background p-3">
          <div className="mb-2 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous month"
              disabled={month <= firstMonth}
              onClick={() => setView(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-secondary disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm font-semibold">
              {month.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
            </span>
            <button
              type="button"
              aria-label="Next month"
              disabled={month >= lastMonth}
              onClick={() => setView(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-secondary disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted-foreground">
            {WEEKDAYS.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-7 gap-1">
            {Array.from({ length: lead }, (_, i) => (
              <span key={`lead-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const d = new Date(month.getFullYear(), month.getMonth(), i + 1);
              const k = toKey(d);
              const allowed = d >= range.from && d <= range.to;
              const on = Boolean(picked[k]);
              return (
                <button
                  key={k}
                  type="button"
                  disabled={!allowed}
                  onClick={() => toggleDate(k)}
                  aria-pressed={on}
                  aria-label={label(d)}
                  className={`h-9 rounded-lg text-sm transition-colors ${
                    on
                      ? "bg-primary font-semibold text-primary-foreground"
                      : allowed
                        ? "font-medium hover:bg-secondary"
                        : "text-muted-foreground/40"
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Available: {label(range.from)} – {label(range.to)}
          </p>
        </div>
      )}

      {keys.length > 0 && (
        <ul className="mt-3 divide-y divide-border rounded-xl border border-input bg-background">
          {keys.map((k) => (
            <li key={k} className="flex flex-wrap items-center gap-2 px-4 py-2.5">
              <span className="min-w-[7rem] flex-1 text-sm font-medium">{label(fromKey(k))}</span>
              {(["AM", "PM", "Any time"] as Slot[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={picked[k]!.includes(s)}
                  onClick={() => toggleSlot(k, s)}
                  className={pillCls(picked[k]!.includes(s))}
                >
                  {s}
                </button>
              ))}
              <button
                type="button"
                aria-label={`Remove ${label(fromKey(k))}`}
                onClick={() => toggleDate(k)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
