
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import LocaleSwitcher from "./locale-switcher";
import { cn } from "@/lib/utils";

export function SiteHeader({ dictionary }: { dictionary: any }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!dictionary.navigation) return null;

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-[#FAF9F6] backdrop-blur-none" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6">
            <Logo />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <div className={scrolled ? "visible" : "invisible"}>
              <LocaleSwitcher />
            </div>
            {/* <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90">
              <Link href="https://api.whatsapp.com/send?phone=6285161289011" target="_blank" rel="noopener noreferrer">{dictionary.navigation.bookATreatment}</Link>
            </Button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
