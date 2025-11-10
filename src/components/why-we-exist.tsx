
// import Image from "next/image";

export function WhyWeExist({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-16 md:py-24 animate-in fade-in-0 slide-in-from-top-12 duration-700 delay-200">
      <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4 text-center">
            {/* <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">{dictionary.sectionTitle}</h2> */}
            <h2 className="text-4xl md:text-5xl font-headline font-bold">{dictionary.title2}</h2>
            <h3 className="text-lg text-muted-foreground md:px-[16rem]">{dictionary.subtitle2}</h3>
          </div>
          {/* <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/images/kiss-the-sun.webp"
              alt="Woman doing yoga during sunrise in a serene Bali setting"
              data-ai-hint="sunrise yoga"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div> */}
      </div>
    </section>
  );
}
