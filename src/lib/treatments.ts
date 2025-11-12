export type Treatment = {
  id: string;
  slug: string;
  name: string;
  category: 'IV Therapy' | 'Vitamin Injections' | 'Aesthetics';
  price: number;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  imageId: string;
  hue: number;
  message: string;
};

export const treatments: Treatment[] = [
  {
    id: 'nad-1',
    slug: "nad-reboot-100",
    name: "NAD+ Reboot 100",
    price: 2390000,
    shortDescription: "Light anti-aging therapy to refresh your skin, energy, and focus.",
    longDescription: "Pure Nicotinamide Adenine Dinucleotide (NAD+) — a coenzyme derived from Vitamin B3 — fuels over 500 reactions that keep your cells healthy and youthful. NAD+ Reboot 100 delivers a gentle yet effective introduction to cellular renewal. Ideal for beginners seeking natural anti-aging, smoother skin texture, improved mood, and steady daily energy.",
    benefits: ['Natural anti-aging', 'Smoother skin texture', 'Improved mood', 'Steady daily energy'],
    category: 'IV Therapy',
    imageId: 'nad-reboot-100',
    hue: 42,
    message: "I’d like to book NAD+ Reboot 100 treatment!"
  },
  {
    id: 'nad-2',
    slug: "nad-restore-200",
    name: "NAD+ Restore 200",
    price: 2990000,
    shortDescription: "Daily anti-aging infusion to restore energy, clarity, and skin vitality.",
    longDescription: "NAD+ Restore 200 supports collagen production, promotes radiant skin, and revitalizes cellular energy. Perfect for professionals or travelers who want to fight early signs of aging, dryness, or dullness. Regular sessions help maintain smoother skin, sharper focus, and balanced mood — keeping you vibrant through Bali’s demanding pace.",
    benefits: ['Fights early signs of aging', 'Restores skin vitality', 'Sharper focus', 'Balanced mood'],
    category: 'IV Therapy',
    imageId: 'nad-restore-200',
    hue: 42,
    message: "I’d like to book NAD+ Restore 200 treatment!"
  },
  {
    id: 'nad-3',
    slug: "nad-revive-250",
    name: "NAD+ Revive 250",
    price: 3390000,
    shortDescription: "Advanced NAD+ therapy for visible skin glow and deep anti-aging repair.",
    longDescription: "For those seeking stronger results, NAD+ Revive 250 penetrates deeper into cellular metabolism, stimulating natural collagen and DNA repair. It helps reduce inflammation, smooth fine lines, and improve overall complexion while enhancing mood and energy. Recommended for moderate fatigue, early skin aging, and mild oxidative stress.",
    benefits: ['Deep anti-aging repair', 'Reduces inflammation', 'Smooths fine lines', 'Enhances mood and energy'],
    category: 'IV Therapy',
    imageId: 'nad-revive-250',
    hue: 42,
    message: "I’d like to book NAD+ Revive 250 treatment!"
  },
  {
    id: 'nad-4',
    slug: "nad-regenerate-500",
    name: "NAD+ Regenerate 500",
    price: 3890000,
    shortDescription: "Powerful anti-aging and skin rejuvenation therapy for longevity seekers.",
    longDescription: "NAD+ Regenerate 500 is a concentrated anti-aging treatment that restores skin elasticity, supports cellular turnover, and reactivates natural energy pathways. This therapy aids in reducing wrinkles, improving tone, and promoting youthful radiance from the inside out. Ideal for individuals looking to counter visible aging or post-travel exhaustion while boosting long-term vitality.",
    benefits: ['Restores skin elasticity', 'Supports cellular turnover', 'Reduces wrinkles', 'Boosts long-term vitality'],
    category: 'IV Therapy',
    imageId: 'nad-regenerate-500',
    hue: 42,
    message: "I’d like to book NAD+ Regenerate 500 treatment!"
  },
  {
    id: 'nad-5',
    slug: "nad-elite-750",
    name: "NAD+ Elite 750",
    price: 4790000,
    shortDescription: "Maximum-strength NAD+ infusion for advanced anti-aging and radiant skin.",
    longDescription: "Our most intensive NAD+ therapy, NAD+ Elite 750 delivers deep cellular renewal, enhanced mitochondrial function, and accelerated skin regeneration. Designed for those seeking to extend healthspan and preserve youthfulness, this infusion helps reduce oxidative damage, lift mood, and produce a brighter, more even skin tone. Perfect for biohackers, executives, and long-stay visitors pursuing complete rejuvenation.",
    benefits: ['Deep cellular renewal', 'Accelerated skin regeneration', 'Reduces oxidative damage', 'Brighter skin tone'],
    category: 'IV Therapy',
    imageId: 'nad-elite-750',
    hue: 42,
    message: "I’d like to book NAD+ Elite 750 treatment!"
  },
  {
    id: 'prp',
    slug: "prp",
    name: "PRP",
    price: 999999,
    shortDescription: "Haircare and Skin Rejuvination.",
    longDescription: "Our most intensive NAD+ therapy, NAD+ Elite 750 delivers deep cellular renewal, enhanced mitochondrial function, and accelerated skin regeneration. Designed for those seeking to extend healthspan and preserve youthfulness, this infusion helps reduce oxidative damage, lift mood, and produce a brighter, more even skin tone. Perfect for biohackers, executives, and long-stay visitors pursuing complete rejuvenation.",
    benefits: ['Deep cellular renewal', 'Accelerated skin regeneration', 'Reduces oxidative damage', 'Brighter skin tone'],
    category: 'Aesthetics',
    imageId: 'nad-elite-750',
    hue: 42,
    message: "I’d like to book PRP treatment!"
  }
];
