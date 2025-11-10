
"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const doctors = [
  { id: 1, name: "Dr. Evelyn Reed", imageId: "doc1" },
  { id: 2, name: "Dr. Marcus Thorne", imageId: "doc2" },
  { id: 3, name: "Dr. Amelia Vance", imageId: "doc3" },
  { id: 4, name: "Dr. Julian Hayes", imageId: "doc4" },
  { id: 5, name: "Dr. Clara Monroe", imageId: "doc5" },
  { id: 6, name: "Dr. Samuel Finch", imageId: "doc6" },
];

export function DoctorsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {doctors.map((doctor) => {
          const image = PlaceHolderImages.find(img => img.id === doctor.imageId);
          return (
            <CarouselItem key={doctor.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden">
                  <div className="flex items-center h-full">
                    <div className="w-1/3 relative aspect-square">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          className="object-cover"
                          fill
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="w-2/3 flex flex-col justify-center p-4">
                      <h3 className="text-lg font-headline font-semibold">{doctor.name}</h3>
                      <p className="text-sm text-muted-foreground">Lead Physician</p>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
