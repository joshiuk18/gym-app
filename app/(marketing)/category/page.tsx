import { HeroSection } from "@/app/components/categorypage/section-hero";
import { CategorySection } from "@/app/components/categorypage/section-category";

export default function HomePage() {

    return (
        <div className="min-h-0 flex-1">
            <HeroSection />
            <CategorySection />
        </div>
    );
}