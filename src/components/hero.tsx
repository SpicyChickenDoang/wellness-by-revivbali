"use client"

import useIsMobile from "@/hooks/useIsMobile";
import { HeroDesktop } from "./hero-desktop";
import { HeroMobile } from "./hero-mobile";

export function Hero({ dictionary }: { dictionary: any }) {

  const isMobile = useIsMobile();

  if (!isMobile) {
    return <HeroDesktop dictionary={dictionary} />;
  } else {
    return <HeroMobile dictionary={dictionary} />;
  }
}
