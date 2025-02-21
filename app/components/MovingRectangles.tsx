"use client"

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface MovingRectangles extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
}

const MovingRectangles: React.FC<MovingRectangles> = (props) => {
  const { style, ...rest } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<gsap.core.Tween[]>([]);
  const listenerRefs = useRef<{ rect: Element; enter: EventListener; leave: EventListener }[]>([]);
  const [rectangles, setRectangles] = useState<Array<{
    top: string;
    left: string;
    width: number;
    color: string;
    rotation: number;
  }>>([]);
 
  // Generate consistent rectangle properties on mount
  useEffect(() => {
    const colors = ["#00bfff", "#ff3b3b", "#32ff7e", "#ff9f1a", "#8a2be2"];
    const newRectangles = Array(50).fill(null).map((_, index) => {
      const width = 60 + (index * 0.8) % 40; // Deterministic width
      return {
        top: `${(index * 2) % 100}%`,
        left: `-${width}px`,
        width,
        color: colors[index % 5],
        rotation: ((index * 7) % 30) - 15, // Deterministic rotation
      };
    });
    setRectangles(newRectangles);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !rectangles.length) return;
    
    const parents = document.querySelectorAll(".parent-rect");
    const rectElements = document.querySelectorAll(".rectangle");
    const animations: gsap.core.Tween[] = [];

    // Initialize animations with deterministic values
    parents.forEach((parent, index) => {
      const duration = 3 + (index * 0.08) % 4; // Deterministic duration
      const yOffset = ((index * 13) % 100 - 50) * 0.5; // Deterministic offset

      const anim = gsap.to(parent, {
        x: "110vw",
        y: yOffset,
        duration: duration,
        repeat: -1,
        ease: "none",
        delay: (index * 0.04) % 2, // Deterministic delay
      });
      animations.push(anim);
    });

    // Base animations for rectangles
    rectElements.forEach((rect, index) => {
      const floatAnim = gsap.to(rect, {
        y: (index % 2 === 0) ? 20 : -20,
        duration: 2 + (index * 0.04) % 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      animations.push(floatAnim);
    });

    animationRefs.current = animations;

    return () => {
      animationRefs.current.forEach((anim) => anim.kill());
      listenerRefs.current.forEach(({ rect, enter, leave }) => {
        rect.removeEventListener("mouseenter", enter);
        rect.removeEventListener("mouseleave", leave);
      });
      listenerRefs.current = [];
    };
  }, [rectangles]);

  useEffect(() => {
    if (!rectangles.length) return;
    const rectElements = document.querySelectorAll(".rectangle");

    rectElements.forEach((rect, index) => {
      const type = index % 3;

      const enterHandler: EventListener = () => {
        gsap.killTweensOf(rect, "hover");
        const timeline = gsap.timeline({ id: "hover" });
        
        switch(type) {
          case 0:
            timeline.to(rect, {
              y: "-=40",
              rotation: "+=45",
              scale: 1.2,
              duration: 0.4,
              ease: "back.out(1.7)",
            });
            break;
          case 1:
            timeline.to(rect, {
              y: "+=40",
              rotation: "-=45",
              scale: 1.2,
              duration: 0.4,
              ease: "back.out(1.7)",
            });
            break;
          case 2:
            timeline.to(rect, {
              y: "+=20",
              rotation: "+=30",
              scale: 1.1,
              duration: 0.2,
              ease: "power1.out",
            }).to(rect, {
              y: "-=40",
              rotation: "-=60",
              duration: 0.3,
              ease: "power1.inOut",
            }).to(rect, {
              y: "+=20",
              rotation: "+=30",
              duration: 0.2,
              ease: "power1.in",
            });
            break;
        }
      };

      const leaveHandler: EventListener = () => {
        gsap.to(rect, {
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
        });
      };

      rect.addEventListener("mouseenter", enterHandler);
      rect.addEventListener("mouseleave", leaveHandler);
      listenerRefs.current.push({ rect, enter: enterHandler, leave: leaveHandler });
    });

    return () => {
      listenerRefs.current.forEach(({ rect, enter, leave }) => {
        rect.removeEventListener("mouseenter", enter);
        rect.removeEventListener("mouseleave", leave);
      });
      listenerRefs.current = [];
    };
  }, [rectangles]);

  return (
    <div
      ref={containerRef}
      style={style}
      className="relative w-screen h-screen bg-black overflow-hidden"
      {...rest}
    > 
      {rectangles.map((rect, index) => (
        <div
          key={index}
          className="parent-rect absolute"
          style={{
            top: rect.top,
            left: rect.left,
          }}
        >
          <div
            className="rectangle h-[8px] opacity-80 cursor-pointer transition-opacity hover:opacity-100"
            style={{ 
              backgroundColor: rect.color,
              width: `${rect.width}px`,
              transform: `rotate(${rect.rotation}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MovingRectangles;