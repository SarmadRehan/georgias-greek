import Image from "next/image";

import { menu } from "@/data/georgias";

import { SectionHeading } from "./SectionHeading";
import { OrderButton } from "./SiteProvider";

export function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="menu-title"
          eyebrow="The menu"
          title="Classic Greek, Made Fresh"
          intro="Georgia's family recipes, from the yeero to the spanakopita."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((group) => (
            <article key={group.id} aria-labelledby={`menu-${group.id}`} className="flex flex-col overflow-hidden rounded-3xl bg-marble ring-1 ring-navy/10">
              <figure className="relative aspect-[4/3] overflow-hidden">
                <Image src={group.photo.src} alt={group.photo.alt} fill sizes="(min-width: 1024px) 22rem, (min-width: 768px) 45vw, 92vw" className="object-cover" />
                {group.photo.caption && (
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy">{group.photo.caption}</figcaption>
                )}
              </figure>
              <div className="flex-1 p-6">
                <h3 id={`menu-${group.id}`} className="font-display text-2xl font-bold text-navy">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-bold text-aegean">{item.name}</p>
                      <p className="mt-0.5 leading-relaxed text-slate">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-center rounded-3xl bg-navy p-8 text-center text-white md:col-span-2 lg:col-span-1">
            <div aria-hidden="true" className="greek-key text-gold" />
            <p className="mt-6 font-display text-2xl font-bold">Hungry already?</p>
            <p className="mt-3 leading-relaxed text-sky-soft">Online ordering is coming soon. Until then, call us or find the truck.</p>
            <div className="mt-6 flex flex-col gap-3">
              <OrderButton className="rounded-full bg-terracotta px-6 py-3 font-bold text-white transition-colors hover:bg-terracotta-dark">
                Order online
              </OrderButton>
              <a href="#find-the-truck" className="rounded-full border-2 border-white px-6 py-2.5 font-bold transition-colors hover:bg-white hover:text-navy">
                Find the truck
              </a>
            </div>
            <div aria-hidden="true" className="greek-key mt-6 text-gold" />
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate">
          Item descriptions from Georgia&apos;s menu on SeattleFoodTruck.com. Ask at the window about today&apos;s specials.
        </p>
      </div>
    </section>
  );
}
