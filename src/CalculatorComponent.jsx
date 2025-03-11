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
    const calcResult = calculate(expression);
    setResult(calcResult);
    setHistory([...history, { expression, result: calcResult }]);
    setExpression('');
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
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Calculator</h1>
      <div className="mb-4">
        <input
          type="text"
          value={expression}
          onChange={handleInputChange}
          placeholder="Enter expression"
          className="w-full p-2 text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <button onClick={() => handleButtonClick('1')} className="btn">1</button>
        <button onClick={() => handleButtonClick('2')} className="btn">2</button>
        <button onClick={() => handleButtonClick('3')} className="btn">3</button>
        <button onClick={() => handleButtonClick('+')} className="btn">+</button>

        <button onClick={() => handleButtonClick('4')} className="btn">4</button>
        <button onClick={() => handleButtonClick('5')} className="btn">5</button>
        <button onClick={() => handleButtonClick('6')} className="btn">6</button>
        <button onClick={() => handleButtonClick('-')} className="btn">-</button>

        <button onClick={() => handleButtonClick('7')} className="btn">7</button>
        <button onClick={() => handleButtonClick('8')} className="btn">8</button>
        <button onClick={() => handleButtonClick('9')} className="btn">9</button>
        <button onClick={() => handleButtonClick('*')} className="btn">*</button>

        <button onClick={() => handleButtonClick('0')} className="btn">0</button>
        <button onClick={handleClear} className="btn col-span-2">C</button>
        <button onClick={() => handleButtonClick('/')} className="btn">/</button>
      </div>
      <div className="flex justify-between mb-4">
        <button onClick={handleDelete} className="btn w-1/2">Delete</button>
        <button onClick={handleCalculate} className="btn w-1/2 bg-blue-500 text-white">=</button>
      </div>
      <div className="mb-4">
        <h2 className="text-xl">Result: {result}</h2>
      </div>
      <div>
        <h2 className="text-xl font-semibold">History</h2>
        <button onClick={handleClearHistory} className="text-red-500">Clear History</button>
        <ul className="mt-2">
          {history.map((entry, index) => (
            <li key={index} className="text-gray-700">
              {entry.expression} = {entry.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
