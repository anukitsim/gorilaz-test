import Behindthescene from "@app/components/Behindthescene";
import Header from '@app/components/Header'

import Footer from '@app/components/Footer'
import StickyComponent from '@app/components/StickyComponent'
import ScrollToTop from '@app/components/ScrollToTop'





export default function Home() {
  return (
    <main className="">
      <Header />
     <Behindthescene />
     <div className="mt-[10%]">
     <Footer />
     </div>
    
        <div className='md:block sm:hidden'><StickyComponent /></div>
      <ScrollToTop />
    </main>
  )
}
