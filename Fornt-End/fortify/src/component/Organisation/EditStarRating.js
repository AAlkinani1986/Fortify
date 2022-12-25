// author Ali Al-kinani
//Wednesday 7 des 2022

/* 
More details goes here....
what the from about 
what supposed to do
*/

import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './starStyle.css'
export default function EditStarRating() {
  const [starsRating, setStarRating] = useState({})
  const [hover, setHover] = useState({})

  let starNumber = 3
  console.log(starsRating)
  return {
    starsRating,
    render(props) {
      console.log(props)
      // starsRating[props.name] = props.value
      return (
        <>
          {[...Array(starNumber)].map((star, i) => {
            var value = i + 1
            return (
              <label key={i}>
                <input
                  className="rating"
                  type="radio"
                  name="rating"
                  value={value}
                  onClick={() =>
                    setStarRating({ ...starsRating, [props.name]: value })
                  }
                />
                <FaStar
                  id={props.name}
                  className="star "
                  color={
                    value <=
                    (hover[props.name] ||
                      starsRating[props.name] ||
                      props.value)
                      ? '#ffc107'
                      : '#e4e5e9'
                  }
                  size={25}
                  onMouseEnter={() =>
                    setHover({ ...hover, [props.name]: value })
                  }
                  onMouseLeave={() => setHover({ [props.name]: null })}
                />
              </label>
            )
          })}
        </>
      )
    },
  }
}
