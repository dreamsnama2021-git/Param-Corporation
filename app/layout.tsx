// app/layout.tsx
import './globals.css'
import { Playfair_Display, DM_Sans } from 'next/font/google'

const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata = {
  title: 'Param — Corporate Gifting Redefined',
  description: 'Premium corporate gifting solutions designed to impress clients and teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-[#f7f5f2] text-neutral-900">{children}</body>
    </html>
  )
}


