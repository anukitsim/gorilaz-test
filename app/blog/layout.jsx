
import '../../styles/globals.css'
import Header from '@app/components/Header'
import GetInTouch from '@app/components/GetInTouch'
import Footer from '@app/components/Footer'
import StickyComponent from '@app/components/StickyComponent'
import ScrollToTop from '@app/components/ScrollToTop'



export const metadata = {
  
  description: 'blog page',
  icons: {
    icon: '/images/black-logo.png'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <GetInTouch />
        <Footer />
        <div className='md:block sm:hidden'><StickyComponent /></div>
      <ScrollToTop />
      
        </body>
    </html>
  )
}