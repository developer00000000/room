import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Hamkorlar from "../components/hamkorlar/Hamkorlar"
import Hero from "../components/hero/Hero"
import Mahsulotlar from "../components/mahsulotlar/Mahsulotlar"
import Mijozlar from "../components/mijozlar/Mijozlar"
import Shourumlar from "../components/shourumlar/Shourumlar"


const Home = () => {
  return (
    <div>
       <Hero/>
       <Mahsulotlar/>
       <About/>
       <Mijozlar/>
       <Hamkorlar/>
       <Shourumlar/>
       <Contact/>
    </div>
  )
}

export default Home