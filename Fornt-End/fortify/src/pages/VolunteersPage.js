import '../component/volunteers/style.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import StarRating from '../component/Organisation/StarRating'
import volunteers from '../component/volunteers/data/VolunteersInfo'
const VolunteersPage = () => {
  return (
    <Row xs={1} md={3} className="g-4">
      {volunteers.map((volunteer) => (
        <Col key={volunteer.id}>
          <Card
            className="volunteersCard"
            border="success"
            style={{ width: 'auto' }}
          >
            <Card.Header className="volunteersHeaderCard">
              <img
                className="rounded-circle"
                src={require(`../component/volunteers/data/images/${volunteer.imageURL}`)}
                alt="name"
                width="70"
                height="70"
              />
              <div className="volunteerName">
                <h6>
                  {volunteer.firstName} {volunteer.lastName}
                </h6>
                <p>{volunteer.skills}</p>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>{volunteer.aboutUs}</Card.Text>
              <span className="volunteerCardBody"></span>
            </Card.Body>
            <Card.Body className="volunteersCC">
              <Card.Title>Consultants Capability</Card.Title>
              <Card.Text>
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
              </Card.Text>
              <div className="volunteerCardBody"></div>
            </Card.Body>
            <Card.Body className="volunteersIR">
              <Card.Title> Incident Response </Card.Title>
              <Card.Text>
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
              </Card.Text>
            </Card.Body>

            <Card.Footer>
              <a
                href={`/volunteers/${volunteer.firstName}`}
                className="btn btn-success"
              >
                More Info...
              </a>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
export default VolunteersPage
