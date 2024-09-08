import React, { useState } from 'react';
import './App.css';

function App() {
  // State hooks for handling inputs and results for different functionalities
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  // Utility Functions
  const distinctArray = (arr) => [...new Set(arr)];

  const first100PrimesSum = () => {
    const isPrime = (num) => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    const sum = primes.reduce((sum, prime) => sum + prime, 0);
    return [primes, sum];
  };

  const addLargeNumbers = (num1, num2) => {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry) {
      const digit1 = i >= 0 ? +num1[i] : 0;
      const digit2 = j >= 0 ? +num2[j] : 0;
      let sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
      i--;
      j--;
    }

    return result;
  };

  const wordCount = (text) => text.split(/\s+/).filter(Boolean).length;

  const capitalizeWords = (text) => text.replace(/\b\w/g, (char) => char.toUpperCase());

  const sumCommaDelimited = (str) => str.split(',').reduce((sum, num) => sum + parseFloat(num), 0);

  // Handler functions
  const handleDistinctArray = () => {
    const arr = input.split(',').map(Number);
    setResult(distinctArray(arr).join(', '));
  };

  const handlePrimeSum = () => {
    const [primes, sum] = first100PrimesSum();
    setResult(`First 100 Primes: ${primes.join(', ')} | Sum: ${sum}`);
  };

  const handleLargeAddition = () => {
    const [num1, num2] = input.split(',').map(str => str.trim());
    setResult(addLargeNumbers(num1, num2));
  };

  const handleWordCount = () => {
    setResult(wordCount(input));
  };

  const handleCapitalizeWords = () => {
    setResult(capitalizeWords(input));
  };

  const handleCommaSum = () => {
    setResult(sumCommaDelimited(input));
  };

  return (
    <div className="App">
      <h1>JavaScript Function Utilities</h1>
      
      <div className="section">
        <h3>Distinct Array</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers separated by commas"
        />
        <button onClick={handleDistinctArray}>Get Distinct Array</button>
      </div>

      <div className="section">
        <h3>First 100 Primes Sum</h3>
        <button onClick={handlePrimeSum}>Calculate Prime Sum</button>
      </div>

      <div className="section">
        <h3>Add Large Numbers</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter two large numbers separated by comma"
        />
        <button onClick={handleLargeAddition}>Add Large Numbers</button>
      </div>

      <div className="section">
        <h3>Word Count</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text"
        />
        <button onClick={handleWordCount}>Count Words</button>
      </div>

      <div className="section">
        <h3>Capitalize Words</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text"
        />
        <button onClick={handleCapitalizeWords}>Capitalize</button>
      </div>

      <div className="section">
        <h3>Sum Comma Delimited Numbers</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers separated by commas"
        />
        <button onClick={handleCommaSum}>Calculate Sum</button>
      </div>

      <div className="result-section">
        <h3>Result</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
