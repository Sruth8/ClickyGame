import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card'
import './styles.css'
//import GameBoard from './components/gameBoard'

export default function GameBoard({
    disabled ,cardsize, cards, flipped, handleClick, solved,
}) {
    return(
        <div className='board'>
            {cards.map((card)=>(
                <Card
                key={card.id}
                id={card.id}
                type={card.type}
              //  back={'/img/legs.jpg'}
              //  front={'/img/smokie'}
                width={cardsize / 5}
                height={cardsize / 5}
                flipped={flipped.includes(card.id)}
                handleClick={handleClick}
                disabled={disabled || solved.includes(card.id) }
                solved={solved.includes(card.id)} //this will help show or keep visible the correct matches if user wins
                />
            ))}
        </div>
    )
}

GameBoard.propTypes= {
    cardsize: PropTypes.number.isRequired,
    disaabled: PropTypes.bool.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}