// import topImage from "../../images/top-image.png";
import smile from '../../images/smile.svg'
import lavine from '../../images/lavine.png'
import arrow from '../../images/arrow.svg'
import phone from '../../images/phone.svg'
import mail from '../../images/mail.svg'
import primary from '../../images/primary.svg'
import Qualification from '../../images/Qualification.svg'
import contact from '../../images/contact.svg'
import './style.css'

export default function Profile() {
  return (
    <section
      style={{
        margin: 'auto',
        maxWidth: '1280px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItem: 'flex-end',
          justifyContent: 'flex-end',
          marginTop: '2rem',
        }}
      >
        <button className="btn-green">Complete your profile</button>
      </div>

      <section className="volunteer-container">
        <div className="volunteer-card">
          <article>
            <img src={lavine} className="profile" alt="name" />
          </article>

          <article>
            <h3>
              <img src={contact} alt="" /> Contacts
            </h3>

            <ul>
              <li>
                <img src={mail} alt="" /> example@email.com
              </li>
              <li>
                <img src={phone} alt="" /> Phone Number
              </li>
            </ul>
          </article>
        </div>

        <div className="volunteer-card">
          <article>
            <h3>
              <img src={smile} alt="" /> About Me
            </h3>
            <p className="warning">To be completed!</p>
          </article>

          <article>
            <h3>
              <img src={Qualification} alt="" /> Qualifications
            </h3>
            <p className="warning">To be completed!</p>
          </article>
        </div>

        <div className="volunteer-card">
          <article>
            <h3>
              <img src={primary} alt="" />
              Primary Skills
            </h3>
            <ul>
              <li>
                <img src={arrow} alt="" /> Ethical hacking
              </li>
              <li>
                <img src={arrow} alt="" /> Intrusion Detention
              </li>
              <li>
                <img src={arrow} alt="" /> SIEM Management
              </li>
              <li>
                <img src={arrow} alt="" /> Incident Handling
              </li>
              <li>
                <img src={arrow} alt="" /> Problem Solving
              </li>
              <li>
                <img src={arrow} alt="" /> Teamwork
              </li>
            </ul>
          </article>
        </div>
      </section>
    </section>
  )
}
