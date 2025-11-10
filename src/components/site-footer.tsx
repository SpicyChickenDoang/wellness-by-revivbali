
"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Logo } from "./logo";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import Image from "next/image";
import { dowa } from "@/lib/utils";

export function SiteFooter({ dictionary }: { dictionary: any }) {
  const [copyrightText, setCopyrightText] = useState("");

  useEffect(() => {
    if (dictionary?.copyright) {
      setCopyrightText(dictionary.copyright.replace('{year}', new Date().getFullYear()));
    }
  }, [dictionary]);

  if (!dictionary) return null;

  return (
    <footer className="w-full bg-card border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              {dictionary.tagline}
            </p>
            <div className="flex space-x-4">
              <Link href="#hero" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#hero" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#hero" className="text-muted-foreground hover:text-primary" onClick={() => dowa("I would like to book a NAD+ infusion.")}>
                <Image
                  className="h-5 w-5"
                  src="/assets/images/wa-icon2.png"
                  alt="wa icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold">{dictionary.services}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/treatments" className="text-muted-foreground hover:text-primary">{dictionary.ivTherapies}</Link></li>
              <li><Link href="/treatments" className="text-muted-foreground hover:text-primary">{dictionary.vitaminInjections}</Link></li>
              <li><Link href="/treatments" className="text-muted-foreground hover:text-primary">{dictionary.aesthetics}</Link></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-headline font-semibold">{dictionary.company}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#hero" className="text-muted-foreground hover:text-primary">{dictionary.aboutUs}</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Kontak</Link></li>
              <li><Link href="#hero" className="text-muted-foreground hover:text-primary">{dictionary.careers}</Link></li>
            </ul>
          </div> */}
          <div>
            <h3 className="font-headline font-semibold">{dictionary.legal}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#hero" className="text-muted-foreground hover:text-primary">{dictionary.privacyPolicy}</Link></li>
              <li><Link href="#hero" className="text-muted-foreground hover:text-primary">{dictionary.termsOfService}</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
}
