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
export default function useStarRating() {
  const [starsRating, setStarRating] = useState({})
  const [hover, setHover] = useState({})

  let starNumber = 3
  console.log(starsRating)
  return {
    starsRating,
    render(props) {
      console.log(props)

      return (
        <>
          {[...Array(starNumber)].map((star, i) => {
            const value = i + 1
            return (
              <label key={i}>
                <input
                  className="rating"
                  type="radio"
                  name="rating"
                  value={value}
                  onClick={() =>
                    setStarRating({ ...starsRating, [props]: value })
                  }
                />
                <FaStar
                  id={props}
                  className="star "
                  color={
                    value <= (hover[props] || starsRating[props])
                      ? '#ffc107'
                      : '#e4e5e9'
                  }
                  size={25}
                  onMouseEnter={() => setHover({ ...hover, [props]: value })}
                  onMouseLeave={() => setHover({ [props]: null })}
                />
              </label>
            )
          })}
        </>
      )
    },
  }
}
