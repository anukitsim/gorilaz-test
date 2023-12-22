
import OurTeam from '@app/components/OurTeam'
import Header from '@app/components/Header'
import GetInTouch from '@app/components/GetInTouch'
import Footer from '@app/components/Footer'
import StickyComponent from '@app/components/StickyComponent'
import ScrollToTop from '@app/components/ScrollToTop'



export default function OurTeamPage() {




  return (
    <main className="">
      <Header />
     <OurTeam />
     <GetInTouch />
        <Footer />
        <div className='md:block sm:hidden'><StickyComponent /></div>
      <ScrollToTop />
      
    </main>
  )
}
