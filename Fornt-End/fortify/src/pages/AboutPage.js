// author
//date

/* 
More details goes here....
what the from about 
what supposed to do
*/
import teamJob from '../pages/image/handProject.png'
import hand from '../pages/image/hand.png'
import lock from '../pages/image/lock.png'
import '../component/homepage/Style.css'
const AboutPage = () => {
  return (
    <>
      {/* about section */}
      <div className="about">
        <div className="aboutIcons">
          <div className="firstAboutIcon">
            {/* <i class="fa-solid fa-handshake"></i> */}
            <img alt="" src={teamJob} className="firstImage" />
            <p className="textAboutIcon">Help Volunteers gain experinece </p>
          </div>
          <div className="secondAboutIcon">
            <img alt="" src={hand} className="secondImage" />
            <p className="aboutTextSecondIcon">
              Connected volunteers with organizations
            </p>
          </div>
          <div className="thirdAboutIcon">
            <img alt="" src={lock} className="secondImage" />
            <p className="aboutTextThirdIcon">
              Help organizations strengthen their security system
            </p>
          </div>
        </div>
        <div className="aboutText">
          <h4 className="aboutTextH">Connect, Access, and Secure</h4>
          <p className="aboutLongText">
            Fortify is a platform where volunteers and organizations can find
            the best match for their needs. <br />
            <br />
            We aim to help volunteers, such as students, graduates, and
            self-taught professionsals, and <br /> organizations with minimal
            resources to hire a cyber security team.
            <br />
            <br />
            Our goal is to fill in the gapes in the market. We want to rise
            employability for volunteers who are <br /> new to the field and
            help them gain experinece in cyber security. We also want to raise
            awarness <br /> about security threats to small organizations to
            help them protect their assets.
          </p>
        </div>
      </div>

      {/* end of the about section */}
    </>
  )
}
export default AboutPage
