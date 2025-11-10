// page.tsx (Server Component)
import { treatments } from "@/lib/treatments";
import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";
import TreatmentsClient from "@/components/treatments-client"
import { slugToGradient, buttonToBorder, softBorder } from "@/lib/constant";

export default async function TreatmentsPage(props: { 
  params: Promise<{ lang: Locale }> 
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  
  const treatmentsByCategory = treatments.reduce((acc, treatment) => {
    if (!acc[treatment.category]) {
      acc[treatment.category] = [];
    }
    acc[treatment.category].push(treatment);
    return acc;
  }, {} as Record<string, typeof treatments>);

  return (
    <TreatmentsClient 
      dictionary={dictionary}
      treatmentsByCategory={treatmentsByCategory}
      lang={lang}
      softBorder={softBorder}
      buttonToBorder={buttonToBorder}
      slugToGradient={slugToGradient}
    />
  );
}