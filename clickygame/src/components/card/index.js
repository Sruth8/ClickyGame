import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

// ==this destructering helps give access to the properties
export default function Card({
  handleClick,
  flipped,
  type,
  id,
  //back,
  //front,
  height,
  width,
  disabled,
  solved,
}) {

  // === this container  will hold the cards and tell if it is flipped
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      style={{   // this styles the card
        width,
        height,
      }}
      onClick={() => disabled ? null : handleClick(id)} //
    >
      
      <div className='flipper'> 
        <img
        style={{
          height,
          width,
        }}
          alt='card'
          className={flipped ? 'front' : 'back'}
          src={flipped || solved ? `/img/${type}.png` :`/img/.png`}
         // style={{ width, height }}
        />
      </div>
    </div>
  )
}
// === this is in javascript object. this also controlls the carts
Card.propTypes = {
  flipped: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  front: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  solved: PropTypes.bool.isRequired,
}