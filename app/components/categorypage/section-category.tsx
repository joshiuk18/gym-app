import Image from "next/image";
import category from "@/app/data/category/category.json";

export function CategorySection() {
    return (
        <section className="bg-black p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 h-250">

                {category.sections.map((item, index) => (
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
                            <span className="text-xs uppercase tracking-widest text-lime-400 mb-2">
                                {item.category}
                            </span>

                            <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-300 mb-4 max-w-md">
                                {item.description}
                            </p>

                            <button className="w-fit px-4 py-2 text-sm font-semibold bg-lime-400 text-black rounded-md hover:bg-lime-300 transition">
                                {item.btn}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}