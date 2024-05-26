"use client";
import { useInView } from "framer-motion";
import { Plus } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";

type Props = {
  endValue: number;
  duration: number;
};

const CounterCard: FC<Props> = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      // You can trigger actions here when the section becomes visible
    }
  }, [isInView]);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount(Math.min(endValue, (progress / duration) * endValue));
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration]);

  return (
    <div ref={ref} className="flex">
      <p
        className={`font-bold lg:text-5xl text-4xl ${
          isInView ? "slide-up" : ""
        }`}
      >
        {Math.round(count)}{" "}
      </p>
      <span className="pt-3">
        <Plus />
      </span>
    </div>
  );
};

export default CounterCard;
