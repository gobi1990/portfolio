import Link from 'next/link'
import './globals.css'
import { inter, poppins, poppinsMedium } from './utils/fonts'
import { ScrollProvider, useScroll, } from './ScrollContext'
import { NavBarNavigation } from './components/navigation'


export const metadata = {
  title: 'Gobishankar Annalingam - Mobile App | FrontEnd | Game Developer',
  description: 'Portfolio showcasing mobile app , web app & game development projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <ScrollProvider>
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-background text-dark-onBackground`}>
      <header
            className="sticky top-0 z-50 transition-all duration-200 glass-effect-without-border"
            id="header"
          >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link
                href="/"
                className={`text-2xl font-bold text-dark-primary hover:text-dark-secondary transition-colors ${poppins.className}`}
              >
                Gobishankar Portfolio
              </Link>
              <nav>
                <NavBarNavigation />
              </nav>
            </div>
          </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-dark-surface py-4 mt-8 glass-effect-without-border">
          <div className="container mx-auto px-4 text-center text-dark-onSurface">
            © {new Date().getFullYear()} Gobishankar Annalingam. All rights reserved.
          </div>
        </footer>
        {/* <Script
          id="header-scroll"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (${initHeaderScroll.toString()})();
            `,
          }}
        /> */}
      </body>
    </html>
    </ScrollProvider>
  )
}
