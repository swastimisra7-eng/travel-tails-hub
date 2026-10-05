# AI search visibility plan

**Started:** 6 October 2026 · **Owner:** Swasti · **Status:** Awaiting review — no website changes made yet

How well petpermit.co.uk can be found, understood and quoted by AI search (Google AI Overviews and
AI Mode, ChatGPT search, Perplexity) and by ordinary Google search.

## What matters most (read this first)

Google's own guidance is that there are **no special requirements** for AI Overviews or AI Mode:
the same things that make a page good for normal search make it good for AI search ([Google: AI
features and your website](https://developers.google.com/search/docs/appearance/ai-features)). So
this plan is mostly ordinary good practice, ranked by real impact:

1. **Pages that work and say clearly who, what, where and how much** (items 1, 5, 6, 7, 9).
2. **Off-site trust signals** — a Google Business Profile and reviews (item 11). For a local service,
   this often matters more than anything on the website.
3. **Technical tidy-ups** that remove confusion (items 2, 3, 4).
4. **Nice-to-haves** with small, uncertain benefit (item 10).

## Status

| # | Item | Impact | Effort | Needs Swasti? | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Old homepage links (`/#faqs` etc.) land in the wrong place | High | Small | No | Proposed |
| 2 | No canonical URL on any page | Medium | Small | No | Proposed |
| 3 | Sharing tags are generic and there's no preview image | Low–Medium | Small | Choose image | Proposed |
| 4 | No structured data (machine-readable facts) | Medium | Medium | Yes — address | Proposed |
| 5 | Homepage is very thin (~108 words) | High | Small | Approve wording | Proposed |
| 6 | "London" missing from page titles and descriptions | High | Small | Approve wording | Proposed |
| 7 | FAQs cover too few of the questions people ask | High | Medium | Approve answers | Proposed |
| 8 | Facts have no sources or "last reviewed" date | Medium | Small | No | Proposed |
| 9 | Australia page still promises full timeline planning | Medium | Small | Approve wording | Proposed |
| 10 | No `llms.txt` file | Low | Small | No | Proposed |
| 11 | Off-site: Google Business Profile, reviews, listings | High | Medium | Yes — her accounts | Proposed |

**Suggested order:** Phase 1 (items 1, 2, 3, 6) → Phase 2 (4) → Phase 3 (5, 7, 8, 9) → Phase 4 (11,
ongoing) → Phase 5 (10, optional).

---

## 1. Old homepage links land in the wrong place

**What we found.** Google's AI results are already sending people to
`https://petpermit.co.uk/?shem=aimgspe,#faqs`. That `#faqs` points at the FAQ section that used to
be on the homepage. Since the site was split into pages (5 Oct 2026), the homepage has no `#faqs`
section (checked on the live page), so visitors land on the hero with no sign of the answer they
were promised. The same applies to old links ending `#pricing`, `#about`, `#services`, `#process`
and `#contact`.

**Why it matters.** This is a real visitor hitting a dead end today, from an AI answer that already
recommends the site. Google will eventually re-crawl and update its links, but old links also live
on in people's messages and bookmarks.

**Why it needs a browser-side fix.** The part after `#` is never sent to the server, so Netlify
redirects can't see it. The homepage itself has to spot the old `#…` and move the visitor on.

**Plan.**
1. On the homepage only, when the page loads with one of the old `#` endings, send the visitor to
   the matching page, replacing the history entry so the Back button still works normally:

   | Old link | Goes to |
   | --- | --- |
   | `/#faqs` | `/faqs` |
   | `/#pricing` | `/pricing` |
   | `/#about` | `/about` |
   | `/#services`, `/#process` | `/services` |
   | `/#contact` | `/contact` |
2. Leave any other query text (like `?shem=…`) alone — it doesn't affect the page.

**How we'll check.** Open each old link on the preview and the live site and confirm it lands at the
top of the right page, and that Back returns to wherever the visitor came from.

---

## 2. No canonical URL on any page

**What we found.** None of the 8 pages has a `<link rel="canonical">` tag (checked on the live
site). Links with tracking text — like the `?shem=aimgspe` above — technically count as different
addresses for the same page.

**Why it matters.** A canonical tag tells search engines "this is the one true address for this
page", so all signals are combined on `https://petpermit.co.uk/pricing` rather than split across
variants. Low risk, small benefit, standard practice.

**Plan.**
1. Give each page a canonical tag with its clean address (e.g. `https://petpermit.co.uk/pricing`,
   homepage `https://petpermit.co.uk/`), set in that page's own settings.
2. Add a matching `og:url` tag at the same time (see item 3).

**How we'll check.** View the live page source of all 8 pages; each has exactly one canonical tag
pointing at itself. Later, in Search Console → URL inspection, "Google-selected canonical" should
match.

---

## 3. Sharing tags are generic and there's no preview image

**What we found.** Every page except the homepage and Australia page inherits the site-wide sharing
title "Pet Permit" (e.g. the live Pricing page's `og:title` is just "Pet Permit"). The site
declares a large-image card for X/Twitter but has **no image** at all, so shared links show no
picture on WhatsApp, LinkedIn, Facebook or X.

**Why it matters.** Mostly for people sharing the site, but link previews are also read by some AI
and chat tools. A clear title and photo per page makes shared links look trustworthy.

**Plan.**
1. Give each page its own sharing title and description (matching its normal title/description).
2. Create one 1200 × 630 share image — suggested: the hero dog-and-cat photo with the Pet Permit
   paw logo and "Pet travel certificates · Home visits across London". Add it site-wide as
   `og:image` and `twitter:image` with a short description.

**Decision needed.** Use the hero photo, Swasti's photo, or a plain green card with the logo?

**How we'll check.** Paste each page link into a WhatsApp chat and the LinkedIn Post Inspector and
confirm the right title and image appear.

---

## 4. No structured data (machine-readable facts)

**What we found.** No page has structured data (JSON-LD). Search engines and AI tools have to infer
everything — the business name, vet, area, services and prices — from page text.

**Why it matters (honestly).** Google says structured data is **not required** for AI features. Its
benefit is helping search engines confidently connect facts into one "entity": *Pet Permit is a
vet service in London, run by Dr Swasti Misra (RVC 2020, RCVS-registered), offering AHCs from
£185.* Other AI tools (ChatGPT, Perplexity) also read it. Two caveats:
- Google stopped showing FAQ rich results for most sites in 2023 — only "well-known, authoritative
  government and health websites" get them ([Google](https://developers.google.com/search/docs/appearance/structured-data/faqpage)).
  FAQ markup is still worth adding for other AI tools, but expect no visual change in Google.
- Google's local business markup **requires a physical address**
  ([Google](https://developers.google.com/search/docs/appearance/structured-data/local-business)).

**Plan.** Add JSON-LD to each page, using only facts already on the site:
1. **Site-wide:** `VeterinaryCare` (a schema.org type for vet services, a kind of
   `MedicalOrganization`) — name, URL, logo, email, area served (London), `founder` → Dr Swasti
   Misra, `sameAs` → LinkedIn.
2. **About page:** `Person` — Dr Swasti Misra, job title, `alumniOf` Royal Veterinary College,
   credentials (RCVS-registered, APHA-authorised Official Veterinarian), `sameAs` LinkedIn.
3. **Services page:** one `Service` per service (AHC, Australia export, fit-to-fly).
4. **Pricing page:** `Offer` entries with GBP prices matching the page exactly.
5. **FAQs page:** `FAQPage` with the same questions and answers as the page (must match word for
   word).
6. **Every page except home:** `BreadcrumbList` (Home › Pricing, etc.).
7. Keep all of this in one shared file so prices and facts can't drift out of sync with the pages.

**Decision needed — address.** Google's local business markup needs an address. Options:
- (a) Use the trading address already published in the Privacy Policy (Tandem House, 29 Track
  Street, London E17 7FQ). Most complete; that address becomes more visible to search engines.
- (b) Leave the street address out and use only `areaServed: London`. More private; Google may not
  treat it as a full local business listing, but other AI tools still benefit.

**How we'll check.** Run every page through Google's
[Rich Results Test](https://search.google.com/test/rich-results) and the
[Schema.org validator](https://validator.schema.org/): zero errors, and every price and fact matches
the visible page.

---

## 5. Homepage is very thin

**What we found.** The live homepage has about 108 words and no subheadings. Since the split into
pages it's just the headline, one paragraph, two buttons and three feature points. It doesn't
mention prices, the area covered, or the vet's name.

**Why it matters.** The homepage is the page search engines and AI tools rely on most to answer
"what is this business?". Right now, an AI summary has very little to go on.

**Plan.** Below the hero, add a short, scannable section (target 250–350 words total for the
page) — no new design style, reusing the existing cards:
1. **"What I do"** — two sentences: who (Dr Swasti Misra, RCVS-registered, APHA-authorised OV),
   what (AHCs for EU travel, Australia export certification, fit-to-fly), where (home visits across
   East, South East and parts of North London).
2. **Three short cards** linking to Services, Pricing ("AHCs from £185") and About me.
3. **A one-line route to booking:** "Tell me where you're headed" → Contact.

**Decision needed.** Approve the final wording (I'll draft it in this plan before building).

**How we'll check.** Live homepage reaches ~250–350 words with clear subheadings; every claim
matches the other pages.

---

## 6. "London" is missing from page titles and descriptions

**What we found.** No page title mentions London. Of the 8 descriptions, only the Services, Pricing
and About ones mention London (checked live). The area is otherwise only in the hero badge and the
FAQ.

**Why it matters.** Location is central to how people search for a home-visit service ("pet travel
vet London", "AHC home visit East London"). Titles and descriptions are the strongest, simplest
place to say it.

**Plan.** Proposed titles (descriptions to match, each under ~155 characters):

| Page | Proposed title |
| --- | --- |
| Home | Pet Travel Vet in London — Home Visits for AHCs & Australia Export \| Pet Permit |
| Services | Pet Travel Certificates at Home in London — AHC, Australia, Fit-to-Fly \| Pet Permit |
| Pricing | Animal Health Certificate Prices in London \| Pet Permit |
| About me | About Dr Swasti Misra, Official Veterinarian in London \| Pet Permit |
| FAQs | Pet Travel FAQs — AHCs, Areas Covered, Australia \| Pet Permit |
| Contact us | Book a Home Visit in London \| Pet Permit |
| Australia timeline | (keep — already specific) |
| Privacy Policy | (keep) |

**Decision needed.** Approve or tweak the titles.

**How we'll check.** View source of each live page; then watch Search Console → Performance over the
following weeks for searches containing "London".

---

## 7. FAQs cover too few of the questions people ask

**What we found.** The FAQs page has 6 questions. Several common pet-travel questions aren't
answered anywhere on the site, and some answers lead with background rather than the direct answer.

**Why it matters.** AI tools answer people's exact questions by quoting pages that answer them
clearly. Each well-answered question is a chance to be quoted and linked.

**Plan.**
1. Add new questions, each opening with a one-sentence direct answer, then detail. Candidate list
   (Swasti to choose and confirm every answer before anything goes live):
   - What is an Animal Health Certificate (AHC)?
   - Can I still use my EU pet passport? *(the 22 April 2026 change)*
   - How long is an AHC valid? *(10 days to enter the EU; up to 6 months onward travel and return)*
   - What's the difference between an AHC and an Export Health Certificate?
   - Does my dog need tapeworm treatment, and for which countries?
   - Do you visit at evenings or weekends? *(hero says "Flexible evening & weekend visits")*
   - How many pets can travel on one AHC?
2. Group the questions under three headings — **EU travel**, **Australia**, **Booking & visits** —
   so people and AI can scan them.
3. Tighten existing answers so the first sentence is the answer.
4. Keep the FAQ structured data (item 4) in step with the page.

**Decision needed.** Which questions to add, and approval of every answer — these are veterinary and
legal facts, so Swasti signs them off.

**How we'll check.** Every answer's first sentence makes sense on its own; FAQ structured data
matches the page exactly.

---

## 8. Facts have no sources or "last reviewed" date

**What we found.** Key factual claims — for example "Under the EU rules that took effect on 22 April
2026, GB residents should no longer rely on EU pet passports" (Services page) and the Australia
timings — don't link to an official source, and pages don't say when the information was last
checked.

**Why it matters.** Pet travel rules change. Sources and a visible review date make the pages more
trustworthy to readers and to AI tools, which favour current, well-sourced information.

**Plan.**
1. Link the April 2026 rule change to GOV.UK:
   [New EU rules for pet travel for GB residents](https://www.gov.uk/government/news/new-eu-rules-for-pet-travel-for-gb-residents).
2. Add a short "Official guidance" line to the Australia timeline linking APHA guidance and the
   Australian Department of Agriculture (DAFF) import conditions.
3. Add "Information last reviewed: [date]" to the Services, FAQs and Australia pages.
4. Set a reminder to re-check the rules every 3 months and update the date.

**How we'll check.** Every external link opens the right official page; review dates are visible.

---

## 9. Australia page still promises full timeline planning

**What we found.** The Australia timeline's closing box still says *"Tell me your travel date — I'll
map out every deadline. I'll build a personalised timeline for your pet, coordinate with the OV66
vet who takes the blood sample…"*. The rest of the site (and the draft terms) were softened on
5 Oct 2026 to "support you at each stage wherever I can", and the terms list the blood draw and
second ID check as outside Pet Permit's service.

**Why it matters.** AI tools quote text word for word. A promise here that the terms contradict is
both a customer-expectations risk and a consistency problem.

**Plan.** Replace with:
> **Tell me your travel date — I'll help you plan ahead**
> I'll explain the key deadlines, support you at each stage wherever I can, and complete my
> certification visits at your home.

Also re-read the rest of the Australia page against the terms (pending legal review) and flag any
other mismatches.

**Decision needed.** Approve the wording.

---

## 10. No `llms.txt` file

**What we found.** `petpermit.co.uk/llms.txt` doesn't exist.

**Why it matters (honestly).** `llms.txt` is a community proposal ([llmstxt.org](https://llmstxt.org/)),
not an official standard, and Google says it doesn't need such files. Benefit is small and
uncertain; cost is tiny.

**Plan.** Add a short Markdown summary at `/llms.txt`: what Pet Permit is, who runs it, area, and
links to each page with one line each. Keep it in step with the sitemap.

---

## 11. Off-site: Google Business Profile, reviews and listings

**What we found.** No Google Business Profile or reviews were found linked to the site, and there
are no testimonials on the site.

**Why it matters.** For "near me" and local questions, Google and AI tools lean heavily on Google
Business Profiles and reviews from real customers. This is often the biggest single factor for a
local service business.

**Plan (Swasti's accounts — Claude can guide but not sign in for her).**
1. Create a **Google Business Profile** as a *service-area business*: hide the street address, set
   the service area (East London, South East London, North London), category (e.g. veterinarian or
   veterinary service), website, hours, services and prices.
2. After each visit, send customers a short link asking for a Google review.
3. Once there are a few reviews, add a short testimonials section to the site (with permission).
4. Make the name, website and one-line description identical on LinkedIn and any directories
   (e.g. Yell, Bark), and check the RCVS register entry is current.

**How we'll check.** Profile verified; appears for "pet travel vet London" in Google Maps; review
count growing.

---

## Decisions needed from Swasti

1. **Item 3:** share image — hero photo, your photo, or plain green logo card?
2. **Item 4:** structured data address — (a) publish Tandem House address, or (b) area only?
3. **Item 5:** happy for me to draft the homepage "What I do" section here for review?
4. **Item 6:** approve or tweak the proposed page titles.
5. **Item 7:** which new FAQs to add (answers to be approved individually).
6. **Item 9:** approve the replacement Australia wording.
7. **Order:** happy with Phase 1 (items 1, 2, 3, 6) going first?

## Change log

| Date | Change |
| --- | --- |
| 6 Oct 2026 | Plan created from the AI search audit of the live site. No website changes yet. |
