'use client'

import { useState } from 'react'

import Image from "next/image";
import productsData from "@/app/data/products/products.json";

import { IconSliders } from "@/app/components/icons/store-icons"

export function Products() {

    const [open, setOpen] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpen(open === index ? null : index);
    }

    return (
        <section className="bg-black w-full">
            <div className="py-10 sm:py-16">


                <div className="w-full bg-black text-gray-300 px-4 sm:px-6 py-4 my-6 sm:my-8 border-y border-gray-900">

                    <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">


                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6">

                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <span className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">
                                    Flavor:
                                </span>
                                <select className="w-full sm:w-auto bg-gray-900 text-white text-sm px-3 py-2 rounded-md focus:outline-none">
                                    <option>All Flavors</option>
                                    <option>Raw Cacao</option>
                                    <option>Arctic Vanilla</option>
                                    <option>Unflavoured</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <span className="text-xs sm:text-sm uppercase tracking-wide text-gray-400">
                                    Size:
                                </span>
                                <select className="w-full sm:w-auto bg-gray-900 text-white text-sm px-3 py-2 rounded-md focus:outline-none">
                                    <option>All Sizes</option>
                                    <option>1 kg</option>
                                    <option>2.5 kg</option>
                                </select>
                            </div>

                        </div>


                        <div className="flex flex-row sm:flex-row sm:items-center gap-3 sm:gap-6">
                            <span className="text-xs sm:text-sm text-gray-400">
                                Showing 12 results
                            </span>

                            <div className="flex items-center gap-4 hover:text-lime-400">
                                <IconSliders className='w-5 h-5' />

                                <span className="uppercase tracking-wide cursor-pointer text-xs sm:text-sm font-extrabold">
                                    Advanced Filters
                                </span>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {productsData.productsPage.products.map((item, index) => (
                        <div key={index} className="group text-white border border-gray-800 flex flex-col">

                            <div className="overflow-hidden">
                                <Image
                                    src={`/Products/${item.image}`}
                                    alt={item.name}
                                    width={500}
                                    height={1000}
                                    priority={index === 0}
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5 sm:p-8 space-y-6 flex flex-1 flex-col group-hover:bg-white/10">

                                <div className="flex justify-between gap-4">
                                    <h2 className="font-black text-lg sm:text-2xl group-hover:text-lime-400">
                                        {item.name}
                                    </h2>
                                    <p className="min-w-20 font-black text-lg sm:text-2xl text-end">
                                        &#8377;{item.price}
                                    </p>
                                </div>

                                <div className="text-xs sm:text-sm text-gray-400 flex-1">
                                    {item.description}
                                </div>

                                <div className="flex gap-2 flex-wrap">
                                    {item.features?.filter(Boolean).map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[9px] sm:text-[10px] bg-white/15 font-extrabold text-gray-400 px-3 py-1 rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                <div className="relative">
                                    <button
                                        onClick={() => handleClick(index)}
                                        className="w-full font-bold rounded-lg cursor-pointer bg-white/15 py-2 text-sm sm:text-base hover:bg-lime-400 hover:text-black transition"
                                    >
                                        {item.cta}
                                    </button>

                                    {open === index && (
                                        <div className="absolute md:-top-56 md:left-0 left-0 -top-40 w-full md:z-50 px-0 md:px-0">
                                            <div className="text-lg text-black bg-lime-400 md:p-20 p-14 rounded-xl">
                                                Your full address goes here
                                            </div>
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}