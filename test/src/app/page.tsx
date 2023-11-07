"use client"

import React, { useState, memo, useEffect, FC } from 'react';
import ReactDOM from 'react-dom';

interface CounterProps {
  count: number;
}

const Counter: FC<CounterProps> = memo(({ count }) => {
  return <h2>Contador: {count}</h2>;
});

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <h1>Foi</h1>
      {ReactDOM.createPortal(<Counter count={count} />, document.body)}
    </main>
  );
};

export default Home;
