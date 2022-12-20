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
const StarRating = (props) => {
  const [rating, setRating] = useState(props.ratingValue)
  const [hover, setHover] = useState(null)

  let starNumber = props.starNumber != null ? props.starNumber : 3

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
              onClick={() => setRating(value)}
              disabled={props.status}
            />
            <FaStar
              className="star"
              color={value <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={25}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}
    </>
  )
}
export default StarRating
