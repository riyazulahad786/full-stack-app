import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator mt-5">
    <h1 className='d-flex justify-content-center'>calculator</h1>
      <div id="display" className="display">
        {input || result || '0'}
      </div>
      <div className="buttons">
        <button id="clear" onClick={() => handleButtonClick('C')} className="button">
          C
        </button>
        <button id="seven" onClick={() => handleButtonClick('7')} className="button">
          7
        </button>
        <button id="eight" onClick={() => handleButtonClick('8')} className="button">
          8
        </button>
        <button id="nine" onClick={() => handleButtonClick('9')} className="button">
          9
        </button>
        <button id="divide" onClick={() => handleButtonClick('/')} className="button">
          /
        </button>
        <button id="four" onClick={() => handleButtonClick('4')} className="button">
          4
        </button>
        <button id="five" onClick={() => handleButtonClick('5')} className="button">
          5
        </button>
        <button id="six" onClick={() => handleButtonClick('6')} className="button">
          6
        </button>
        <button id="multiply" onClick={() => handleButtonClick('*')} className="button">
          *
        </button>
        <button id="one" onClick={() => handleButtonClick('1')} className="button">
          1
        </button>
        <button id="two" onClick={() => handleButtonClick('2')} className="button">
          2
        </button>
        <button id="three" onClick={() => handleButtonClick('3')} className="button">
          3
        </button>
        <button id="subtract" onClick={() => handleButtonClick('-')} className="button">
          -
        </button>
        <button id="zero" onClick={() => handleButtonClick('0')} className="button">
          0
        </button>
        <button id="decimal" onClick={() => handleButtonClick('.')} className="button">
          .
        </button>
        <button id="equals" onClick={() => handleButtonClick('=')} className="button">
          =
        </button>
        <button id="add" onClick={() => handleButtonClick('+')} className="button">
          +
        </button>
      </div>
    </div>
  );
}

export default Calculator;
