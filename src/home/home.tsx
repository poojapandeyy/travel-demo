import Navbar from '../components/header/navbar'
import Grouptour from '../components/Grouptour/Grouptour'
import Icons from '../components/icons/Icons'
import Autumandwintertour from '../components/Autumnandwintertour/Autumnandwintertour'
import Internationalgrouptour from '../components/Internationalgrouptour/Internationalgrouptour'
import Internationalfreeandeasytour from '../components/Internationalfreeandeasytour/Internationalfreeandeasytour'
import Domesticgrouptour from '../components/Domesticgrouptour/Domesticgrouptour'
import Internationaltopdestination from '../components/Topdestination/Topdestination'
import Footer from '../components/Footer/footer'
import Termsandcondition from '../components/terms&condition/terms&condiition'
import Privacypolicy from '../components/privacypolicy/privacypolicy'

const Home = () => {
  return (
    <div>
      <Icons />
      <Navbar />
      <Grouptour />
      <Autumandwintertour />
      <Internationalgrouptour />
      <Internationalfreeandeasytour />
      <Domesticgrouptour />
      <Internationaltopdestination />
       <Footer />
       <Termsandcondition />
       <Privacypolicy />
    </div>
  )
}

export default Home
