import Image from "next/image";
import manifesto from "@/app/data/homepage/manifesto.json";

import { IconEngineer } from "@/app/components/icons/store-icons"

export function Manifesto() {
    return (
        <section className="bg-black text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 items-center gap-10 md:gap-16">

                <div className="relative h-175">
                    <Image
                        src={manifesto.image}
                        alt="manifesto"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="w-[80%] sm:w-xs absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-6 bg-lime-400 text-black py-6 sm:py-10 px-5 sm:px-8 rounded flex flex-col gap-3 sm:gap-4">

                        <IconEngineer className="w-10 h-10 text-black" />

                        <h3 className="font-black text-base sm:text-lg pr-2 sm:pr-4 text-black/70 leading-tight">
                            {manifesto.highlightCard.title}
                        </h3>

                        <p className="text-xs sm:text-sm pr-2 sm:pr-4 text-black/50 leading-relaxed">
                            {manifesto.highlightCard.description}
                        </p>

                    </div>
                </div>

                <div className="p-4 sm:p-6 md:p-10">

                    <p className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-orange-500 mb-2 sm:mb-3 uppercase">
                        {manifesto.tag}
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black italic leading-tight">
                        {manifesto.heading.normal}
                        <br />
                        <span className="text-lime-400">
                            {manifesto.heading.highlight}
                        </span>
                    </h2>

                    <div className="space-y-4 sm:space-y-5 text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
                        {manifesto.sections.map((item, index) => (
                            <p key={index}>{item.description}</p>
                        ))}
                    </div>

                    <div className="border-t border-gray-800 my-6 sm:my-8"></div>


                    <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16">
                        {manifesto.stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-2xl sm:text-3xl text-lime-400 font-black">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] sm:text-xs text-white font-extrabold tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}