// author
//date

/* 
More details goes here....
what the from about 
what supposed to do
*/
import volunteerImage from "../../images/volunteer-image.png";

const Volunteer = () => {
  return <div className="volunteerSection">
    <div style={{
      textAlign: "center",
    }}>
    <h2>Volunteer</h2>
    </div>
    
    <div className="volunteer-grid">
    <article>
      <ul>
        <li className="number">1</li>
        <li className="list-heading">Benefit 1</li>
        <li className="list-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, tempora.</li>
      </ul>
      <ul>
        <li className="number">2</li>
        <li className="list-heading">Benefit 2</li>
        <li className="list-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, tempora.</li>
      </ul>
      <ul>
        <li className="number">3</li>
        <li className="list-heading">Benefit 3</li>
        <li className="list-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, tempora.</li>
      </ul>

      <button className="btn-green">Join Us</button>
    </article>

    <article>
      <img src={volunteerImage} alt="" />
    </article>
    </div>
  </div>
}
export default Volunteer
