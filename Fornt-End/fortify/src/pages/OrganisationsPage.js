import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
//import organizations from '../component/Organisation/data/organisationInfo'
import StarRating from '../component/Organisation/StarRating'
import { useState, useEffect } from 'react'

import { App } from 'realm-web'
import { APP_ID } from '../realm/constants'
const OrganisationsPage = () => {
  const [orgsLoaded, setOrgsLoaded] = useState(false)
  const [organizations, setOrganizations] = useState([])
  const app = new App(APP_ID)
  const loadData = async () => {
    const rests = await app.currentUser
      .mongoClient('mongodb-atlas')
      .db('Fortify')
      .collection('Organizations')
      .find()

    return { success: true, data: rests }
  }

  useEffect(() => {
    ;(async () => {
      setOrgsLoaded(false)
      let res = await loadData()
      console.log(res)
      if (res.success) {
        setOrganizations(res.data)

        setOrgsLoaded(true)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {orgsLoaded ? (
        <Row xs={1} md={3} className="g-4">
          {organizations.map((organization) => (
            <Col key={organization.organization_id}>
              <Card
                className="organizationsCard"
                border="success"
                style={{ width: 'auto' }}
              >
                <Card.Header className="organizationsHeaderCard">
                  <img
                    className="rounded"
                    src={organization.image}
                    alt="name"
                    width="150"
                    height="150"
                  />
                  <div className="organizationName">
                    <h6>{organization.name}</h6>
                    <p>{organization.email}</p>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>About Me</Card.Title>
                  <Card.Text>{organization.aboutUs}</Card.Text>
                  <span className="organizationCardBody"></span>
                </Card.Body>
                <Card.Body className="organizationsCC">
                  <Card.Title>Consultants Capability</Card.Title>

                  <Card.Text>
                    <div className="VCSkills">
                      <p>Configure Microsoft Office</p>
                      <StarRating
                        ratingValue={organization.environmentHIP.configureMS365}
                        status="disabled"
                      />
                    </div>
                    <div className="VCSkills">
                      <p>Operating system</p>
                      <StarRating
                        ratingValue={organization.environmentHIP.patchOP}
                        status="disabled"
                      />
                    </div>
                    <div className="VCSkills">
                      <p>Regular Backups</p>
                      <StarRating
                        ratingValue={organization.environmentHIP.backups}
                        status="disabled"
                      />
                    </div>
                  </Card.Text>
                  <div className="organizationCardBody"></div>
                </Card.Body>
                <Card.Body className="organizationsIR">
                  <Card.Title> Incident Response </Card.Title>
                  <Card.Text>
                    <div className="VCSkills">
                      <p>Ransomware</p>
                      <StarRating
                        starNumber={3}
                        ratingValue={
                          organization.incidentResponse.ransomwareAttack
                        }
                        status="disabled"
                      />
                    </div>
                    <div className="VCSkills">
                      <p>Website Compromised</p>
                      <StarRating
                        starNumber={3}
                        ratingValue={organization.incidentResponse.websiteCom}
                        status="disabled"
                      />
                    </div>
                    <div className="VCSkills">
                      <p>Data loss/theft</p>
                      <StarRating
                        starNumber={3}
                        ratingValue={organization.incidentResponse.dataLoss}
                        status="disabled"
                      />
                    </div>
                  </Card.Text>
                </Card.Body>

                <Card.Footer>
                  <a
                    href={`/organizations/${organization.organization_id}`}
                    className="btn btn-success"
                  >
                    More Info...
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
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
export default OrganisationsPage
