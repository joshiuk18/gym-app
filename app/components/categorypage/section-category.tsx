import Image from "next/image";
import category from "@/app/data/category/category.json";

import { IconSparkles, IconDumble, IconDroplet, IconBolt } from "@/app/components/icons/store-icons"

const icons = [IconDumble, IconBolt, IconSparkles, IconDroplet];

export function CategorySection() {
    return (
        <section className="bg-black p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 h-250">

                {category.sections.map((item, index) => {
                    const Icon = icons[index];
                    return (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden group hover:border hover:border-lime-800"

                        >
                            <Image
                                src={`/Category/${item.image}`}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/50 transition" />

                            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                                <div className="flex gap-4">
                                    <div>
                                        {Icon && <Icon className="w-5 h-5 text-lime-400" />}
                                    </div>

                                    <div>
                                        <p className="text-lime-400 border py-1 px-3 rounded-4xl bg-lime-400/20 uppercase text-[10px] font-extrabold tracking-wide">
                                            {item.category}
                                        </p>
                                    </div>
                                </div>

                                <h3 className="w-96 text-xl md:text-4xl font-black mb-2 leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-300 mb-4 max-w-md">
                                    {item.description}
                                </p>

                                <button className="w-fit px-5 py-3 text-sm font-semibold bg-gray-800 text-white rounded-md hover:bg-lime-400 hover:text-black transition">
                                    {item.btn}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}