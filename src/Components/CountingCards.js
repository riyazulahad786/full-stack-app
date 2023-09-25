import React, { useState } from 'react';

function CountingCards() {
  const [count, setCount] = useState(0);

  const updateCount = (card) => {
    // Convert cards 'J', 'Q', 'K' to 10
    if (card === 'J' || card === 'Q' || card === 'K') {
      card = 10;
    }
    // Convert card 'A' to 11
    else if (card === 'A') {
      card = 11;
    }

    // Update the count based on card values
    if (card >= 2 && card <= 6) {
      setCount(count + 1);
    } else if (card === 10 || card === 11) {
      setCount(count - 1);
    }
  };

  const decideBetOrHold = () => {
    if (count > 0) {
      return `${count} Bet`;
    } else {
      return `${count} Hold`;
    }
  };

  return (
    <div className=''>
      <h1 className='d-flex justify-content-center'>Card Counting</h1>
      <hr/>
      <div className='d-flex justify-content-center' >
      <button className='mx-1' onClick={() => updateCount(2)}>2</button>
      <button className='mx-1' onClick={() => updateCount(3)}>3</button>
      <button className='mx-1' onClick={() => updateCount(7)}>7</button>
      <button className='mx-1' onClick={() => updateCount('K')}>K</button>
      <button className='mx-1' onClick={() => updateCount('A')}>A</button>
      </div>
      <hr/>
      <p className='d-flex justify-content-center'>{decideBetOrHold()}</p>
    </div>
  );
}

export default CountingCards;
