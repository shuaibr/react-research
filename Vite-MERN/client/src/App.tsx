import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-3xl mb-4"># of Times Baber said something Racist: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={incrementCounter}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
