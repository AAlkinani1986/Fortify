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
import StarRating from '../Organisation/StarRating'
import { useParams } from 'react-router'
import volunteers from './data/VolunteersInfo'
export default function VolunteerProfile() {
  const { volunteerId } = useParams()
  const volunteer = volunteers.find(
    (volunteer) => volunteer.firstName === volunteerId,
  )
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
            <img
              src={require(`./data/images/${volunteer.imageURL}`)}
              className="profile"
              alt="name"
            />
          </article>

          <article>
            <h3>
              <img src={contact} alt="" />
              Contacts
            </h3>

            <ul>
              <li>
                <img src={mail} alt="" />
                {volunteer.contacts.email}
              </li>
              <li>
                <img src={phone} alt="" />
                {volunteer.contacts.phoneNumber}
              </li>
            </ul>
          </article>
        </div>

        <div className="volunteer-card">
          <article>
            <h3>
              <img src={smile} alt="" /> About Me
            </h3>
            {volunteer.aboutUs}
          </article>

          <article>
            <h3>
              <img src={Qualification} alt="" />
            </h3>
            {volunteer.qualification.firstDegree}
            {volunteer.qualification.secondDegree}
          </article>
        </div>

        <div className="volunteer-card">
          <article>
            <h3>
              <img src={primary} alt="" />
              Primary Skills
            </h3>
            <div className="VCSkills">
              <p>Configure Microsoft Office</p>
              <StarRating
                ratingValue={volunteer.assessmentSummary.configureM365}
                status="disabled"
              />
            </div>
            <div className="VCSkills">
              <p>Operating system</p>
              <StarRating
                ratingValue={volunteer.assessmentSummary.PatchOS}
                status="disabled"
              />
            </div>
            <div className="VCSkills">
              <p>Regular Backups</p>
              <StarRating
                ratingValue={volunteer.assessmentSummary.backups}
                status="disabled"
              />
            </div>
            <div className="VCSkills">
              <p>Ransomware</p>
              <StarRating
                starNumber={3}
                ratingValue={volunteer.IncidentResponse.Ransomware}
                status="disabled"
              />
            </div>
            <div className="VCSkills">
              <p>Website Compromised</p>
              <StarRating
                starNumber={3}
                ratingValue={volunteer.IncidentResponse.WebsiteCompromised}
                status="disabled"
              />
            </div>
            <div className="VCSkills">
              <p>Data loss/theft</p>
              <StarRating
                starNumber={3}
                ratingValue={volunteer.IncidentResponse.dataLoss}
                status="disabled"
              />
            </div>
          </article>
        </div>
      </section>
    </section>
  )
}
