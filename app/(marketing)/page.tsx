import { Hero } from "../components/landingpage/section-hero";
import { Product } from "../components/landingpage/section-products";
import { Manifesto } from "../components/landingpage/section-manifesto";
import { Guarantee } from "../components/landingpage/section-guarantee";


export default function HomePage() {

    return (
        <div className="min-h-0 flex-1">

            <Hero />
            <Product />
            <Manifesto />
            <Guarantee />
        </div>
    );
}
