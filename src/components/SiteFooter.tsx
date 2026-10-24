import { shop } from "@/data/georgias";

import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-sky-soft">
      <div className="bg-navy py-2">
        <div aria-hidden="true" className="greek-key text-gold" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo className="w-28" />
          <p className="mt-4 max-w-xs leading-relaxed">{shop.tagline}.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-light">Visit</h2>
          <p className="mt-3 leading-relaxed">
            <span className="font-bold text-white">{shop.street}</span>
            <br />
            {shop.city}
          </p>
          <p className="mt-3">
            <a href={shop.scheduleUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-white underline underline-offset-4 hover:text-sky">
              Today&apos;s truck location
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-light">Say yassou</h2>
          <p className="mt-3 leading-relaxed">
            <a href={shop.phoneHref} className="font-bold text-white hover:text-sky">
              {shop.phone}
            </a>
            <br />
            <a href={shop.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-sky">
              Instagram <span className="whitespace-nowrap">@{shop.instagramHandle}</span>
            </a>
            <br />
            <a href={shop.facebookUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-sky">
              Facebook
            </a>
          </p>
          <p className="mt-3">Catering · Weddings · Events · Greek market</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-40 sm:px-6 md:pb-24">
        <p className="rounded-full bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white">{shop.demoNotice}</p>
      </div>
    </footer>
  );
}
