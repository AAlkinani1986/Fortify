import SpanDot from './SpanDot'
import { BsArrowRightCircle } from 'react-icons/bs'
const SecurityStatistics = () => {
  return (
    <div className="secStatistic">
      <div className="statistics">
        <div className="statText">
          <p className="statP1">Statistics</p>
          <h2>2022 Cyber Security Statistics</h2>
          <p className="statP2">
            Cyber attacks are more common than you think.
          </p>
        </div>
        <div className="squareBlue">
          <SpanDot />
        </div>
      </div>
      <div className="articles">
        <div className="damageCost">
          <div className="damTitle">
            <p>Total Damage Cost </p>
            <a href="/#">
              View Article <BsArrowRightCircle />
            </a>
          </div>

          <div className="damBody">
            <h5>$6 Trillions</h5>
            <p> &nbsp;- CloudWards</p>
          </div>
        </div>
        <div className="ransomware">
          <div className="damTitle">
            <p>Ransomware Attacks </p>
            <a href="/#">
              View Article <BsArrowRightCircle />
            </a>
          </div>

          <div className="damBody">
            <h5>Over 4,000 attacks per day</h5>
            <p> &nbsp;- Justice.gov</p>
          </div>
        </div>
        <div className="squareGreen">
          <SpanDot />
        </div>
        <div className="targetedBuss">
          <div className="damTitle">
            <p>Targeted Businesses </p>
            <a href="/#">
              View Article <BsArrowRightCircle />
            </a>
          </div>

          <div className="damBody">
            <h5 className="SB">
              43% of cyber attacks target small businesses{' '}
            </h5>
            <p> - Cyberint</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SecurityStatistics
