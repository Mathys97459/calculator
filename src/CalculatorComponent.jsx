'use client'
import React, { useState } from 'react';
import { calculate } from './calculatorLogic';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleInputChange = (e) => {
    setExpression(e.target.value);
  };

  const handleCalculate = () => {
    const clearedExpression = expression.replace(/(?<!\d)0+(\d+)/g, '$1');
    const calcResult = calculate(clearedExpression);
    setResult(calcResult);
    setHistory([...history, { expression, result: calcResult }]);
    setExpression(calcResult);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleDelete = () => {
    setExpression(expression.slice(0, -1));
  };

  return (
    <div className='app-container'>
      <div className="calculator-container">
        <h1 className="calculator-title">Calculator</h1>
        <div className="input-container">
          <input
            type="text"
            value={expression}
            onChange={handleInputChange}
            className="calculator-input"
          />
        </div>
        <div className="button-grid">
          <button onClick={() => handleButtonClick('1')} className="calculator-btn">1</button>
          <button onClick={() => handleButtonClick('2')} className="calculator-btn">2</button>
          <button onClick={() => handleButtonClick('3')} className="calculator-btn">3</button>
          <button onClick={() => handleButtonClick('+')} className="calculator-btn">+</button>

          <button onClick={() => handleButtonClick('4')} className="calculator-btn">4</button>
          <button onClick={() => handleButtonClick('5')} className="calculator-btn">5</button>
          <button onClick={() => handleButtonClick('6')} className="calculator-btn">6</button>
          <button onClick={() => handleButtonClick('-')} className="calculator-btn">-</button>

          <button onClick={() => handleButtonClick('7')} className="calculator-btn">7</button>
          <button onClick={() => handleButtonClick('8')} className="calculator-btn">8</button>
          <button onClick={() => handleButtonClick('9')} className="calculator-btn">9</button>
          <button onClick={() => handleButtonClick('*')} className="calculator-btn">*</button>

          <button onClick={() => handleButtonClick('0')} className="calculator-btn">0</button>
          <button onClick={handleClear} className="calculator-btn clear-btn">C</button>
          <button onClick={() => handleButtonClick('/')} className="calculator-btn">/</button>
        </div>
        <div className="button-actions">
          <button onClick={handleDelete} className="calculator-btn delete-btn">Delete</button>
          <button onClick={handleCalculate} className="calculator-btn equals-btn">=</button>
        </div>
      </div>
      <div className="history-container">
        <h2 className="history-title">History</h2>
        <button onClick={handleClearHistory} className="clear-history-btn">Clear History</button>
        <ul className="history-list">
          {history.map((entry, index) => (
            <li key={index} className="history-item">
              {entry.expression} = {entry.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
