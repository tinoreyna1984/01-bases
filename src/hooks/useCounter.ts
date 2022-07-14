/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Props {
  maxCount: number;
}

export const useCounter = ({ maxCount = 10 }: Props) => {
  const [counter, setCounter] = useState(5);

  // tipado del elemento para este useRef
  const counterElement = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = (increment: number = 1) => {
    if (counter + increment > maxCount) return;

    setCounter((prev) => prev + increment);
  };

  useLayoutEffect(() => {
    if (!counterElement.current) return;

    // montado
    if (counter === maxCount) {
      tl.current
        .to(counterElement.current, {
          y: -10,
          duration: 0.2,
          ease: "ease.out",
        })
        .to(counterElement.current, { y: 10, duration: 1, ease: "bounce.out" });
    }
  }, [counter]);

  useEffect(() => {
    if (counter < maxCount) return;

    tl.current.play(0);
  }, [counter]);

  return { counterElement, counter, handleClick };
};
