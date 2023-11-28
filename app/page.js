import Header from "./components/Header"
import Footer from './components/Footer'
import GetInTouch from "./components/GetInTouch"
import OurTeam from "./components/OurTeam"



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
