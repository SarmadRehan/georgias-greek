import Image from "next/image";

import { market, shop } from "@/data/georgias";

import { SectionHeading } from "./SectionHeading";

export function GreekMarket() {
  return (
    <section id="market" aria-labelledby="market-title" className="bg-olive-soft py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="market-title"
          eyebrow="Greek market"
          title="Greek Favorites to Take Home"
          intro="Take home Greek favorites from our market. A few from our posts:"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {market.photos.map((photo) => (
            <li key={photo.caption}>
              <figure className="overflow-hidden rounded-3xl bg-white ring-1 ring-olive/25">
                <div className="relative aspect-[4/3] sm:aspect-square">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 30vw, 92vw" className="object-cover" />
                </div>
                <figcaption className="px-5 py-3 text-center font-bold text-olive-ink">{photo.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-slate">
          What&apos;s on the shelf changes, so DM{" "}
          <a href={shop.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold whitespace-nowrap text-aegean underline underline-offset-4">
            @{shop.instagramHandle}
          </a>{" "}
          or call{" "}
          <a href={shop.phoneHref} className="font-bold whitespace-nowrap text-aegean underline underline-offset-4">
            {shop.phone}
          </a>{" "}
          to ask what&apos;s in.
        </p>
      </div>
    </section>
  );
}
