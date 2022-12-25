import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { UserContext } from '../../contexts/user.context'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import './style.css'

import EditStarRating from './EditStarRating'
export default function OrganizationUpdate(props) {
  const { updateOrganization } = useContext(UserContext)
  const { render, starsRating } = EditStarRating()
  var appControl = {
      name: 'applicationControl',
      value: props.form.environmentHIP.applicationControl,
    },
    patchApp = {
      name: 'PatchApplication',
      value: props.form.environmentHIP.PatchApp,
    },
    conMS365 = {
      name: 'configureMS365',
      value: props.form.environmentHIP.configureMS365,
    },
    UWebApp = {
      name: 'userWebAPP',
      value: props.form.environmentHIP.userWebAPP,
    },
    adminP = {
      name: 'restrictAdminP',
      value: props.form.environmentHIP.restrictAdminP,
    },
    OP = {
      name: 'patchOP',
      value: props.form.environmentHIP.patchOP,
    },
    MFA = {
      name: 'multiFactorAuth',
      value: props.form.environmentHIP.multiFactorAuth,
    },
    orgBackups = {
      name: 'backups',
      value: props.form.environmentHIP.backups,
    }
  var penetrate = {
      name: 'penetration',
      value: props.form.processCapability.penetration,
    },
    Cp = {
      name: 'developCp',
      value: props.form.processCapability.developCp,
    },
    CS = {
      name: 'developCS',
      value: props.form.processCapability.developCS,
    },
    CA = {
      name: 'developCA',
      value: props.form.processCapability.developCA,
    }
  var ransomware = {
      name: 'ransomwareAttack',
      value: props.form.incidentResponse.ransomwareAttack,
    },
    data = {
      name: 'dataLoss',
      value: props.form.incidentResponse.dataLoss,
    },
    webCom = {
      name: 'websiteCom',
      value: props.form.incidentResponse.websiteCom,
    },
    malware = {
      name: 'malwareDetect',
      value: props.form.incidentResponse.malwareDetect,
    },
    userAccount = {
      name: 'userAccountCom',
      value: props.form.incidentResponse.userAccountComm,
    }

  const application = render(appControl)
  const PatchApplication = render(patchApp)
  const configureMS365 = render(conMS365)
  const userWebAPP = render(UWebApp)
  const restrictAdminP = render(adminP)
  const patchOP = render(OP)
  const multiFactorAuth = render(MFA)
  const backups = render(orgBackups)
  const penetration = render(penetrate)
  const developCp = render(Cp)
  const developCS = render(CS)
  const developCA = render(CA)
  const ransomwareAttack = render(ransomware)
  const websiteCom = render(webCom)
  const dataLoss = render(data)
  const malwareDetect = render(malware)
  const userAccountComm = render(userAccount)
  console.log('props', props)
  var [form, setForm] = useState({
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
  useEffect(() => {
    function LoadForm() {
      form.name = props.form.name
      form.image = props.form.image
      form.address = props.form.address
      form.phoneNumber = props.form.phoneNumber
      form.aboutUs = props.form.aboutUs

      form.email = props.form.email
      form.applicationControl = !starsRating.applicationControl
        ? props.form.environmentHIP.applicationControl
        : starsRating.applicationControl
      form.PatchApplication = !starsRating.PatchApplication
        ? props.form.environmentHIP.PatchApp
        : starsRating.PatchApplication
      form.configureMS365 = !starsRating.configureMS365
        ? props.form.environmentHIP.configureMS365
        : starsRating.configureMS365
      form.userWebAPP = !starsRating.userWebAPP
        ? props.form.environmentHIP.userWebAPP
        : starsRating.userWebAPP
      form.restrictAdminP = !starsRating.restrictAdminP
        ? props.form.environmentHIP.restrictAdminP
        : starsRating.restrictAdminP
      form.patchOP = !starsRating.patchOP
        ? props.form.environmentHIP.patchOP
        : starsRating.patchOP
      form.multiFactorAuth = !starsRating.multiFactorAuth
        ? props.form.environmentHIP.multiFactorAuth
        : starsRating.multiFactorAuth
      form.backups = !starsRating.backups
        ? props.form.environmentHIP.backups
        : starsRating.backups
      form.penetration = !starsRating.penetration
        ? props.form.processCapability.penetration
        : starsRating.penetration
      form.developCp = !starsRating.developCp
        ? props.form.processCapability.developCp
        : starsRating.developCp
      form.developCS = !starsRating.developCS
        ? props.form.processCapability.developCS
        : starsRating.developCS
      form.developCA = !starsRating.developCA
        ? props.form.processCapability.developCA
        : starsRating.developCA
      form.ransomwareAttack = !starsRating.ransomwareAttack
        ? props.form.incidentResponse.ransomwareAttack
        : starsRating.ransomwareAttack
      form.websiteCom = !starsRating.websiteCom
        ? props.form.incidentResponse.websiteCom
        : starsRating.websiteCom
      form.userAccountComm = !starsRating.userAccountComm
        ? props.form.incidentResponse.userAccountComm
        : starsRating.userAccountComm
      form.dataLoss = !starsRating.dataLoss
        ? props.form.incidentResponse.dataLoss
        : starsRating.dataLoss
      form.malwareDetect = !starsRating.malwareDetect
        ? props.form.incidentResponse.malwareDetect
        : starsRating.malwareDetect
    }
    LoadForm()
  }, [])
  // This function will be called whenever the user edits the form.
  const onFormInputChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  function loadingForm() {
    form.applicationControl = !starsRating.applicationControl
      ? props.form.environmentHIP.applicationControl
      : starsRating.applicationControl
    form.PatchApplication = !starsRating.PatchApplication
      ? props.form.environmentHIP.PatchApp
      : starsRating.PatchApplication
    form.configureMS365 = !starsRating.configureMS365
      ? props.form.environmentHIP.configureMS365
      : starsRating.configureMS365
    form.userWebAPP = !starsRating.userWebAPP
      ? props.form.environmentHIP.userWebAPP
      : starsRating.userWebAPP
    form.restrictAdminP = !starsRating.restrictAdminP
      ? props.form.environmentHIP.restrictAdminP
      : starsRating.restrictAdminP
    form.patchOP = !starsRating.patchOP
      ? props.form.environmentHIP.patchOP
      : starsRating.patchOP
    form.multiFactorAuth = !starsRating.multiFactorAuth
      ? props.form.environmentHIP.multiFactorAuth
      : starsRating.multiFactorAuth
    form.backups = !starsRating.backups
      ? props.form.environmentHIP.backups
      : starsRating.backups
    form.penetration = !starsRating.penetration
      ? props.form.processCapability.penetration
      : starsRating.penetration
    form.developCp = !starsRating.developCp
      ? props.form.processCapability.developCp
      : starsRating.developCp
    form.developCS = !starsRating.developCS
      ? props.form.processCapability.developCS
      : starsRating.developCS
    form.developCA = !starsRating.developCA
      ? props.form.processCapability.developCA
      : starsRating.developCA
    form.ransomwareAttack = !starsRating.ransomwareAttack
      ? props.form.incidentResponse.ransomwareAttack
      : starsRating.ransomwareAttack
    form.websiteCom = !starsRating.websiteCom
      ? props.form.incidentResponse.websiteCom
      : starsRating.websiteCom
    form.userAccountComm = !starsRating.userAccountComm
      ? props.form.incidentResponse.userAccountComm
      : starsRating.userAccountComm
    form.dataLoss = !starsRating.dataLoss
      ? props.form.incidentResponse.dataLoss
      : starsRating.dataLoss
    form.malwareDetect = !starsRating.malwareDetect
      ? props.form.incidentResponse.malwareDetect
      : starsRating.malwareDetect
  }
  const onSubmit = async (event) => {
    loadingForm()
    try {
      console.log('form', form)
      updateOrganization(form)

      alert('your application added successfully ')

      props.onHide()
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
          Organization Update Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 formDetails" controlId="details">
            <Image
              id="imagePreview"
              thumbnail
              src={form.image}
              style={{
                width: '150px',
                height: '150px',
              }}
            />
            <FormGroup className="detailsInfo">
              <Form.Control
                className="detailsBody"
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={onFormInputChange}
              />

              <Form.Control
                className="detailsBody"
                name="address"
                type="text"
                placeholder="Address"
                value={form.address}
                onChange={onFormInputChange}
              />
              <Form.Control
                className="detailsBody"
                name="phoneNumber"
                type="tel"
                placeholder="EX:0424763455"
                value={form.phoneNumber}
                onChange={onFormInputChange}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </FormGroup>
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
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
              placeholder="Write a brief description for the organization  "
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
