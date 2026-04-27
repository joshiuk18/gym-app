import Image from "next/image";
import heroData from "@/app/data/homepage/hero.json";

import { IconArrowRight } from "@/app/components/icons/store-icons"

export function Hero() {
    return (
        <section className="relative w-full h-[80vh] sm:h-[95vh] md:h-[125vh]">

            <div>
                <Image
                    src={heroData.image}
                    alt="hero"
                    fill
                    priority
                    className="object-cover"
                />
            </div>



            <div className="absolute inset-0 bg-black/70" />


            <div className="absolute inset-0 flex items-center px-14">
                <div className="max-w-xl md:max-w-4xl px-6 md:px-14 text-white">


                    <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-lime-400 mb-3 font-extrabold">
                        {heroData.tag}
                    </p>


                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-black italic">
                        {heroData.title1}
                        <p className="text-lime-400">
                            {heroData.title2}
                        </p>
                    </h1>


                    <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                        {heroData.description}
                    </p>


                    <div className="mt-6 flex flex-col sm:flex-row gap-8">

                        <button className="bg-lime-300 text-black transition duration-200 hover:scale-110 cursor-pointer px-12 py-5 text-sm md:text-base font-semibold rounded-md w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-lime-300">
                            {heroData.Btn1}
                            <span className="text-lg">
                                <IconArrowRight className="w-5 h-5 text-black" />
                            </span>
                        </button>

                        <button className="border border-white/40 cursor-pointer px-12 py-5 text-sm md:text-base font-semibold rounded-md w-full sm:w-auto hover:bg-white/15  transition">
                            {heroData.Btn2}
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
}