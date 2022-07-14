import { useState } from "react";

// interfaz que define el tipo de los props
interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = (increment: number = 1) => {
    setCounter((prev) => prev + increment);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};
