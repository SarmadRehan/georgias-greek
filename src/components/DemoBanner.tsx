import { shop } from "@/data/georgias";

export function DemoBanner() {
  return <p className="bg-navy-deep px-4 py-2 text-center text-sm font-semibold text-white">{shop.demoNotice}</p>;
}
