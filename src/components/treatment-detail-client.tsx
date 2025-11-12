"use client";

import { type Treatment } from '@/lib/treatments';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Locale } from '@/i18n-config';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Autoplay from "embla-carousel-autoplay";
import { cn, formatPrice, dowa } from '@/lib/utils';
import Orb from './orb/Orb';
import { useParams, useRouter } from 'next/navigation';

interface TreatmentDetailClientPageProps {
  treatment: Treatment;
  allTreatments: Treatment[];
  dictionary: any;
  lang: Locale;
  softBorder: any;
  buttonToBorder: any;
  slugToGradient: any;
}

const treatmentSlug = [
  { slug: "nad-reboot-100", value: "100" },
  { slug: "nad-restore-200", value: "200" },
  { slug: "nad-regenerate-500", value: "500" },
  { slug: "nad-elite-750", value: "750" }
];

export default function TreatmentDetailClientPage({ treatment, allTreatments, dictionary, lang, softBorder, buttonToBorder, slugToGradient }: TreatmentDetailClientPageProps) {
  const router = useRouter();
  const params = useParams();
  const currentSlug = params.slug as string;

  const currentVolume = treatmentSlug.find(item => item.slug === currentSlug)?.value || "100";

  const { treatmentDetailPage } = dictionary;
  const image = PlaceHolderImages.find((img) => img.id === treatment.imageId);
  const hue = treatment.hue
  // const border = buttonToBorder[treatment.slug] || 'border-input';
  const sborder = softBorder[treatment.slug] || 'border-input';
  let price = treatment.price;

  const preloadRoute = (slug: string) => {
    router.prefetch(`/treatments/${slug}`);
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 justify-center items-center flex flex-col">
            <div className="relative aspect-square w-full md:w-2/3 lg:w-[50%]">
              {/* Orb as background - full size */}
              <div className="absolute -inset-12 flex items-center justify-center z-10">
                <Orb
                  hoverIntensity={0.14}
                  rotateOnHover={false}
                  hue={170}
                  forceHoverState={false}
                />
              </div>

              {/* Image on top - smaller than container */}
              {image && (
                <div className="relative w-[100%] h-[100%] mx-auto my-auto justify-center z-0">
                  <Image
                    src={image.imageUrl}
                    alt={treatment.name}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className={cn("top-20 rounded-lg p-6 shadow-sm border", sborder)}>
              <h2 className="text-4xl font-bold font-headline text-primary">{treatment.name}</h2>
              <p className="mt-4 text-lg text-foreground text-justify">{treatment.longDescription}</p>

              <div className={cn("mt-6 border-t pt-6", sborder)}>
                <RadioGroup
                  defaultValue="100"
                  className="grid grid-cols-3 gap-2 mb-6"
                  value={currentVolume}
                >
                  {treatmentSlug.map(volume => (
                    <div key={volume.value}>
                      <RadioGroupItem
                        value={volume.value}
                        id={`r-${volume.value}`}
                        className="sr-only"
                      />
                      <Link
                        href={`/treatments/${volume.slug}`}
                        onMouseEnter={() => preloadRoute(volume.slug)}
                      >
                        <Label
                          htmlFor={`r-${volume.value}`}
                          className={cn(
                            "flex items-center justify-center rounded-md border-2 border-muted p-3 text-md font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer text-lg",
                            currentVolume === volume.value ? "bg-accent text-accent-foreground" : ""
                          )}
                        >
                          {volume.value}
                        </Label>
                      </Link>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-lg">{treatmentDetailPage.price}</span>
                  <p className="text-3xl font-bold font-headline text-primary">
                    {formatPrice(price)}
                  </p>
                </div>
                <Button asChild size="lg" className="w-full mt-6 bg-accent hover:bg-accent/90 text-lg">
                  <Link
                    href="#"
                    onClick={() => dowa(treatment.message)}
                  >
                    {treatmentDetailPage.bookButton}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}