import "../../styles/globals.css";
import Header from "@app/components/Header";

import Footer from "@app/components/Footer";
import StickyComponent from "@app/components/StickyComponent";
import ScrollToTop from "@app/components/ScrollToTop";
import GetInTouchSubjectServices from "@app/components/GetInTouchSubjectServices";

export const metadata = {
 
  description: 'services',
  icons: {
    icon: '/images/black-logo.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <GetInTouchSubjectServices />
        <Footer />
        <div className="md:block sm:hidden">
          <StickyComponent />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
