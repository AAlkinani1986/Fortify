import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/user.context'
import useStarRating from '../Organisation/useStar'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
export default function VolunteerForm(props) {
  const { InsertVolunteer, emailPasswordSignup } = useContext(UserContext)
  const { render, starsRating } = useStarRating()
  const application = render('applicationControl')
  const PatchApplication = render('PatchApplication')
  const configureMS365 = render('configureMS365')
  const userWebAPP = render('userWebAPP')
  const restrictAdminP = render('restrictAdminP')
  const patchOP = render('patchOP')
  const multiFactorAuth = render('multiFactorAuth')
  const backups = render('backups')
  const penetration = render('penetration')
  const developCp = render('developCp')
  const developCS = render('developCS')
  const developCA = render('developCA')
  const ransomwareAttack = render('ransomwareAttack')
  const websiteCom = render('websiteCom')
  const dataLoss = render('dataLoss')
  const malwareDetect = render('malwareDetect')
  const userAccountComm = render('userAccountComm')

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    skills: '',
    qualification: '',
    address: '',
    aboutUs: '',
    phoneNumber: '',
    email: '',
    image: '',
    applicationControl: '',
    PatchApplication: '',
    configureMS365: '',
    userWebAPP: '',
    restrictAdminP: '',
    patchOP: '',
    multiFactorAuth: '',
    backups: '',
    penetration: '',
    developCp: '',
    developCS: '',
    developCA: '',
    ransomwareAttack: '',
    websiteCom: '',
    userAccountComm: '',
    dataLoss: '',
    malwareDetect: '',
  })
  // This function will be called whenever the user edits the form.
  const onFormInputChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  function starLoadForm() {
    form.email = props.form.email
    form.applicationControl = !starsRating.applicationControl
      ? 0
      : starsRating.applicationControl
    form.PatchApplication = !starsRating.PatchApplication
      ? 0
      : starsRating.PatchApplication
    form.configureMS365 = !starsRating.configureMS365
      ? 0
      : starsRating.configureMS365
    form.userWebAPP = !starsRating.userWebAPP ? 0 : starsRating.userWebAPP
    form.restrictAdminP = !starsRating.restrictAdminP
      ? 0
      : starsRating.restrictAdminP
    form.patchOP = !starsRating.patchOP ? 0 : starsRating.patchOP
    form.multiFactorAuth = !starsRating.multiFactorAuth
      ? 0
      : starsRating.multiFactorAuth
    form.backups = !starsRating.backups ? 0 : starsRating.backups
    form.penetration = !starsRating.penetration ? 0 : starsRating.penetration
    form.developCp = !starsRating.developCp ? 0 : starsRating.developCp
    form.developCS = !starsRating.developCS ? 0 : starsRating.developCS
    form.developCA = !starsRating.developCA ? 0 : starsRating.developCA
    form.ransomwareAttack = !starsRating.ransomwareAttack
      ? 0
      : starsRating.ransomwareAttack
    form.websiteCom = !starsRating.websiteCom ? 0 : starsRating.websiteCom
    form.userAccountComm = !starsRating.userAccountComm
      ? 0
      : starsRating.userAccountComm
    form.dataLoss = !starsRating.dataLoss ? 0 : starsRating.dataLoss
    form.malwareDetect = !starsRating.malwareDetect
      ? 0
      : starsRating.malwareDetect
  }
  const onSubmit = async (event) => {
    starLoadForm()
    try {
      const user = await emailPasswordSignup(
        props.form.email,
        props.form.password,
      )
      if (user) {
        InsertVolunteer(form)
        alert('your application added successfully ')
        props.onHide()
      }
    } catch (error) {
      if (error.statusCode === 401) {
        alert('Invalid username/password. Try again!')
      } else {
        alert(error)
      }
    }
  }

  // On file select (from the pop up)
  function onFileChange(event) {
    // Update the state

    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.addEventListener('load', () => {
      form.image = reader.result
      if (form.image)
        document.querySelector('#imagePreview').setAttribute('src', form.image)
      console.log('image', form.image)
    })
  }
  return (
    <Modal
      className="modalOrganizationForm"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Volunteer Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 formDetails" controlId="details">
            <Image
              id="imagePreview"
              className="rounded-circle"
              src={require('./data/images/avatar.png')}
              style={{
                width: '125px',
                height: '125px',
              }}
            />
            <FormGroup className="detailsInfo">
              <div className="groupDetails">
                <Form.Control
                  className="detailsBody"
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  value={form.First_name}
                  onChange={onFormInputChange}
                />
                <Form.Control
                  className="detailsBody"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  value={form.last_name}
                  onChange={onFormInputChange}
                />
                <Form.Control
                  className="detailsBody"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phoneNumber}
                  onChange={onFormInputChange}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div className="groupDetails">
                <Form.Control
                  className="detailsAddress detailsBody"
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={form.address}
                  onChange={onFormInputChange}
                />
                <Form.Control
                  className="detailsBody"
                  name="skills"
                  type="text"
                  placeholder="skills"
                  value={form.skills}
                  onChange={onFormInputChange}
                />
              </div>
              <Form.Control
                as="textarea"
                rows="3"
                name="qualification"
                type="text"
                placeholder="Write a brief description for the qualifications and certificates  "
                value={form.qualification}
                onChange={onFormInputChange}
              />
            </FormGroup>
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label className="detailFileUpload">
              Please upload yours image
            </Form.Label>
            <Form.Control
              type="file"
              size="sm"
              accept="image/png , image/jpg"
              onChange={onFileChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="aboutUs">
            <Form.Control
              as="textarea"
              rows="3"
              name="aboutUs"
              type="text"
              placeholder="Write a brief description  About you "
              value={form.aboutUs}
              onChange={onFormInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3 starsInfo">
            <Form.Label className="detailsStart">
              Environment hardening & Incident Prevention
            </Form.Label>
            <div className="environmentHIP">
              <div className="starLabel">
                <p>Application Control</p>

                <div>{application}</div>
              </div>
              <div className="starLabel">
                <p>Patch application</p>

                <div>{PatchApplication}</div>
              </div>
              <div className="starLabel">
                <p>Configure Microsoft Office</p>

                <div>{configureMS365}</div>
              </div>
              <div className="starLabel">
                <p>User Web Application</p>

                <div> {userWebAPP}</div>
              </div>
            </div>
            <div className="environmentHIP">
              <div className="starLabel">
                <p> Restrict Administrative Privileges</p>

                <div>{restrictAdminP}</div>
              </div>
              <div className="starLabel">
                <p>Patch Operating System</p>

                <div> {patchOP}</div>
              </div>
              <div className="starLabel">
                <p>Multi-Factor Authentication</p>
                <div>{multiFactorAuth}</div>
              </div>
              <div className="starLabel">
                <p>Regular backups</p>

                <div> {backups}</div>
              </div>
            </div>
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3 starsInfo">
            <Form.Label className="detailsStart">
              Additional requirement Self-Assessment -Prevention - Governance -
              Audit
            </Form.Label>

            <div className="environmentHIP">
              <div className="starLabel">
                <p> Penetration Testing Scoping</p>

                <div>{penetration}</div>
              </div>
              <div className="starLabel">
                <p>Development Cybersecurity Policies</p>

                <div>{developCp}</div>
              </div>
              <div className="starLabel">
                <p>Development Cybersecurity Strategy</p>

                <div>{developCS}</div>
              </div>
            </div>
            <div className="starLabel">
              <p>Delivering Cybersecurity awareness</p>

              <div> {developCA}</div>
            </div>
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3 starsInfo">
            <Form.Label className="detailsStart">
              Additional requirement Self-Assessment - Incident Response
            </Form.Label>

            <div className="environmentHIP">
              <div className="starLabel">
                <p> Ransomware attack</p>

                <div> {ransomwareAttack}</div>
              </div>
              <div className="starLabel">
                <p>Website compromised </p>

                <div>{websiteCom}</div>
              </div>
              <div className="starLabel">
                <p>User account compromised</p>

                <div>{userAccountComm}</div>
              </div>
              <div className="starLabel">
                <p>Data loss /theft </p>

                <div> {dataLoss}</div>
              </div>
            </div>
            <div className="starLabel">
              <p>malware - detect and clean-up</p>

              <div> {malwareDetect}</div>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={onSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
