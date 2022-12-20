import circle from "../../images/circle.svg";
import triangle from "../../images/triangle.svg";
import getHelpImage from "../../images/get-help-image.png";
import computer from "../../images/computer.svg";
import Consulting from "../../images/Consulting.svg";
import Service from "../../images/Service.svg";

const GetHelp = () => {
  return (
    <div className="freeHelp">
      <div className="helpHeader">
        <p className="title">Features</p>
        <h3>Get free help from certified cyber security experts</h3>
        <p className="help-text">our experts are specialized in ....</p>
      </div>
      <div className="helpBody">
        <div className="helpImage">
          <img src={circle} alt="" className="circle" />
          <img src={getHelpImage} alt="Get Help :)" />
          <img src={triangle} alt="" className="triangle" />
        </div>
        <div className="helpService">
          <div>
            <p>
              <img src={computer} alt="" />
            </p>
            <ul>
              <li>Cyber Awareness Training</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, repudiandae!</li>
            </ul>
          </div>

          <div>
            <p>
              <img src={Consulting} alt="" />
            </p>
            <ul>
              <li>Consulting</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, repudiandae!</li>
            </ul>
          </div>

          <div>
            <p>
              <img src={Service} alt= "" />
            </p>
            <ul>
              <li>The Third Service</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, repudiandae!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="helpFooter">
        <div className="article">
          <div className="securityAsses"></div>
        </div>
      </div>
    </div>
  )
}
export default GetHelp
