import Header from "../components/Header"
import Footer from '../components/Footer'
import GetInTouch from "@app/components/GetInTouch"




export default function Home() {
  return (
    <main className="flex flex-col gap-96">
      <Header />
      <h1 className="text-white text-center">HOME page in progress..</h1>
      <GetInTouch />
      <Footer />
    </main>
  )
}
