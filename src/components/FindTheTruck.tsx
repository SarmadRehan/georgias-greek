import Image from "next/image";

import { shop, truckPhoto } from "@/data/georgias";

import { SectionHeading } from "./SectionHeading";

export function FindTheTruck() {
  return (
    <section id="find-the-truck" aria-labelledby="truck-title" className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="truck-title"
          tone="onNavy"
          eyebrow="Find the truck"
          title="See Today's Location"
          intro="The truck moves around Seattle, from breweries to markets and festivals. Our live schedule always has today's spot."
        />

        <div className="mt-10 flex justify-center">
          <a
            href={shop.scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sky px-8 py-4 text-center text-lg font-bold text-navy transition-colors lift hover:bg-white"
          >
            See today&apos;s location
            <span className="sr-only"> (live schedule on SeattleFoodTruck.com, opens in a new tab)</span>
          </a>
        </div>
        <p className="mt-3 text-center text-sm text-sky-soft">Live schedule on SeattleFoodTruck.com</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <figure className="flex flex-col overflow-hidden rounded-3xl bg-navy-deep">
            <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-80 lg:flex-1">
              <Image src={truckPhoto.src} alt={truckPhoto.alt} fill sizes="(min-width: 1024px) 34rem, 92vw" className="object-cover" />
            </div>
            <figcaption className="px-5 py-3 text-sm text-sky-soft">{truckPhoto.caption}</figcaption>
          </figure>

          <div className="flex flex-col overflow-hidden rounded-3xl bg-white text-navy">
            <div className="p-6 sm:p-7">
              <h3 className="font-display text-2xl font-bold">Lake City Way</h3>
              <p className="mt-2 text-lg font-bold">
                {shop.street}
                <br />
                {shop.city}
              </p>
              <p className="mt-3 leading-relaxed text-slate">{shop.lakeCityNote}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={shop.directionsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-aegean px-5 py-2.5 font-bold text-white transition-colors hover:bg-aegean-dark">
                  Directions
                </a>
                <a href={shop.phoneHref} className="rounded-full border-2 border-aegean px-5 py-2 font-bold text-aegean transition-colors hover:bg-aegean hover:text-white">
                  Call {shop.phone}
                </a>
              </div>
            </div>
            <iframe
              title={`Map of ${shop.street}, ${shop.city}`}
              src={shop.mapEmbedUrl}
              className="min-h-72 w-full flex-1 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
