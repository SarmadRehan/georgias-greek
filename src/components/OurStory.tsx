import Image from "next/image";

import { story } from "@/data/georgias";

import { SectionHeading } from "./SectionHeading";

export function OurStory() {
  return (
    <section id="story" aria-labelledby="story-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="story-title" eyebrow="Our story" title="From Georgia's Kitchen to the Truck" />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lift">
              <Image src={story.photo.src} alt={story.photo.alt} fill sizes="(min-width: 1024px) 34rem, 92vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate lg:text-left">{story.photo.caption}</figcaption>
          </figure>

          <div>
            <div className="space-y-4 text-lg leading-relaxed text-slate">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ol className="mt-8 grid gap-3 sm:grid-cols-3">
              {story.milestones.map((milestone, index) => (
                <li key={milestone.label} className="rounded-2xl border-2 border-gold/50 bg-white p-4 text-center">
                  <span className="font-display text-sm font-bold text-gold-ink">{["I", "II", "III"][index]}</span>
                  <p className="mt-1 font-bold leading-snug text-navy">{milestone.label}</p>
                  <p className="mt-1 text-sm text-slate">{milestone.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
