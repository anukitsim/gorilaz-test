import Portfolio from "@app/components/Portfolio";
import Header from '@app/components/Header'
import Footer from '@app/components/Footer'
import StickyComponent from '@app/components/StickyComponent'
import ScrollToTop from '@app/components/ScrollToTop'
import GetInTouchSubjectServices from "@app/components/GetInTouchSubjectServices";


export default function Home() {
  return (
    <main className="w-full">
      <Header />
     <Portfolio />
    
     <GetInTouchSubjectServices />
        <Footer />
        <div className='md:block sm:hidden'><StickyComponent /></div>
      <ScrollToTop />
      
    </main>
  );
}
