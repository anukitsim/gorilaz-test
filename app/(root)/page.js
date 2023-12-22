
import Header from '@app/components/Header';
import GetInTouch from '@app/components/GetInTouch';
import Footer from '@app/components/Footer';
import Home from '@app/components/Home';
import StickyComponent from '@app/components/StickyComponent';
import ScrollToTop from '@app/components/ScrollToTop';
import { Suspense } from 'react';
import Loading from './loading';

export default function Root() {


  return (
    <main>
      <Suspense fallback={<Loading />}>
      <Header />
      <Home />
      <GetInTouch />
      <Footer />
      </Suspense>
     
      <ScrollToTop />
      <div className='md:block sm:hidden'>
        <StickyComponent />
      </div>
    </main>
  );
}
