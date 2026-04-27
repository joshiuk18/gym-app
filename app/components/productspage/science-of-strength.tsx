import strengthData from "@/app/data/products/science-of-strength.json";

import { IconWindow, IconLeaf, IconBolt } from "@/app/components/icons/store-icons"

const icons = [IconBolt, IconLeaf, IconWindow];

export function Strength() {
    return (
        <section className="bg-black text-white py-18 border-y border-zinc-800">
            <div className="max-w-7xl mx-auto px-4">


                <h2 className="text-4xl font-black mb-12 mt-8 uppercase ">
                    {strengthData.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {strengthData.features.map((item, index) => {
                        const Icon = icons[index];
                        return (
                            <div
                                key={index}
                                className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900"
                            >
                                <div className="mb-6 text-2xl">
                                    {Icon && <Icon className="w-10 h-10 text-lime-400" />}
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}