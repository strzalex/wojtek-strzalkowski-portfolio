import './globals.css'

export const metadata = {
  title: 'Wojtek Strzałkowski - Product Leader & AI Expert',
  description: 'Product Management Leader with expertise in AI and Gaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white to-blue-50">{children}</body>
    </html>
  )
}