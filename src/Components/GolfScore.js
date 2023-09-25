import React, { useState } from 'react';


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

const GolfScore = () => {
  const [par, setPar] = useState(4);
  const [strokes, setStrokes] = useState(0);
  const [result, setResult] = useState("");

  const calculateScore = () => {
    if (strokes === 1) {
      setResult(names[0]); // "Hole-in-one!"
    } else if (strokes <= par - 2) {
      setResult(names[1]); // "Eagle"
    } else if (strokes === par - 1) {
      setResult(names[2]); // "Birdie"
    } else if (strokes === par) {
      setResult(names[3]); // "Par"
    } else if (strokes === par + 1) {
      setResult(names[4]); // "Bogey"
    } else if (strokes === par + 2) {
      setResult(names[5]); // "Double Bogey"
    } else if (strokes >= par + 3) {
      setResult(names[6]); // "Go Home!"
    }
  }

  return (
    <div className='w-50 mx-auto golf mt-5'>
      <h1 className='d-flex justify-content-center'>Golf Score</h1>
      <div>
        <label>Par:</label>
        <input type="number" value={par} onChange={(e) => setPar(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Strokes:</label>
        <input type="number" value={strokes} onChange={(e) => setStrokes(parseInt(e.target.value))} />
      </div>
      <div className='d-flex justify-content-center mt-3' >
      <button  onClick={calculateScore}>Calculate</button>
      </div>
      <div>
      <hr/>
        <p className='d-flex justify-content-center'>Result: {result}</p>
      </div>
    </div>
  );
}

export default GolfScore;
