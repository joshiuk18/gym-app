import Image from "next/image";
import heroData from "@/app/data/homepage/hero.json";
import { IconArrowRight } from "@/app/components/icons/store-icons";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-black flex items-center">


            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-full max-w-7xl h-full relative">

                    <Image
                        src={heroData.image}
                        alt="hero"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover rounded-xl"
                        priority
                    />


                    <div className="absolute inset-0 bg-black/80 rounded-xl" />
                </div>
            </div>


            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">

                    <div className="max-w-4xl">


                        <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-lime-400 mb-3 font-extrabold">
                            {heroData.tag}
                        </p>


                        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic leading-tight">
                            {heroData.title1}
                            <span className="block text-lime-400">
                                {heroData.title2}
                            </span>
                        </h1>


                        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            {heroData.description}
                        </p>


                        <div className="mt-6 flex flex-col sm:flex-row gap-6">

                            <button className="bg-lime-300 text-black px-10 py-4 text-sm md:text-base font-semibold rounded-md flex items-center justify-center gap-2 hover:scale-105 transition">
                                {heroData.Btn1}
                                <IconArrowRight className="w-5 h-5" />
                            </button>

                            <button className="border border-white/40 px-10 py-4 text-sm md:text-base font-semibold rounded-md hover:bg-white/10 transition">
                                {heroData.Btn2}
                            </button>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}