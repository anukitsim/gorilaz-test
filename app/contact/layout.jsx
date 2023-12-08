
import '../../styles/globals.css'
import Header from '@app/components/Header'
import GetInTouch from '@app/components/GetInTouch'
import Footer from '@app/components/Footer'
import StickyComponent from '@app/components/StickyComponent'
import ScrollToTop from '@app/components/ScrollToTop'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <GetInTouch />
        <Footer />
        <StickyComponent />
      <ScrollToTop />
      
        </body>
    </html>
  )
}
