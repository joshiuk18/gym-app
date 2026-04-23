import { Performance } from "@/app/components/productspage/performance";
import { Products } from "@/app/components/productspage/allproducts";
import { Strength } from "@/app/components/productspage/science-of-strength";


export default function HomePage() {

    return (
        <div className="min-h-0 flex-1">

            <Performance />
            <Products />
            <Strength />
        </div>
    );
}