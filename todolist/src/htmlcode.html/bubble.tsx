import { useState } from "react";

export default function BubbleSortDemo() {
  const [numbers, setNumbers] = useState([5, 1, 4, 2, 8]);

  function bubbleSort(arr: number[]) {
    let newArr = [...arr]; // copy (important in React)
    let n = newArr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (newArr[j] > newArr[j + 1]) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        }
      }
    }
    return newArr;
  }

  function handleSort() {
    const sorted = bubbleSort(numbers);
    setNumbers(sorted);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bubble Sort in React</h2>

      <p>
        {numbers.map((num, index) => (
          <span key={index}>{num} </span>
        ))}
      </p>

      <button onClick={handleSort}>Sort</button>
    </div>
  );
}