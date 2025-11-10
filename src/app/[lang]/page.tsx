import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";
import { TrustedCare } from "@/components/trusted-care";
import { WellnessWherever } from "@/components/wellness-wherever";
import { Testimonials } from "@/components/testimonials";
import { Hero } from "@/components/hero";
import { WhyWeExist } from "@/components/why-we-exist";
import { DesignedForFeelings } from "@/components/designed-for-feelings";
import { slugToGradient, buttonToBorder, slugToColor, softBorder } from "@/lib/constant";
import { FinalCta } from "@/components/final-cta";
import { WhatsappButton } from "@/components/whatsapp-button";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;

  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      <Hero dictionary={dictionary.hero} />

      <div className="bg-background">
        <WhyWeExist dictionary={dictionary.whyWeExist} />
      </div>
      <div className="bg-card">
        <DesignedForFeelings
          dictionary={dictionary.designedForFeelings}
          lang={lang}
          slugToGradient={slugToGradient}
          buttonToBorder={buttonToBorder}
          slugToColor={slugToColor}
          softBorder={softBorder} />
      </div>
      <div className="bg-background">
        <TrustedCare dictionary={dictionary.trustedCare} />
      </div>
      <div className="bg-card">
        <WellnessWherever dictionary={dictionary.wellnessWherever} />
      </div>
      <div className="bg-background">
        <Testimonials dictionary={dictionary.testimonials} />
      </div>
      <FinalCta dictionary={dictionary.finalCta} />

      <WhatsappButton />
    </div>
  );
}
