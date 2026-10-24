import Image from "next/image";

import logo from "@/assets/images/logo.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/** Georgia's own round logo from Instagram: her portrait in a gold Greek-key ring, "Georgia's Greek Food Truck". */
export function Logo({ className = "", priority = false }: LogoProps) {
  return <Image src={logo} alt="Georgia's Greek Food Truck" className={`h-auto ${className}`} sizes="12rem" priority={priority} />;
}
