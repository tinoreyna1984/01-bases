import { useState } from "react";

// interfaz que define el tipo de los props
interface Props {
  initialValue?: number;
}

// interfaz que define el tipo del estado a trabajar
interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {

  // uso especial del hook useState (respetando el tipado definido previamente)
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number = 1) => {
    setCounterState(({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
