// import topImage from "../../images/top-image.png";
import smile from '../../images/smile.svg'

import phone from '../../images/phone.svg'
import mail from '../../images/mail.svg'
import primary from '../../images/primary.svg'
import Qualification from '../../images/Qualification.svg'
import contact from '../../images/contact.svg'
import './style.css'
import StarRating from '../Organisation/StarRating'
import { useParams } from 'react-router'
import Spinner from 'react-bootstrap/Spinner'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { App } from 'realm-web'
import { APP_ID } from '../../realm/constants'
export default function VolunteerProfile() {
  const { volunteerId } = useParams()
  const [loadVolunteer, setLoadVolunteer] = useState(false)
  const [volunteer, setVolunteer] = useState([])

  const app = new App(APP_ID)
  const loadData = async () => {
    const rests = await app.currentUser
      .mongoClient('mongodb-atlas')
      .db('Fortify')
      .collection('Volunteers')
      .findOne({
        volunteer_id: volunteerId,
      })

    return { success: true, data: rests }
  }

  useEffect(() => {
    ;(async () => {
      setLoadVolunteer(false)
      let res = await loadData()
      console.log(res)
      if (res.success) {
        setVolunteer(res.data)

        setLoadVolunteer(true)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loadVolunteer ? (
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
                <img src={volunteer.image} className="profile" alt="name" />
              </article>

              <article>
                <h3>
                  <img src={contact} alt="" />
                  Contacts
                </h3>

                <ul>
                  <li>
                    <img src={mail} alt="" />
                    {volunteer.email}
                  </li>
                  <li>
                    <img src={phone} alt="" />
                    {volunteer.phoneNumber}
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
                {volunteer.qualification}
              </article>
            </div>

            <div className="volunteer-card">
              <article>
                <h3>
                  <img src={primary} alt="" />
                  {volunteer.skills}
                </h3>
                <div className="VCSkills">
                  <p>Configure Microsoft Office</p>
                  <StarRating
                    ratingValue={volunteer.environmentHIP.configureM365}
                    status="disabled"
                  />
                </div>
                <div className="VCSkills">
                  <p>Operating system</p>
                  <StarRating
                    ratingValue={volunteer.environmentHIP.PatchOS}
                    status="disabled"
                  />
                </div>
                <div className="VCSkills">
                  <p>Regular Backups</p>
                  <StarRating
                    ratingValue={volunteer.environmentHIP.backups}
                    status="disabled"
                  />
                </div>
                <div className="VCSkills">
                  <p>Ransomware</p>
                  <StarRating
                    starNumber={3}
                    ratingValue={volunteer.incidentResponse.Ransomware}
                    status="disabled"
                  />
                </div>
                <div className="VCSkills">
                  <p>Website Compromised</p>
                  <StarRating
                    starNumber={3}
                    ratingValue={volunteer.incidentResponse.WebsiteCompromised}
                    status="disabled"
                  />
                </div>
                <div className="VCSkills">
                  <p>Data loss/theft</p>
                  <StarRating
                    starNumber={3}
                    ratingValue={volunteer.incidentResponse.dataLoss}
                    status="disabled"
                  />
                </div>
              </article>
            </div>
          </section>
        </section>
      ) : (
        <div className="btnLoader">
          <Button className="loader" variant="success" disabled>
            <Spinner
              className="spinnerLoad"
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      )}
    </>
  )
}
