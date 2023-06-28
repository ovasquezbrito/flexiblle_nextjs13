import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Flexible',
  description: 'Muestre y descubra proyectos de desarrolladores destacados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
