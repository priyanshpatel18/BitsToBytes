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
      <body>{children}</body>
    </html>
  )
}
