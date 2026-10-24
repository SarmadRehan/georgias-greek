"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { catering, contactOptions, eventTypes, menuInterests } from "@/data/georgias";

import { SectionHeading } from "./SectionHeading";
import { FORM_FIRST_FIELD_ID, FORM_SECTION_ID, useSite } from "./SiteProvider";

const fieldClass =
  "mt-2 block w-full rounded-xl border-2 border-navy/15 bg-white px-4 py-3 text-base text-navy placeholder:text-slate/70 focus:border-aegean focus:outline-none focus:ring-4 focus:ring-sky/40";
const labelClass = "font-bold text-navy";
const choiceClass =
  "flex cursor-pointer items-center gap-2.5 rounded-xl border-2 border-navy/15 bg-white px-4 py-3 font-semibold text-navy has-[:checked]:border-aegean has-[:checked]:bg-sky-soft has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-sky/50";

/** Today's date in Seattle as YYYY-MM-DD, so the date picker never offers a past day (the visitor may be anywhere). */
function seattleToday(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles" }).format(new Date());
}

/**
 * Catering and wedding inquiry, the page's main feature. The form has no action and makes no network
 * request: submitting only opens the "this is a demo" panel, and nothing is kept once the page closes.
 */
export function CateringSection() {
  const { openPanel } = useSite();
  // Set after mount: the static build has no "today".
  const [minDate, setMinDate] = useState<string>();
  useEffect(() => setMinDate(seattleToday()), []);

  return (
    <section id={FORM_SECTION_ID} aria-labelledby="catering-title" className="bg-sky-soft py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="catering-title"
          eyebrow="Catering & weddings"
          title="Bring Georgia's to Your Event"
          intro={`${catering.line} Weddings, corporate events, parties and brewery nights: tell us about yours.`}
        />

        <ul className="mt-10 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
          {catering.photos.map((photo) => (
            <li key={photo.caption}>
              <figure className="overflow-hidden rounded-2xl bg-white lift sm:rounded-3xl">
                <div className="relative aspect-square sm:aspect-[4/3]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="30vw" className="object-cover" />
                </div>
                <figcaption className="hidden px-4 py-2.5 text-center text-sm font-semibold text-slate sm:block">{photo.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-8 sm:mt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div className="order-2 space-y-6 lg:sticky lg:top-24 lg:order-1 lg:self-start">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-navy/10">
              <h3 className="font-display text-xl font-bold text-navy">We cater</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-slate">
                {catering.kinds.map((kind) => (
                  <li key={kind} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 size-2 shrink-0 rotate-45 bg-terracotta" />
                    {kind}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-navy/10">
              <h3 className="font-display text-xl font-bold text-navy">Pans for your party</h3>
              <p className="mt-3 leading-relaxed text-slate">{catering.panDishes.join(" · ")}</p>
              <h4 className="mt-4 font-bold text-navy">And our desserts</h4>
              <p className="mt-1 leading-relaxed text-slate">{catering.desserts.join(" · ")}</p>
              <p className="mt-4 text-sm text-slate">From our &ldquo;We cater!&rdquo; post. Or reserve the truck itself for your event.</p>
            </div>
          </div>

          <form
            aria-labelledby="inquiry-title"
            className="order-1 rounded-3xl bg-white p-6 lift sm:p-8 lg:order-2"
            onSubmit={(event) => {
              // Native validation has already passed when this fires; nothing is sent anywhere.
              event.preventDefault();
              openPanel("form");
            }}
          >
            <h3 id="inquiry-title" className="font-display text-2xl font-bold text-navy">
              Catering inquiry
            </h3>
            <p className="mt-1 text-slate">A few details and we&apos;ll get back to you.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <fieldset className="sm:col-span-2">
                <legend className={labelClass}>Event type</legend>
                <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
                  {eventTypes.map((type, index) => (
                    <label key={type} className={choiceClass}>
                      <input
                        id={index === 0 ? FORM_FIRST_FIELD_ID : undefined}
                        type="radio"
                        name="eventType"
                        value={type}
                        required={index === 0}
                        className="size-4 shrink-0 accent-[var(--color-aegean)]"
                      />
                      <span className="min-w-0">{type}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="event-date" className={labelClass}>
                  Event date
                </label>
                <input id="event-date" name="eventDate" type="date" required min={minDate} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="event-guests" className={labelClass}>
                  Guest count
                </label>
                <input
                  id="event-guests"
                  name="guests"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={5000}
                  required
                  className={fieldClass}
                  placeholder="About how many?"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="event-location" className={labelClass}>
                  Location
                </label>
                <input id="event-location" name="location" required className={fieldClass} placeholder="Venue, address or neighborhood" />
              </div>

              <fieldset className="sm:col-span-2">
                <legend className={labelClass}>
                  Menu interests <span className="font-normal text-slate">(optional)</span>
                </legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {menuInterests.map((interest) => (
                    <label key={interest} className={choiceClass}>
                      <input type="checkbox" name="menuInterests" value={interest} className="size-4 shrink-0 accent-[var(--color-aegean)]" />
                      <span className="min-w-0">{interest}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Your name
                </label>
                <input id="contact-name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-detail" className={labelClass}>
                  Phone or email
                </label>
                <input id="contact-detail" name="contact" required autoComplete="email" className={fieldClass} placeholder="How we can reach you" />
              </div>

              <fieldset className="sm:col-span-2">
                <legend className={labelClass}>Preferred contact</legend>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {contactOptions.map((option, index) => (
                    <label key={option} className={choiceClass}>
                      <input type="radio" name="preferredContact" value={option} required={index === 0} className="size-4 shrink-0 accent-[var(--color-aegean)]" />
                      <span className="min-w-0">{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="sm:col-span-2">
                <label htmlFor="event-notes" className={labelClass}>
                  Anything else? <span className="font-normal text-slate">(optional)</span>
                </label>
                <textarea id="event-notes" name="notes" rows={3} maxLength={1000} className={fieldClass} placeholder="Timing, dietary needs, the truck or trays..." />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-terracotta px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-terracotta-dark"
            >
              Send inquiry
            </button>
            <p className="mt-4 text-center text-sm text-slate">Demo form: nothing is sent. You&apos;ll see how to reach Georgia&apos;s instead.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
