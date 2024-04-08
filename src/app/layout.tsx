import Navbar from "@/components/Navbar";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react"

export const metadata = {
    title: "Bits to Bytes",
    description: "Coding Community",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-[#000515] text-[10px] lg:text-[16px] ">
                {/* <Analytics /> */}
                <Navbar />
                {children}
            </body>
        </html>
    );
}
