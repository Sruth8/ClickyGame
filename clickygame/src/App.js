    
import React, { useState } from 'react' // "useState" is like a updater, it tells React that the conponent & its children need to be re-rendered.
import Card from './components/cards'

export default function App() {
  const [flipped, setFlipped] = useState([]) // this stores the array. useStete updating the card flips

  const handleClick = (id) => setFlipped((flipped) => [...flipped, id])//... will spread out the flips

  return (
    <div>
      <h1>Clicky Game</h1>
      <h2>Test you memory? Flip the cards and test your brain!</h2>

      <Card
        id={1}
        width={100}
        height={100}
        back={'/img/legs.jpg'}
        front={'/img/lookie.png'}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  )
}
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
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
