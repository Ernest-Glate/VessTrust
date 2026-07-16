"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

export default function StatCounter({ targetValue, prefix = "", suffix = "", label, duration = 2.0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, targetValue, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-playfair font-semibold text-gold tracking-tight mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-mutedText text-xs md:text-sm font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}
