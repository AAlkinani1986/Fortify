// author DAVID Wang
//date

/* 
More details goes here....
what the from about 
what supposed to do
*/
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import React from 'react'
import '../component/Organisation/style.css'
import Envelope from '../images/envelope-fill.svg'
import Phone from '../images/phone-fill.svg'
import Telephone from '../images/telephone.png'
import SmileyFace from '../images/emoji-smile.png'
// import useParams to fetch the data from the url
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
//import star component
import StarRating from '../component/Organisation/StarRating'
import { App } from 'realm-web'
import { APP_ID } from '../realm/constants'

const OrganisationProfile = () => {
  const { organizationId } = useParams()
  console.log('id', organizationId)
  const [orgLoaded, setOrgLoaded] = useState(false)
  const [environmentHIP, setEnvironmentHIP] = useState({})
  const [organization, setOrganization] = useState([])

  const app = new App(APP_ID)
  let rests = app.currentUser
    .mongoClient('mongodb-atlas')
    .db('Fortify')
    .collection('Organizations')
  const loadData = async () => {
    try {
      let org = await rests.findOne({
        organization_id: organizationId,
      })

      setEnvironmentHIP(org.environmentHIP)

      return { success: true, data: org }
    } catch (error) {
      console.log('error', error)
    }
  }

  console.log('organization', environmentHIP)

  useEffect(() => {
    ;(async () => {
      setOrgLoaded(false)
      let res = await loadData()
      console.log(res)
      if (res.success) {
        setOrganization(res.data)

        setOrgLoaded(true)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {orgLoaded ? (
        <div className="row">
          <div className="column">
            <table>
              <tr>
                <td>
                  <div className="Card">
                    <div className="upperContainer">
                      <div className="imageContainer">
                        <img
                          src={organization.image}
                          alt=""
                          height="150px"
                          width="300px"
                        />
                      </div>
                    </div>
                    <div className="lowerContainer">
                      <h3> {organization.name} </h3>
                      <h4> {organization.address} </h4>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="Card2">
                    <div className="upperContainer2 ">
                      <img src={Telephone} alt="Telephone" />
                      <h3 className="inlineposition"> Contacts</h3>
                      <div className="lowerContainer">
                        <br />
                        <img src={Envelope} alt="Envelope" />
                        <h3 className="inlineposition smalltext">
                          {organization.email}
                        </h3>
                        <br />
                        <br />
                        <img src={Phone} alt="telephone" />
                        <h3 className="inlineposition smalltext">
                          {organization.phoneNumber}
                        </h3>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div className="column">
            <table>
              <tr>
                <td>
                  <div className="center3">
                    <div className="Card3">
                      <div className="upperContainer2 ">
                        <img src={SmileyFace} alt="SmileyFace" />
                        <h3 className="inlineposition"> About Us</h3>
                        <div className="lowerContainer">
                          <br />
                          <h3 className="aboutus">{organization.aboutUs}</h3>
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div className="column">
            <table>
              <tr>
                <td>
                  <div className="Card4">
                    <div className="upperContainer3 ">
                      <img src={SmileyFace} alt="SmileyFace" />
                      <h3 className="inlineposition">
                        {' '}
                        Consultants Capability
                      </h3>

                      <div className="TCDesc">
                        <p>Application Control</p>
                        <StarRating
                          ratingValue={environmentHIP.applicationControl}
                          status="disabled"
                        />
                      </div>
                      <div className="TCDesc">
                        <p>Patch applications</p>
                        <StarRating
                          ratingValue={environmentHIP.PatchApp}
                          status="disabled"
                        />
                      </div>
                      <div className="TCDesc">
                        <p>Configure Microsoft office</p>
                        <StarRating
                          ratingValue={environmentHIP.configureMS365}
                          status="disabled"
                        />
                      </div>
                      <div className="TCDesc">
                        <p>Use Web Application</p>
                        <StarRating
                          ratingValue={environmentHIP.userWebAPP}
                          status="disabled"
                        />
                      </div>

                      <div className="TCDesc">
                        <p>Multi-factor Authentication</p>
                        <StarRating
                          ratingValue={environmentHIP.multiFactorAuth}
                          status="disabled"
                        />
                      </div>
                      <div className="TCDesc"></div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
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
export default OrganisationProfile
