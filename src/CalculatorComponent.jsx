'use client'
import React from 'react';
import { useState } from 'react';
import { calculate } from './calculatorLogic';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleInputChange = (e) => {
    setExpression(e.target.value);
  };

  const handleCalculate = () => {
    const calcResult = calculate(expression);
    setResult(calcResult);
    setHistory([...history, { expression, result: calcResult }]);
    setExpression('');
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={expression}
        onChange={handleInputChange}
        placeholder="Enter expression"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        <h2>Result: {result}</h2>
      </div>
      <div>
        <h2>History</h2>
        <button onClick={handleClearHistory}>Clear History</button>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry.expression} = {entry.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
