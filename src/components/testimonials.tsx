
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Testimonials({ dictionary }: { dictionary: any }) {
  const testimonials = [
    {
      quote: dictionary.clients.jessica.quote,
      name: dictionary.clients.jessica.name,
      title: dictionary.clients.jessica.title,
      imageId: "testimonial1",
      initials: "JM"
    },
    {
      quote: dictionary.clients.david.quote,
      name: dictionary.clients.david.name,
      title: dictionary.clients.david.title,
      imageId: "testimonial2",
      initials: "DL"
    },
    {
      quote: dictionary.clients.sophia.quote,
      name: dictionary.clients.sophia.name,
      title: dictionary.clients.sophia.title,
      imageId: "testimonial3",
      initials: "SK"
    },
  ];

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-[3rem] md:text-[4rem] font-headline font-bold text-center text-gold">
          {dictionary.title}
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          {dictionary.subtitle}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const image = PlaceHolderImages.find(img => img.id === testimonial.imageId);
            return (
              <Card key={index} className="p-6 flex flex-col">
                <CardContent className="flex-grow p-0">
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="p-0 mt-6">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
