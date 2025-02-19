// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// interface MovingRectangles extends React.HTMLAttributes<HTMLDivElement> {
//   style?: React.CSSProperties;
// }

// const MovingRectangles: React.FC<MovingRectangles> = (props) => {
//   const { style, ...rest } = props;
//   const containerRef = useRef<HTMLDivElement>(null);
//   const animationRefs = useRef<gsap.core.Tween[]>([]);
//   const listenerRefs = useRef<{ rect: Element; enter: EventListener; leave: EventListener }[]>([]);

//   useEffect(() => {
//     const rectangles = document.querySelectorAll(".rectangle");
//     const parents = document.querySelectorAll(".parent-rect");
//     const animations: gsap.core.Tween[] = [];

//     // Initialize different speed animations
//     parents.forEach((parent, index) => {
//       const type = index % 2 === 0 ? "A" : "B";
//       const anim = gsap.to(parent, {
//         x: "110vw",
//         duration: type === "A" ? 4 : 6,
//         repeat: -1,
//         ease: "circIn",
//         delay: Math.random() * 2,
//       });
//       animations.push(anim);
//     });

//     // Rotation and scaling animations
//     rectangles.forEach((rect) => {
//       const rotationAnim = gsap.to(rect, {
//         rotation: 360,
//         duration: 5,
//         repeat: -1,
//         ease: "linear",
//       });

//       const scaleAnim = gsap.to(rect, {
//         scale: 1,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut",
//       });

//       animations.push(rotationAnim, scaleAnim);
//     });

//     animationRefs.current = animations;

//     // Cleanup
//     return () => {
//       animationRefs.current.forEach((anim) => anim.kill());
//       listenerRefs.current.forEach(({ rect, enter, leave }) => {
//         rect.removeEventListener("mouseenter", enter);
//         rect.removeEventListener("mouseleave", leave);
//       });
//       listenerRefs.current = [];
//     };
//   }, []);

//   useEffect(() => {
//     const rectangles = document.querySelectorAll(".rectangle");

//     // Hover interactions
//     rectangles.forEach((rect, index) => {
//       const type = index % 2 === 0 ? "A" : "B";

//       const enterHandler: EventListener = () => {
//         const moveX = type === "A" ? "+=100" : "-=100";
//         const moveY = type === "A" ? "-=50" : "+=50";

//         gsap.to(rect, {
//           x: moveX,
//           y: moveY,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       };

//       const leaveHandler: EventListener = () => {
//         gsap.to(rect, {
//           x: 0,
//           y: 0,
//           duration: 0.5,
//           ease: "elastic.out(1, 0.5)",
//         });
//       };

//       rect.addEventListener("mouseenter", enterHandler);
//       rect.addEventListener("mouseleave", leaveHandler);
//       listenerRefs.current.push({ rect, enter: enterHandler, leave: leaveHandler });
//     });

//     // Cleanup
//     return () => {
//       listenerRefs.current.forEach(({ rect, enter, leave }) => {
//         rect.removeEventListener("mouseenter", enter);
//         rect.removeEventListener("mouseleave", leave);
//       });
//       listenerRefs.current = [];
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={style}
//       className="relative w-screen h-screen bg-black overflow-hidden"
//       {...rest}
//     > 
//       {[...Array(100)].map((_, index) => {
//         const color = ["#00bfff", "#ff3b3b", "#32ff7e", "#ff9f1a", "#8a2be2"][index % 5];

//         return (
//           <div
//             key={index}
//             className="parent-rect absolute"
//             style={{
//               top: `${5 * index}%`,
//               left: "-100px",
//             }}
//           >
//             <div
//               className="rectangle h-[15px] w-[100px] opacity-80"
//               style={{ backgroundColor: color }}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MovingRectangles;
"use client"

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MovingRectangles extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
}

const MovingRectangles: React.FC<MovingRectangles> = (props) => {
  const { style, ...rest } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<gsap.core.Tween[]>([]);
  const listenerRefs = useRef<{ rect: Element; enter: EventListener; leave: EventListener }[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this runs only on the client
    const rectangles = document.querySelectorAll(".rectangle");
    const parents = document.querySelectorAll(".parent-rect");
    const animations: gsap.core.Tween[] = [];

    // Initialize different speed animations with varying paths
    parents.forEach((parent, index) => {
      // const type = index % 3; // Three different movement patterns
      const duration = 3 + Math.random() * 4; // Random duration between 3-7 seconds
      const yOffset = (Math.random() - 0.5) * 50; // Random vertical offset

      const anim = gsap.to(parent, {
        x: "110vw",
        y: yOffset,
        duration: duration,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 2,
      });
      animations.push(anim);
    });

    // Base animations for rectangles
    rectangles.forEach((rect) => {
      const floatAnim = gsap.to(rect, {
        y: "random(-20, 20)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      animations.push(floatAnim);
    });

    animationRefs.current = animations;

    // Cleanup
    return () => {
      animationRefs.current.forEach((anim) => anim.kill());
      listenerRefs.current.forEach(({ rect, enter, leave }) => {
        rect.removeEventListener("mouseenter", enter);
        rect.removeEventListener("mouseleave", leave);
      });
      listenerRefs.current = [];
    };
  }, []);

  useEffect(() => {
    const rectangles = document.querySelectorAll(".rectangle");

    // Enhanced hover interactions
    rectangles.forEach((rect, index) => {
      const type = index % 3;

      const enterHandler: EventListener = () => {
        // Kill any existing hover animations
        gsap.killTweensOf(rect, "hover");

        // Create dynamic hover animation
        const timeline = gsap.timeline({ id: "hover" });
        
        switch(type) {
          case 0:
            // Upward bounce
            timeline.to(rect, {
              y: "-=40",
              rotation: "+=45",
              scale: 1.2,
              duration: 0.4,
              ease: "back.out(1.7)",
            });
            break;
          case 1:
            // Downward bounce
            timeline.to(rect, {
              y: "+=40",
              rotation: "-=45",
              scale: 1.2,
              duration: 0.4,
              ease: "back.out(1.7)",
            });
            break;
          case 2:
            // Wave motion
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

    // Cleanup
    return () => {
      listenerRefs.current.forEach(({ rect, enter, leave }) => {
        rect.removeEventListener("mouseenter", enter);
        rect.removeEventListener("mouseleave", leave);
      });
      listenerRefs.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={style}
      className="relative w-screen h-screen bg-black overflow-hidden"
      {...rest}
    > 
      {[...Array(50)].map((_, index) => {
        const color = ["#00bfff", "#ff3b3b", "#32ff7e", "#ff9f1a", "#8a2be2"][index % 5];
        const width = 60 + Math.random() * 40; // Random width between 60-100px

        return (
          <div
            key={index}
            className="parent-rect absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `-${width}px`,
            }}
          >
            <div
              className="rectangle h-[8px] opacity-80 cursor-pointer transition-opacity hover:opacity-100"
              style={{ 
                backgroundColor: color,
                width: `${width}px`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`, // Random initial rotation
              }}
            />
          </div>
        );
      })}
    </div>
  );
};


export default MovingRectangles;