import { useReducer } from "react";

/**
 * Se usa un tipo cuando queremos una definición fija de un objeto
 * Se usa una interfaz si queremos agregar progresivamente alguna propiedad al objeto de turno
 */

type CounterAction =
  | {type: 'increaseBy', payload: { value: number } }
  | {type: 'decreaseBy', payload: { value: number } }
  | {type: 'reset'}

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

// estado inicial (tipado)
const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

// el state y el action deben estar tipados (notar las interfaces)
// lo demás es igual que siempre
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch(action.type) {
    case 'increaseBy':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case 'decreaseBy':
      return {
        ...state,
        counter: state.counter - action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case 'reset':
      return {
        ...state,
        counter: 0,
        previous: 0,
        changes: 0,
      }
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {

  // en este caso todo funciona como si fuese hecho en JavaScript
  // los tipados están afectando a las definiciones previas
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  // recordar que se debe tipar el argumento de la función
  const handleClick = (increment: number = 1) => {
    dispatch({type: 'increaseBy', payload: { value: increment }})
  };

  const handleReset = () => {
    dispatch({type: 'reset'})
  }

  const handleDecrement = (decrement: number = 1) => {
    dispatch({type: 'decreaseBy', payload: { value: decrement }})
  }

  return (
    <>
      <h1>Counter Reducer: {state.counter}</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>

      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleReset()}>Reset</button>
      <button onClick={() => handleDecrement()}>-1</button>
    </>
  );
};
