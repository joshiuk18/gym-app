import type { ReactNode } from "react";

import { SiteHeader } from "../components/layout/header";
import { SiteFooter } from "../components/layout/footer";

export default function MarketingLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </>
    );
}
