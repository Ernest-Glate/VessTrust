"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function MarqueeBand() {
  const text = "493M unbanked adults in Africa ✦ $331B SME financing gap ✦ One API call ✦ 7 behavioural fields ✦ Real-time scoring ✦ Pan-African ✦ BOG compliant ✦ ";
  
  // Concat multiple copies for seamless scroll
  const marqueeText = Array(4).fill(text).join("");

  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [speed, setSpeed] = useState(-30); // pixels per second

  // Smooth speed transition on hover
  useEffect(() => {
    const targetSpeed = isHovered ? 0 : -30;
    
    // Animate the speed value smoothly using a simple lerp/interval
    let animationFrame;
    const animateSpeed = () => {
      setSpeed((prevSpeed) => {
        const diff = targetSpeed - prevSpeed;
        if (Math.abs(diff) < 0.2) {
          return targetSpeed;
        }
        // Smooth ease-out speed transition
        const nextSpeed = prevSpeed + diff * 0.15;
        animationFrame = requestAnimationFrame(animateSpeed);
        return nextSpeed;
      });
    };
    
    animationFrame = requestAnimationFrame(animateSpeed);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  // Frame loop for pixel-perfect, frame-rate independent position updating
  useAnimationFrame((time, delta) => {
    if (!containerRef.current) return;

    // Use delta time to prevent speed differences on 60Hz vs 120Hz/144Hz displays
    const deltaSeconds = Math.min(delta / 1000, 0.1); // Cap delta to prevent huge jumps on tab switch
    const movement = speed * deltaSeconds;

    let newX = x.get() + movement;

    // Seamless loop calculations based on container scroll width
    const halfWidth = containerRef.current.scrollWidth / 2;
    if (newX <= -halfWidth) {
      newX = 0;
    } else if (newX > 0) {
      newX = -halfWidth;
    }

    x.set(newX);
  });

  return (
    <div 
      className="w-full bg-[#FAF9F5] border-y border-slate-200/80 overflow-hidden py-4 select-none cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex whitespace-nowrap">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex text-gold font-playfair font-medium text-sm md:text-base tracking-wide whitespace-nowrap"
        >
          <span className="pr-4">{marqueeText}</span>
          <span className="pr-4">{marqueeText}</span>
        </motion.div>
      </div>
    </div>
  );
}
