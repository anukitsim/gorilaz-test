import Header from "@app/components/Header"
import Footer from "@app/components/Footer"
import GetInTouch from "@app/components/GetInTouch"
import OurTeam from "@app/components/OurTeam"




export default function Home() {
  return (
    <main className="flex flex-col gap-96">
      <Header />
     <OurTeam />
      <GetInTouch />
      <Footer />
    </main>
  )
}
