import Navbar from "@/components/Navbar"
import "./globals.css"

export const metadata = {
  title: 'Bits to Bytes',
  description: 'Coding Community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#000515]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
