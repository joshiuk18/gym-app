import Link from "next/link";
import { navbarData } from "@/app/data/navbar/navbar";

export function SiteHeader() {
    return (
        <header className="bg-black">
            <div className="flex w-full items-center justify-between px-6 py-4">

                <Link href="/" className="text-lime-400 font-extrabold text-2xl tracking-wide">
                    NUTRITION
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-md font-bold">
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

                <button className="md:block bg-lime-300 text-black font-semibold px-6 py-2 rounded-md hover:bg-lime-400 transition">
                    Shop Now
                </button>

            </div>
        </header>
    );
}