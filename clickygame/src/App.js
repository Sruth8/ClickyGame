
import React, { useState, useEffect } from 'react' // "useState" is like a updater, it tells React that the conponent & its children need to be re-rendered.
import GameBoard from './components/gameboard'
import initDeck from './deck'

export default function App() {
  const [flipped, setFlipped] = useState([]) // this stores the array. useStete updating the card flips
  const [cards, setCards] = useState([])
  const [cardsize, setSize] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false) // disabled here will make sure the user doesn't submit 3 
  // cards mulipule times

  useEffect(() => {    // useEffect will replace the component did mount function
    sizingBoard()
    setCards(initDeck())
  }, [])

  
  useEffect(() => { 
  preCacheImages()
     // eslint-disable-next-line
  }, cards) // had to add the above line so this would work

  // resize the board to be responsive click listener
  useEffect(() => {
    const sizingListener = window.addEventListener('resize', sizingBoard)
    return () => window.removeEventListener('resize', sizingListener)
  })


  //====== GAME FUNCTIONS ====
  // this will control the click functions when selecting cards
  const handleClick = (id) => {
    setDisabled(true) // once you click a card you can't click another card
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
      
    } else {
      if (sameCardFlipped(id)) return
      setFlipped([flipped[0], id]) // make sure only 2 cards are flipped
      if (isMatch(id)){
      setSolved([...solved, flipped[0], id]) // ha ha don't have white spaces!! Thanks React!!
    resetCards()
    }else {
      setTimeout(resetCards, 2000) //setting the function resetCards to setTimeout
    }
    //setFlipped((flipped) => [...flipped, id])//... will spread out the flips
  }
}

//preloads the images to the cards
const preCacheImages = () => { 

     // eslint-disable-next-line 
  cards.map((cards) => {

    const src = `/img/${cards.type}.png`
    console.log(src)
    new Image().src = src
  })
}






const resetCards = () => {
  setFlipped([])
  setDisabled(false)
}
  const sameCardFlipped =(id) => flipped.includes(id)
const isMatch = (id) => {
  const selected = cards.find((cards)=> cards.id === id)
  const selectedCard = cards.find((cards) => flipped[0] === cards.id)
  return selectedCard.type === selected.type
}


  // sizing the cards here
  const sizingBoard = () => {
    setSize(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      )
    )
  }




  return (
    <div>
      <h1>Clicky Game</h1>
      <h2>Test you memory? Flip the cards and test your brain!</h2>
      <GameBoard cardsize={cardsize} cards={cards} flipped={flipped} handleClick={handleClick}
        disabled={disabled} solved={solved}/>
    </div>








  )
}


//  <Card
//  <div
//         id={1}
//         width={100}
//         height={100}
//         back={'/img/legs.jpg'}
//         front={'/img/lookie.png'}
//         flipped={flipped.includes(1)}
//         handleClick={() => handleClick(1)}
//       />
//     </div> 
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() 
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
