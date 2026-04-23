import footerData from "@/app/data/footer/footer.json";

export function SiteFooter() {
    return (
        <footer className="bg-black">
            <div className="mx-auto max-w-7xl px-6 pb-2 pt-16 grid grid-cols-1 md:grid-cols-4 gap-10">

                {footerData.map((sec, index) => {

                    if (sec.type === "brand") {
                        return (
                            <div key={index}>
                                <h2 className="text-lime-400 text-xl font-bold tracking-wider">
                                    {sec.title}
                                </h2>

                                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                                    {sec.description}
                                </p>

                                <div className="flex gap-3 mt-6">
                                    <button
                                        className="w-10 h-10 rounded-lg border border-white/10 hover:border-lime-400 hover:bg-lime-400 transition"
                                    />
                                    <button
                                        className="w-10 h-10 rounded-lg border border-white/10 hover:border-lime-400 hover:bg-lime-400 transition"
                                    />
                                </div>
                            </div>
                        );
                    }


                    if (sec.type === "section") {
                        return (
                            <div key={index}>
                                <h3 className="text-white text-sm font-semibold tracking-widest mb-4">
                                    {sec.title}
                                </h3>

                                <ul className="space-y-3 text-sm text-gray-500">
                                    {sec.items.map((item, i) => (
                                        <li key={i} className="hover:text-white transition cursor-pointer">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    }


                    if (sec.type === "newsletter") {
                        return (
                            <div key={index}>
                                <h3 className="text-white text-sm font-semibold tracking-widest mb-4">
                                    {sec.title}
                                </h3>

                                <p className="text-sm text-gray-500 mb-4">
                                    {sec.description}
                                </p>

                                <div className="flex items-center bg-gray-900 border border-white/10 rounded-md overflow-hidden">
                                    <input
                                        type="email"
                                        placeholder={sec.placeholder}
                                        className="w-full px-4 py-3 text-sm text-white outline-none placeholder-gray-500"
                                    />
                                    <button className="px-4 text-lime-400 hover:text-lime-300">
                                        →
                                    </button>
                                </div>
                            </div>
                        );
                    }


                    if (sec.type === "copyright") {
                        return (
                            <div
                                key={index}
                                className="col-span-full border-t border-white/10"
                            >
                                <div className="mx-auto max-w-7xl px-6 py-6 flex justify-center text-xs text-gray-500">
                                    <p>{sec.text}</p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </footer>
    );
}