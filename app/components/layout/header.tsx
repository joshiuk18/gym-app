import Link from "next/link";
import { navbarData } from "@/app/data/navbar/navbar";

export function SiteHeader() {
    return (
        <header className="bg-black">
            <div className="flex flex-wrap md:flex-nowrap w-full items-center justify-between px-6 py-4">

                <Link href="/" className="text-lime-400 font-extrabold text-2xl tracking-wide">
                    NUTRITION
                </Link>

                <nav className="flex w-full md:w-auto order-3 md:order-0 justify-around mt-4 md:mt-0 items-center gap-4 md:gap-8 text-md font-bold">
                    {navbarData.map((navItem) => (
                        <Link
                            key={navItem.slug}
                            href={`/${navItem.slug}`}
                            className="text-gray-400 hover:text-lime-300"
                        >
                            {navItem.label}
                        </Link>
                    ))}
                </nav>

                <button className="bg-lime-300 text-black font-semibold px-6 py-2 rounded-md hover:bg-lime-400 transition">
                    Shop Now
                </button>

            </div>
        </header>
    );
}