import Image from "next/image";
import Link from "next/link";
import productsData from "@/app/data/products/products.json";

import { IconFlask } from "@/app/components/icons/store-icons"

export function Product() {
    const featured = productsData.homepage.products[0];
    const others = productsData.homepage.products.slice(1);

    return (
        <section className="bg-black/95 w-full py-20 text-white">
            <div className="max-w-7xl mx-auto px-6">


                <div className="mb-10">
                    <p className="font-headline font-bold tracking-widest uppercase text-xs text-[#ff7441]">
                        Featured Protocols
                    </p>

                    <div className="flex justify-between items-center">
                        <h2 className="text-4xl font-headline font-black mt-2">
                            THE CORE SERIES
                        </h2>

                        <Link
                            href="/products"
                            className="font-headline font-bold border-b border-primary-fixed/30 hover:border-primary-fixed transition-all pb-1 uppercase tracking-tighter text-[#cafd00]"
                        >
                            View All Products
                        </Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">


                    <div className="bg-zinc-900 rounded-xl flex flex-col justify-between relative overflow-hidden group">

                        <span className="absolute top-4 left-4 bg-lime-400 text-black text-xs px-3 py-1 rounded z-10 font-black uppercase">
                            {featured.tag}
                        </span>

                        <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden">
                            <Image
                                src={`/Products/${featured.image}`}
                                alt={featured.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-5 md:p-6">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg sm:text-xl font-headline font-black uppercase">
                                    {featured.name}
                                </h3>

                                <span className="text-lime-400 font-semibold">
                                    &#8377; {featured.price.toFixed(2)}
                                </span>
                            </div>

                            <p className="text-zinc-400 mb-4 text-sm sm:text-base line-clamp-2">
                                {featured.description}
                            </p>

                            <button
                                aria-label={`Add ${featured.name} to cart`}

                                className="w-full bg-white/5 py-3 mb-4 font-bold rounded-md transition uppercase hover:bg-lime-400 hover:text-black"
                            >
                                {featured.action?.label}
                            </button>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {others.map((product) => (
                            <div
                                key={product.id}
                                className="bg-zinc-900 rounded-xl  overflow-hidden group"
                            >

                                <div className="relative w-full h-40 overflow-hidden">
                                    <Image
                                        src={`/Products/${product.image}`}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-200 group-hover:scale-105"
                                    />
                                </div>


                                <div className="p-4">
                                    <p className="font-bold uppercase">
                                        {product.name}
                                    </p>

                                    <p className="text-lime-400 font-bold">
                                        ₹ {product.price.toFixed(2)}
                                    </p>

                                    {product.action?.type === "quick_add" && (
                                        <button
                                            aria-label={`Quick add ${product.name}`}
                                            className="text-xs mt-2 text-gray-400 hover:text-lime-400 font-bold uppercase"
                                        >
                                            {product.action?.label} +
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}

                        <div className="bg-zinc-800 p-6 rounded-xl flex flex-col justify-between h-full">

                            <div>
                                <div className="flex justify-between items-start mb-6">

                                    <IconFlask className="w-8 h-8 text-lime-400" />

                                    <p className="text-lime-400 border py-1 px-2 bg-lime-400/10 uppercase text-[9px] font-extrabold tracking-wide">
                                        {productsData.homepage.bundle.tag}
                                    </p>
                                </div>
                                <div className="mt-16">
                                    <p className="font-semibold uppercase text-lg tracking-wide">
                                        {productsData.homepage.bundle.title}
                                    </p>

                                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                        {productsData.homepage.bundle.description}
                                    </p>

                                    <p className="text-lime-400 text-sm mt-4 uppercase font-semibold cursor-pointer">
                                        {productsData.homepage.bundle.action.label}
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}