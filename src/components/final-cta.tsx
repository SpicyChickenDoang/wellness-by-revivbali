"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { dowa } from "@/lib/utils";

export function FinalCta({ dictionary }: { dictionary: any }) {
  return (
    <section className="relative py-24 md:py-32 w-full flex items-center justify-center text-white text-center">
        <Image
          src={"/assets/images/sunset.webp"}
          alt={"Sunset background"}
          fill
          className="object-cover object-bottom"
          loading="lazy"
        />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 p-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">
          {dictionary.title}
        </h2>
        <Button asChild size="lg" className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-6 py-3">
          <Link href="#" target="_blank" onClick={()=>dowa("I would like to book a NAD+ infusion.")}>
            <Image
              className="mr-2 h-5 w-5"
              src="/assets/images/wa-icon.png"
              alt="wa icon"
              width={20}
              height={20}
            />
            {dictionary.cta}
          </Link>
        </Button>
      </div>
    </section>
  );
}
