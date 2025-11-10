"use client"

import Link from "next/link";
import React from "react";
import Image from "next/image";
// import RotatingText from './rotate/RotatingText'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { treatments as allTreatments } from "@/lib/treatments";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Locale } from "@/i18n-config";
import { cn, dowa, formatPrice } from "@/lib/utils";
import { Separator } from "./ui/separator";
// import { slugToGradient, buttonToBorder } from "@/lib/constant";
import type { LucideProps } from "lucide-react";
import { Zap, Sparkles, BatteryCharging, Plane, Dna } from "lucide-react";

const treatments = allTreatments;

export function DesignedForFeelings({ dictionary, lang, slugToGradient, buttonToBorder, slugToColor, softBorder }: { dictionary: any, lang: Locale, slugToGradient: any, buttonToBorder: any, slugToColor: any, softBorder: any }) {

  const customCard = {
    title: dictionary.cards.custom.title,
    description: dictionary.cards.custom.description,
    link: `/${lang}/contact`,
    isCustom: true,
    cta: dictionary.cards.custom.cta,
  };

  const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
    'nad-reboot-100': Sparkles,
    'nad-restore-200': BatteryCharging,
    'nad-revive-250': Plane,
    'nad-regenerate-500': Dna,
    'nad-elite-750': Zap,
  };

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-primary flex flex-wrap justify-center items-center">
          {dictionary.title}
        </h2>
        {/* <div className="flex justify-center items-center text-[1.8rem] lg:text-[4rem] font-headline font-bold">
          <RotatingText
            texts={[
              'Cellular Rejuvenation',
              'Cellular Regeneration',
              'Mitochondrial Boost',
              'Mental Clarity',
              'Lasting Vitality',
              'Radiant Skin',
              'Complete Wellness'
            ]}
            mainClassName="text-accent"
            staggerFrom="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            staggerDuration={0.025}
            // splitLevelClassName=""
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            rotationInterval={1500}
          />
        </div> */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => {
            const image = PlaceHolderImages.find((img) => img.id === treatment.imageId);
            const Icon = iconMap[treatment.slug];
            const iconColor = slugToColor[treatment.slug] || 'text-foreground';
            const gradient = slugToGradient[treatment.slug] || 'from-transparent';
            const border = buttonToBorder[treatment.slug] || 'border-input';
            const sborder = softBorder[treatment.slug] || 'border-input';

            return (
              <Card key={treatment.id} className={cn("flex flex-col text-center transition-all duration-300 h-full overflow-hidden hover:shadow-lg hover:-translate-y-1 bg-gradient-to-t", gradient, sborder)}>
                <CardHeader className="p-4 flex justify-center items-center h-64">
                  <div className="relative h-full w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={treatment.name}
                        data-ai-hint={image.imageHint}
                        width={200}
                        height={200}
                        className="object-contain w-full h-full"
                        loading="lazy"
                      />
                    )}
                    <Icon className={cn("h-6 w-6 sm:h-12 sm:w-12 absolute sm:top-[1rem] sm:right-[6rem] top-[3rem] right-[1rem]", iconColor)} />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-center items-center p-4">
                  <CardTitle className="font-headline text-2xl text-primary">{treatment.name}</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">{treatment.shortDescription}</p>
                </CardContent>
                <CardFooter className="flex flex-col md:flex-row md:justify-center md:items-center p-4 pt-0 gap-3 md:gap-0">

                  <p className="text-xl font-bold font-headline text-primary whitespace-nowrap">
                    {formatPrice(treatment.price)}
                  </p>

                  <Separator orientation="vertical" className="hidden md:block mx-4 h-6" />

                  <div className="flex w-full md:w-auto gap-2 rounded-md justify-center">
                    <Button asChild variant="outline" className={cn("flex-1 md:flex-none", sborder)}>
                      <Link href={`/${lang}/treatments/${treatment.slug}`}>Details</Link>
                    </Button>
                    <Button asChild className="flex-1 md:flex-none rounded-md">
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          dowa(treatment.message);
                        }}
                      >
                        Book Now
                      </Link>
                    </Button>

                  </div>
                </CardFooter>

              </Card>
            )
          })}
          {/* <Card className="flex flex-col text-center transition-all duration-300 h-full p-6 sm:p-4 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl sm:text-lg">{customCard.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground sm:text-sm">{customCard.description}</p>
                </CardContent>
                <CardFooter className="justify-center items-center">
                  <Button asChild variant="outline">
                    <Link href={customCard.link}>{customCard.cta}</Link>
                  </Button>
                </CardFooter>
            </Card> */}
        </div>
      </div>
    </section>
  );
}
