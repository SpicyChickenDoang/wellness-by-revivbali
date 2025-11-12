import Image from "next/image";
import Link from "next/link";
import { type Treatment } from "@/lib/treatments";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { Separator } from "./ui/separator";
import { cn, dowa, formatPrice } from "@/lib/utils";

interface TreatmentCardProps {
  treatment: Treatment;
  lang: Locale;
  softBorder: any;
  buttonToBorder: any;
  slugToGradient: any;
}

export default function TreatmentCard({ treatment, lang, softBorder, buttonToBorder, slugToGradient }: TreatmentCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === treatment.imageId);
  const gradient = slugToGradient[treatment.slug] || 'from-transparent';
  const border = buttonToBorder[treatment.slug] || 'border-input';
  const sborder = softBorder[treatment.slug] || 'border-input';

  return (
    <Card key={treatment.id} className={cn("flex flex-col text-center transition-all duration-300 h-full overflow-hidden hover:shadow-lg hover:-translate-y-1 bg-gradient-to-t", gradient, sborder)}>
      <CardHeader className="p-4 flex justify-center items-center h-48">
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
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-center items-center p-4">
        <CardTitle className="font-headline text-3xl sm:text-base text-card">{treatment.name}</CardTitle>
        <p className="mt-2 text-sm text-card">{treatment.shortDescription}</p>
      </CardContent>
      <CardFooter className="flex justify-center items-center p-4 pt-0">
        <p className="text-xl font-bold font-headline text-card whitespace-nowrap">{formatPrice(treatment.price)}</p>
        <Separator orientation="vertical" className="mx-4 h-6" />
        <div className="flex gap-2">
          <Button asChild variant="outline" className={cn(sborder)}>
            <Link href={`/${lang}/treatments/${treatment.slug}`}>Details</Link>
          </Button>
          <Button asChild className="flex-1 md:flex-none rounded-md bg-accent">
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
  );
}
