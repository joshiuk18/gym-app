import productsData from "@/app/data/products/products.json";
import Image from "next/image";

type PageProps = {
    params: Promise<{
        subcategory: string;
    }>;
};

export default async function SubcategoryPage({ params }: PageProps) {

    const { subcategory } = await params;

    const product = productsData.productsPage.products.find(
        (item) => item.slug === subcategory
    );

    if (!product) {
        return (
            <section className="text-white p-10">
                Product not found
            </section>
        );
    }

    return (
        <section className="bg-black text-white min-h-screen p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">


                <div className="relative w-full aspect-square">
                    <Image
                        src={`/Products/${product.image}`}
                        alt={product.name}
                        fill
                        className="object-contain rounded-lg"
                        priority
                    />
                </div>


                <div className="space-y-6 flex flex-col justify-center">
                    <h1 className="text-3xl font-black">
                        {product.name}
                    </h1>

                    <p className="text-gray-400">
                        {product.description}
                    </p>

                    <p className="text-2xl font-bold">
                        &#8377;{product.price}
                    </p>

                    <div className="flex gap-2 flex-wrap">
                        {product.features.map((feature, idx) => (
                            <span
                                key={idx}
                                className="text-[9px] sm:text-[10px] bg-white/15 font-extrabold text-gray-400 px-3 py-1 rounded-full"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>

                    <button className="w-full font-bold rounded-lg cursor-pointer bg-white/15 py-2 text-sm sm:text-base hover:bg-lime-400 hover:text-black transition">
                        {product.cta}
                    </button>
                </div>

            </div>
        </section>
    );
}