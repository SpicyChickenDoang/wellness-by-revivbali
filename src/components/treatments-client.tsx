"use client"

import TreatmentCard from "@/components/treatment-card";
import { treatments } from "@/lib/treatments";
import { Locale } from "@/i18n-config";

type Dictionary = Awaited<ReturnType<typeof import("@/server/get-dictionary").getDictionary>>;

interface TreatmentsClientProps {
  dictionary: Dictionary;
  treatmentsByCategory: Record<string, typeof treatments>;
  lang: Locale;
  softBorder: any;
  buttonToBorder: any;
  slugToGradient: any;
}

export default function TreatmentsClient({ 
  dictionary, 
  treatmentsByCategory, 
  lang ,
  softBorder, 
  buttonToBorder, 
  slugToGradient
}: TreatmentsClientProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          {dictionary.treatmentsPage.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {dictionary.treatmentsPage.subtitle}
        </p>
      </div>

      <div className="mt-12 md:mt-16 space-y-16">
        {Object.entries(treatmentsByCategory).map(([category, categoryTreatments]) => (
          <section key={category}>
            <h2 className="text-3xl font-headline font-semibold border-b pb-4 mb-8">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} lang={lang} softBorder={softBorder} buttonToBorder={buttonToBorder} slugToGradient={slugToGradient} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}