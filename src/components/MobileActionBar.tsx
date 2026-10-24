import { shop } from "@/data/georgias";

import { CateringButton, OrderButton } from "./SiteProvider";

/** Thumb-reachable Call, Order and Catering buttons, shown on small screens only. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 gap-2 border-t border-navy/10 bg-white/95 p-3 text-[0.95rem] backdrop-blur md:hidden">
      <a href={shop.phoneHref} className="rounded-full border-2 border-navy py-2.5 text-center font-bold text-navy">
        Call
      </a>
      <OrderButton className="rounded-full bg-terracotta py-3 text-center font-bold text-white">Order</OrderButton>
      <CateringButton className="rounded-full bg-aegean py-3 text-center font-bold text-white">Catering</CateringButton>
    </div>
  );
}
