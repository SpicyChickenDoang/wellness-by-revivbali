
import { BookingForm } from "@/components/booking-form";
import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";
import { Suspense } from "react";

export default async function BookingPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 md:py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">{dictionary.bookingPage.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {dictionary.bookingPage.subtitle}
        </p>
      </div>
      <div className="mt-12">
        <Suspense fallback={<div>{dictionary.bookingPage.loading}</div>}>
          <BookingForm dictionary={dictionary.bookingPage} />
        </Suspense>
      </div>
    </div>
  );
}
