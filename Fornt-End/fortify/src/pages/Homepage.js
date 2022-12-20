import ContactUs from '../component/homepage/ContactUs'
import Footer from '../component/homepage/Footer'
import GetHelp from '../component/homepage/GetHelp'
import HPCarousels from '../component/homepage/HPCarousels'
import SecurityE from '../component/homepage/SecurityE'
import SecurityStatistics from '../component/homepage/SecurityStatistics'
import SecurityVideo from '../component/homepage/SecurityVideo'
import Volunteer from '../component/homepage/Volunteer'

const Homepage = () => {
  return (
    <>
      <HPCarousels />
      <br />
      <SecurityE />
      <SecurityVideo />
      <SecurityStatistics />
      <GetHelp />
      <Volunteer />
      <ContactUs />
      <Footer />
    </>
  )
}
export default Homepage
