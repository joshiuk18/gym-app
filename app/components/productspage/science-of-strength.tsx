import strengthData from "@/app/data/products/science-of-strength.json";

export function Strength() {
    return (
        <section className="bg-black text-white py-18 border-y border-zinc-800">
            <div className="max-w-7xl mx-auto px-4">


                <h2 className="text-4xl font-black mb-12 mt-8 uppercase ">
                    {strengthData.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {strengthData.features.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900"
                        >
                            <div className="mb-6 text-2xl">
                                <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-white/10 bg-black hover:bg-lime-400 transition">
                                </button>
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}