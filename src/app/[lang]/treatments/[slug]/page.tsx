// "use client";

import { treatments, type Treatment } from '@/lib/treatments';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/server/get-dictionary';
import { Locale } from '@/i18n-config';
import TreatmentDetailClientPage from '@/components/treatment-detail-client';
import { softBorder, buttonToBorder, slugToGradient } from '@/lib/constant';

function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((p) => p.slug === slug);
}

export default async function TreatmentDetailPage(props: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const params = await props.params;
  const { lang, slug } = params;

  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  const dictionary = await getDictionary(lang);
  const allTreatments = treatments;

  return (
    <TreatmentDetailClientPage
      treatment={treatment}
      allTreatments={allTreatments}
      dictionary={dictionary}
      lang={lang}
      softBorder={softBorder}
      buttonToBorder={buttonToBorder}
      slugToGradient={slugToGradient}
    />
  );
}
