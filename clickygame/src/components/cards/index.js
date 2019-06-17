import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

// ==this destructering helps give access to the properties
export default function Card({
  handleClick,
  flipped,
  back,
  front,
  height,
  width,
}) {

  // === this div is a container that will hold the cards and tell if it is flipped
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      style={{   // this styles the card
        width,
        height,
      }}
      onClick={handleClick}
    >
      
      <div className='flipper'> 
        <img
          alt='card'
          className={flipped ? 'front' : 'back'}
          src={flipped ? front : back}
          style={{ width, height }}
        />
      </div>
    </div>
  )
}
// === this is in javascript object. this also controlls the carts
Card.propTypes = {
  flipped: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  back: PropTypes.string.isRequired,
  front: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}