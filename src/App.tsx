import { useState, memo, useEffect, FC } from 'react';
import ReactDOM from 'react-dom';

interface CounterProps {
  count: number;
}

const Counter: FC<CounterProps> = memo(({ count }) => {
  return <h2>Contador: {count}</h2>;
});

const CounterPortal: FC<any> = (count: number, portal: any) => {
  return ReactDOM.createPortal(
    <Counter count={count} />, portal
  )
}

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1);

    return () => clearInterval(interval);
  }, []);

  const portal: HTMLElement | null = document.getElementById("root");

  if (!portal) {
    return null;
  }

  return (
    <main>
      <h1>Foi</h1>
      {CounterPortal(count, portal)}
    </main>
  );
};

export default Home;