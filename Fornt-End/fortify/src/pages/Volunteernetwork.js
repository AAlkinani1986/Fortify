// author Paulina Wesolowska
//4/12/22

import React from 'react'
import '../pages/searchstyle.css'
import { FaSistrix } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Select from 'react-select'

const Places = [
  { label: 'VIC', value: 'VIC' },
  { label: 'NSW', value: 'NSW' },
  { label: 'QLD', value: 'QLD' },
  { label: 'SA', value: 'SA' },
  { label: 'TAS', value: 'TAS' },
  { label: 'WA', value: 'WA' },
]

const Expertise = [
  { label: 'High', value: 'High' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Low', value: 'Low' },
]

const dates = [
  { label: 'NOW', value: 'NOW' },
  { label: '+ 1 month', value: '+ 1month' },
  { label: 'year', value: 'year' },
]

const VolunteerNetwork = () => {
  return (
    <>
      <div className="Title">
        <h2>Fortify Volunteer Network</h2>
      </div>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search for volunteers, expertise, location etc."
          />
          <div className="searchButton">
            <FaSistrix style={{ color: 'white', fontSize: '20px' }} />
          </div>
        </div>
      </div>

      <div className="LocationApp">
        <div className="locationsearch">
          <div className="locationButton">
            <FaMapMarkerAlt style={{ color: 'green', fontSize: '20px' }} />
          </div>
          <Select options={Places} />
        </div>
      </div>

      <div className="expertiseApp">
        <div className="expertisesearch">
          <div className="expertiseButton">
            <FaRegStar style={{ color: 'green', fontSize: '20px' }} />
          </div>
          <Select options={Expertise} />
        </div>
      </div>

      <div className="dateApp">
        <div className="datesearch">
          <div className="dateButton">
            <FaRegCalendarAlt style={{ color: 'green', fontSize: '20px' }} />
          </div>
          <Select options={dates} />
        </div>
      </div>

      <div className="Card">
        <div className="upperContainer">
          <div className="imageContainer">
            <img
              src="https://th.bing.com/th/id/R.8da7bb4ec2fbd896ce5910f3b0ab361f?rik=YU82wpl46hXONw&riu=http%3a%2f%2fi2.wp.com%2fnyphotony.com%2fwp-content%2fuploads%2f2013%2f11%2fMeghan-resized.jpg&ehk=x%2fn2lBeStlBjojkjLWiv88MoFtgU5MMSsav7gbFMMB4%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              height="150px"
              width="150px"
            />
          </div>
        </div>
        <div className="lowerContainer">
          <h5> Sarah Kasicki </h5>
          <h6> Cyber Security Student </h6>
          <h7>Geelong, VIC, 3156</h7>
        </div>
      </div>

      <div className="Card2">
        <div className="upperContainer">
          <div className="imageContainer">
            <img
              src="https://i0.wp.com/purdueme.com/wp-content/uploads/2019/07/Professional_Picture.jpg?ssl=1"
              alt=""
              height="150px"
              width="150px"
            />
          </div>
        </div>
        <div className="lowerContainer">
          <h5> Ben Masik </h5>
          <h6> IT Professional </h6>
          <h7>Sydney, NSW, 2150</h7>
        </div>
      </div>

      <div className="Card3">
        <div className="upperContainer">
          <div className="imageContainer">
            <img
              src="https://i.pinimg.com/originals/25/3a/bf/253abf4f1f4bc16b6dc04571f8d21624.png"
              alt=""
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className="lowerContainer">
          <h5> Jack MacStar </h5>
          <h6> Self-taught </h6>
          <h7>Melbourne, VIC, 3126</h7>
        </div>
      </div>

      <div className="Card4">
        <div className="upperContainer">
          <div className="imageContainer">
            <img
              src="https://th.bing.com/th/id/OIP.SwqMrW3meyH4Sj7PxQSfPAHaKW?pid=ImgDet&rs=1"
              alt=""
              height="150px"
              width="150px"
            />
          </div>
        </div>
        <div className="lowerContainer">
          <h5> Jessica Kesley </h5>
          <h6> IT Graduate </h6>
          <h7>Geelong, VIC, 3156</h7>
        </div>
      </div>

      <div className="container">
        <button>Show more</button>
      </div>
    </>
  )
}
export default VolunteerNetwork
