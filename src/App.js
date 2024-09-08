import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [shift, setShift] = useState(0);

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

  const primeDistances = () => {
    const primes = first100PrimesSum()[0];
    return primes.map((prime, idx) => idx > 0 ? prime - primes[idx - 1] : 0).slice(1);
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

  const wordsArray = (text) => text.match(/\b\w+\b/g) || [];

  const csvToArray = (csv) => csv.split('\n').map(row => row.split(','));

  const stringToCharArray = (str) => str.split('');

  const stringToAsciiArray = (str) => str.split('').map(char => char.charCodeAt(0));

  const asciiArrayToString = (arr) => arr.map(code => String.fromCharCode(code)).join('');

  const caesarCipher = (str, shift) => {
    return str.replace(/[a-zA-Z]/g, char => {
      const base = char.charCodeAt(0) < 97 ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    });
  };

  const bubbleSort = (arr) => {
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
      n--;
    } while (swapped);
    return arr;
  };

  const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  const circlesIntersect = (x1, y1, r1, x2, y2, r2) => {
    const d = distance(x1, y1, x2, y2);
    return d <= r1 + r2 && d >= Math.abs(r1 - r2);
  };

  const extractColumn = (arr, columnIndex) => arr.map(row => row[columnIndex]);

  const binaryToNumber = (binaryStr) => parseInt(binaryStr, 2);

  const sumJaggedArray = (arr) => arr.flat(Infinity).reduce((sum, num) => sum + num, 0);

  const maxJaggedArray = (arr) => Math.max(...arr.flat(Infinity));

  const deepCopyJaggedArray = (arr) => JSON.parse(JSON.stringify(arr));

  const longestWord = (str) => str.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, '');

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const uniqueRandomNumbers = (n) => {
    const arr = [...Array(n).keys()].map(i => i + 1);
    return shuffleArray(arr).slice(0, n);
  };

  const letterFrequency = (str) => {
    const frequency = {};
    str.replace(/[^a-zA-Z]/g, '').split('').forEach(char => {
      frequency[char] = (frequency[char] || 0) + 1;
    });
    return Object.entries(frequency);
  };

  const fibonacci = (n) => {
    let [a, b] = [BigInt(0), BigInt(1)];
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };

  const factorial = (n) => {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }
    return result;
  };

  // UI Section
  return (
    <div className="App">
      <h1>JavaScript Function Utilities</h1>

      {/* Distinct Array */}
      <div className="section">
        <h3>Distinct Array</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter numbers separated by commas" />
        <button onClick={() => setResult(distinctArray(input.split(',').map(Number)))}>Get Distinct Array</button>
      </div>

      {/* Prime Sum */}
      <div className="section">
        <h3>First 100 Prime Numbers Sum</h3>
        <button onClick={() => setResult(first100PrimesSum())}>Calculate Prime Sum</button>
      </div>

      {/* Prime Distances */}
      <div className="section">
        <h3>Prime Distances</h3>
        <button onClick={() => setResult(primeDistances())}>Print Prime Distances</button>
      </div>

      {/* Add Large Numbers */}
      <div className="section">
        <h3>Add Large Numbers</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter two numbers separated by comma" />
        <button onClick={() => {
          const [num1, num2] = input.split(',').map(n => n.trim());
          setResult(addLargeNumbers(num1, num2));
        }}>Add Large Numbers</button>
      </div>

      {/* Word Count */}
      <div className="section">
        <h3>Word Count</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text" />
        <button onClick={() => setResult(wordCount(input))}>Count Words</button>
      </div>

      {/* Capitalize Words */}
      <div className="section">
        <h3>Capitalize Words</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text" />
        <button onClick={() => setResult(capitalizeWords(input))}>Capitalize Words</button>
      </div>

      {/* Sum Comma Delimited */}
      <div className="section">
        <h3>Sum Comma Delimited</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter comma separated numbers" />
        <button onClick={() => setResult(sumCommaDelimited(input))}>Calculate Sum</button>
      </div>

      {/* Longest Word */}
      <div className="section">
        <h3>Longest Word</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text" />
        <button onClick={() => setResult(longestWord(input))}>Find Longest Word</button>
      </div>

      {/* Shuffle Array */}
      <div className="section">
        <h3>Shuffle Array</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter numbers separated by commas" />
        <button onClick={() => setResult(shuffleArray(input.split(',').map(Number)))}>Shuffle Array</button>
      </div>

      {/* Caesar Cipher */}
      <div className="section">
        <h3>Caesar Cipher</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text" />
        <input type="number" value={shift} onChange={(e) => setShift(parseInt(e.target.value))} placeholder="Shift" />
        <button onClick={() => setResult(caesarCipher(input, shift))}>Encrypt Text</button>
      </div>

      {/* Result Display */}
      <div className="result-section">
        <h3>Result</h3>
        <p>{JSON.stringify(result)}</p>
      </div>
    </div>
  );
}

export default App;
