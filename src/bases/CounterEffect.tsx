import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

  const [counter, setCounter] = useState(5);

  // tipado del elemento para este useRef
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = (increment: number = 1) => {

    if (counter + increment > MAXIMUM_COUNT) return;

    setCounter((prev) => prev + increment);
  };

  useEffect(() => {

    const tl = gsap.timeline();

    // montado
    if(counter === MAXIMUM_COUNT){
      console.log('%cEl contador llegó a su máximo', 'color: red; font-size: 20px;');
      tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
        .to(counterElement.current, {y: 10, duration: 1, ease: 'bounce.out'});
    }
  }, [counter]);
  

  return (
    <>
      <h1>Counter Effect: </h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};
