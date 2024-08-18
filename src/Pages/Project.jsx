import React, { useState } from 'react';

const Project = () => {
  const [count, setCount] = useState(0);
  const incre = () => {
    setCount(count + 1);

  };
  const decre = () => {
    setCount(count - 1);
  };


  return (
    <div>
      <h1>increment:{count}</h1>
      <button onClick={incre}>Adding it </button>

      <button onClick={decre}>Subtracting it </button>

    </div>
  );
}

export default Project;
