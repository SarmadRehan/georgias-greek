import Image from "next/image";

import { heroPhoto, shop } from "@/data/georgias";

import { CateringButton, OrderButton } from "./SiteProvider";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2/3 bg-sky-soft lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:w-[42%]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-20">
        <div className="min-w-0 text-center lg:text-left">
          <p className="inline-block rounded-full bg-olive-soft px-4 py-1.5 text-sm font-bold text-olive-ink">
            Featured on Diners, Drive-Ins and Dives
          </p>
          <h1 id="hero-title" className="mt-6 font-display text-[2.6rem] leading-[1.05] font-bold text-navy min-[360px]:text-5xl sm:text-7xl">
            {shop.name}
          </h1>
          <div aria-hidden="true" className="greek-key mx-auto mt-5 w-44 text-gold lg:mx-0" />
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-slate sm:text-2xl lg:mx-0">{shop.tagline}.</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <OrderButton className="w-full rounded-full bg-terracotta px-6 py-3.5 text-lg font-bold text-white transition-colors lift hover:bg-terracotta-dark sm:w-auto lg:px-5 lg:text-base">
              Order online
            </OrderButton>
            <CateringButton className="w-full rounded-full bg-aegean px-6 py-3.5 text-lg font-bold text-white transition-colors hover:bg-aegean-dark sm:w-auto lg:px-5 lg:text-base">
              Catering &amp; weddings
            </CateringButton>
            <a
              href="#find-the-truck"
              className="w-full rounded-full border-2 border-navy px-6 py-3 text-center text-lg font-bold text-navy transition-colors hover:bg-navy hover:text-white sm:w-auto lg:px-5 lg:text-base"
            >
              Find the truck
            </a>
          </div>
          <p className="mt-6 text-sm font-semibold text-slate">
            Classic Greek fare · Live music on weekends · Greek market
          </p>
        </div>

        <figure className="relative mx-auto w-full max-w-xl">
          <div className="rounded-[2rem] bg-white p-2 ring-2 ring-gold lift">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
              <Image src={heroPhoto.src} alt={heroPhoto.alt} fill priority sizes="(min-width: 1024px) 36rem, 92vw" className="object-cover" />
            </div>
          </div>
        </figure>
      </div>
      <div aria-hidden="true" className="greek-key text-navy" />
    </section>
  );
}
