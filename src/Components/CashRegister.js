import React, { useState } from "react";

function CashRegister() {
  const currency = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  const [price, setPrice] = useState(0);
  const [cash, setCash] = useState(0);
  const [cid, setCid] = useState(
    currency.map(unit => [unit[0], 0])
  );

  const [result, setResult] = useState({ status: "", change: [] });

  const Calculate = () => {
    const CalculateDifference = (price, cash, cid) => {
      let changeDue = cash - price;
      let changeArray = [];

      for (let i = currency.length - 1; i >= 0; i--) {
        const [unit, unitValue] = currency[i];
        const availableAmount = cid[i][1];
        const maxUnits = Math.floor(availableAmount / unitValue);
        let unitsToUse = 0;

        while (changeDue >= unitValue && unitsToUse < maxUnits) {
          changeDue -= unitValue;
          changeDue = Math.round(changeDue * 100) / 100;
          unitsToUse++;
        }

        if (unitsToUse > 0) {
          changeArray.push([unit, unitsToUse * unitValue]);
        }
      }

      if (changeDue === 0) {
        const cashInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0);

        if (changeArray.reduce((acc, curr) => acc + curr[1], 0) === cashInDrawer) {
          return { status: "CLOSED", change: changeArray };
        }

        return { status: "OPEN", change: changeArray };
      }

      return { status: "INSUFFICIENT_FUNDS", change: [] };
    };

    const result = CalculateDifference(price, cash, cid);
    console.log(result,"return object for cash register")
    setResult(result);
    
  };

  return (
    <div className="cash-register-app">
    <h1 className="d-flex justify-content-center">Cash Register App</h1>
    <div className="input-container">
      <label className="d-flex justify-content-center">Enter Purchase Price:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
    </div>
    <div className="input-container">
      <label>Enter Cash Payment:</label>
      <input
        type="number"
        value={cash}
        onChange={(e) => setCash(Number(e.target.value))}
      />
    </div>
    <div className="cash-drawer-container">
      <h2 className="d-flex justify-content-center">cash-in-drawer : </h2>
      {currency.map((unit, index) => (
        <div key={index} className="currency-item">
          {unit[0]}: $
          <input
            type="number"
            value={cid[index][1]}
            onChange={(e) => {
              const newCid = [...cid];
              newCid[index][1] = Number(e.target.value);
              setCid(newCid);
            }}
          />
        </div>
      ))}
    </div>
    <button className="calculate-button" onClick={Calculate}>
      Calculate Change
    </button>
    <div className="change-result">
      <h2 className="d-flex justify-content-center"> Result:</h2>
      <hr/>
      <p>Status: {result.status}</p>
      <hr/>
      <p>
        Change:
        {result.change.map((change, index) => (
          <span key={index} className="change-item">
            {change[0]}: {change[1]}
          </span>
        ))}
      </p>
    </div>
  </div>
  
  );
}

export default CashRegister;
