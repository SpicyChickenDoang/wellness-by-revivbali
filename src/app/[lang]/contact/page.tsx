
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const heroImage = PlaceHolderImages.find((img) => img.id === "contact-hero");

  return (
    <div>
      <section className="relative h-[40vh] w-full flex items-center justify-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            loading="lazy" 
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold">{dictionary.contactPage.title}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {dictionary.contactPage.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{dictionary.contactPage.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary"/>
                  <span>+62 851 6128 9011</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary"/>
                  <span>contact@revivbali.com</span>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1"/>
                  <span>{dictionary.contactPage.mobileService}<br/>{dictionary.contactPage.headquarters}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{dictionary.contactPage.followUs}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild variant="outline" className="w-full justify-start gap-2">
                  <Link href="#">
                    <Facebook className="h-5 w-5"/> Facebook
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start gap-2">
                  <Link href="#">
                    <Instagram className="h-5 w-5"/> Instagram
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start gap-2">
                  <Link href="#">
                    <Twitter className="h-5 w-5"/> Twitter
                  </Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
