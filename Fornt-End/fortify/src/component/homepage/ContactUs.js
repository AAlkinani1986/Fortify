// author:- Harry Singh
//date:- 02/12/2022

const ContactUs = () => {
  return (
    <>
      <div className="contactUs">
        <h1 className="contactB">Contact</h1>
        <p className="sty">Let's stay connected</p>
        <p className="styT">
          Its never been eaiser to get in touch with Fortify. Call us, use our
          live chat widget or email <br /> and we'll get back to you as soon as
          possible!{' '}
        </p>
        <h3 className="c">
          <div id="email">
            <p className="emailIcon">
              <i className="fa-sharp fa-solid fa-envelope-open"></i>
            </p>
            Email
            <p className="EmailID">contact@fortify.com</p>
          </div>
          <div id="phone">
            <p className="phoneIcon">
              {' '}
              <i className="fa-solid fa-phone"></i>
            </p>
            Phone
            <p className="phoneNumber">+7-843-672-431</p>
          </div>
          <div id="social">
            <p className="socialIcon">
              <i className="fa-solid fa-group-arrows-rotate"></i>
            </p>
            Socials
            <p className="socialIcons">
              <i className="fa-brands fa-facebook-f first"></i>

              <i className="fa-brands fa-twitter second"></i>

              <i className="fa-brands fa-instagram third"></i>

              <i className="fa-brands fa-linkedin fourth"></i>
            </p>
          </div>
        </h3>
      </div>
      <div className="form">
        <p className="contactFormName">Email</p>
        <input
          type="text"
          className="emailInput"
          placeholder="example@post.com"
        />
        <br />
        <br />

        <p className="contactFormName">Message</p>
        <textarea
          type="text"
          className="message"
          placeholder="Your message here"
        ></textarea>
        <input type="button" className="submitBUtton" value="Send" />
      </div>
      {/* <div className="footer"></div> */}
    </>
  )
}
export default ContactUs
