import React, { useState } from 'react'

function  MiniRäknare() {
 
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);


  const plus = () => setResult(Number(num1) + Number(num2));
  const minus = () => setResult(Number(num1) - Number(num2));

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Miniräknare </h1>
      
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Numbert1"
      />
      
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      
      <div style={{ marginTop: "10px" }}>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>
      </div>
      
      <p>Resultat: {result}</p>
    </div>
  );
}


export default MiniRäknare
