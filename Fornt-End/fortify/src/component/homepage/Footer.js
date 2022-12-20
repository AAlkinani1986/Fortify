// author Ali Al-kinani
//date friday 2 Dec 2022

/* 
More details goes here....
what the from about 
what supposed to do
*/
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img className="footer_img" src={logo} alt=" fortify" />
        <h3>Fortify</h3>
      </div>
      <div className="footer_body">
        <a href="/">
          <p>Feature</p>
        </a>
        <a href="/">
          <p>Resources</p>
        </a>
        <a href="/">
          <p>Help</p>
        </a>
        <a href="/">
          <p>Privacy</p>
        </a>
      </div>
      <div className="footer_footer">
        <p>&copy; 2022 Fortify. All Right reserved</p>
      </div>
    </div>
  )
}
export default Footer
