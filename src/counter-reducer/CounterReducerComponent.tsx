import { useReducer } from "react";
import { doDecreaseBy, doIncreaseBy, doReset } from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

/**
 * Se usa un tipo cuando queremos una definición fija de un objeto
 * Se usa una interfaz si queremos agregar progresivamente alguna propiedad al objeto de turno
 */

// estado inicial (tipado)
const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

export const CounterReducerComponent = () => {

  // en este caso todo funciona como si fuese hecho en JavaScript
  // los tipados están afectando a las definiciones previas
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  // recordar que se debe tipar el argumento de la función
  const handleClick = (increment: number = 1) => {
    dispatch(doIncreaseBy(increment)); // el dispatch usa un action creator (ver actions/actions.ts)
  };

  const handleReset = () => {
    dispatch(doReset()) // el dispatch usa un action creator (ver actions/actions.ts)
  }

  const handleDecrement = (decrement: number = 1) => {
    dispatch(doDecreaseBy(decrement)) // el dispatch usa un action creator (ver actions/actions.ts)
  }

  return (
    <>
      <h1>Counter Reducer Segmentado: {state.counter}</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>

      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleReset()}>Reset</button>
      <button onClick={() => handleDecrement()}>-1</button>
    </>
  );
};
