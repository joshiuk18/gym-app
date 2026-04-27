import Image from "next/image";
import category from "@/app/data/category/category.json";

export function HeroSection() {
    return (
        <section className="bg-black w-full">
            <div className="p-8 max-w-375 mx-auto">
                <div className="relative w-full h-[70vh] min-h-100 overflow-hidden rounded-lg">

                    <Image
                        src={`/Category/${category.hero_section.image}`}
                        alt="hero"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50 transition" />

                    <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-6 md:px-8 lg:px-8 text-white">

                        <p className="text-lime-400 tracking-[0.3em] text-[10px] sm:text-xs md:text-sm mb-4 uppercase">
                            {category.hero_section.tagline}
                        </p>

                        <h1 className="font-extrabold leading-[0.9]">
                            <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                FUEL YOUR
                            </span>
                            <span className="block text-lime-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                EVOLUTION
                            </span>
                        </h1>

                        <p className="max-w-md md:max-w-lg mt-5 md:mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            {category.hero_section.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}