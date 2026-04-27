import guaranteeData from "@/app/data/homepage/guarantee.json";

import { IconBolt, IconCheck, IconBioscience } from "@/app/components/icons/store-icons"

const icons = [IconBolt, IconCheck, IconBioscience];

export function Guarantee() {
    return (
        <section className="bg-black/95 w-full py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row items-stretch md:items-center md:gap-10">

                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-2 flex-1">
                        {guaranteeData.map((sec, index) => {
                            const Icon = icons[index];

                            return (
                                <div
                                    key={index}
                                    className="group px-10 py-14 rounded-lg transition duration-200 hover:bg-white/5"
                                >
                                    <div className="mb-4">
                                        {Icon && <Icon className="w-10 h-10 text-lime-400" />}
                                    </div>

                                    <div className="text-white font-extrabold text-2xl tracking-wide mb-3 group-hover:text-lime-400 transition-colors">
                                        {sec.title}
                                    </div>

                                    <div className="text-gray-400 text-base leading-relaxed">
                                        {sec.description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}