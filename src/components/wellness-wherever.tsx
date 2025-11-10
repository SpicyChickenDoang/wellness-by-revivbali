
import { CheckCircle } from "lucide-react";
import GoogleMaps from "@/components/google-maps"

export function WellnessWherever({ dictionary }: { dictionary: any }) {
    const benefits = [
        dictionary.benefits.licensed,
        dictionary.benefits.availability,
        dictionary.benefits.equipment,
        dictionary.benefits.location,
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-[4rem] font-headline font-bold text-primary">
                            {dictionary.title}
                        </h2>
                        <ul className="mt-6 space-y-4 text-lg">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Google Map */}
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                        <GoogleMaps />
                    </div>
                </div>
            </div>
        </section>
    );
}
