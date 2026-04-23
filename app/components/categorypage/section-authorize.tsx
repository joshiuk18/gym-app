export function AuthorizeSection() {
    return (
        <section className="bg-black w-full py-12 sm:py-16 px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 p-6 sm:p-10 md:p-16">


                <div className="text-white max-w-xl text-center md:text-left">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide">
                        JOIN THE PHALANX
                    </p>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">
                        Get early access to lab reports and limited run drop alerts.
                    </p>
                </div>


                <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-0">
                    <input
                        type="email"
                        placeholder="ENTER SYSTEM EMAIL"
                        className="bg-white/10 text-white px-4 py-3 w-full sm:w-72 md:w-80 outline-none"
                    />
                    <button className="bg-gray-200 text-black px-6 py-3 font-black tracking-wider w-full sm:w-auto">
                        AUTHORIZE
                    </button>
                </div>

            </div>
        </section>
    );
}