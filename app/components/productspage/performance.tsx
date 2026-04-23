import performanceData from "@/app/data/products/performance.json";

export function Performance() {
    return (
        <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <p className="text-orange-500 uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
                        {performanceData.tagline}
                    </p>

                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 uppercase leading-tight">
                        {performanceData.title}
                    </h2>

                    <p className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">
                        {performanceData.description}
                    </p>
                </div>


                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start md:justify-end pt-6 md:pt-10">
                    {performanceData.stats.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-1 sm:gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-gray-950 
                            ${index === 0 ? "border-l-4 border-lime-400" : "border-l-4 border-orange-400"}`}
                        >
                            <p className={`text-xl sm:text-2xl font-extrabold 
                                ${index === 0 ? "text-lime-400" : "text-orange-400"}`}
                            >
                                {item.value}
                            </p>

                            <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}