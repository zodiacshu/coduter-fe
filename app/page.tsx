"use client"
import Image from "next/image";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import UserCount from "./components/UserCount";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const pythonRef = useRef<HTMLDivElement>(null);
  const jsRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Floating animation for code blocks
    gsap.to([pythonRef.current, jsRef.current], {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });

    // Glitch effect on hover
    const glitchEffect = (element: HTMLElement) => {
      gsap.to(element, {
        duration: 0.1,
        x: "+=5",
        repeat: 5,
        yoyo: true,
        onComplete: () => { gsap.set(element, { x: 0 }); return void 0; }
      });
    };

    // Hover interactions
    [pythonRef.current, jsRef.current].forEach(element => {
      element?.addEventListener('mouseenter', () => glitchEffect(element));
    });

    // Typing animation for tagline
    gsap.to(taglineRef.current, {
      duration: 3,
      text: {
        value: "Code. Battle. Dominate.",
        delimiter: ""
      },
      ease: "none"
    });

    // CTA button animation
    gsap.from(ctaRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 3,
      ease: "bounce.out"
    });

    // Pulsating effect for CTA button
    gsap.to(ctaRef.current, {
      scale: 1.1,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });

    return () => {
      // Cleanup event listeners
      [pythonRef.current, jsRef.current].forEach(element => {
        element?.removeEventListener('mouseenter', () => glitchEffect(element));
      });
    };
  }, []);

  return (
    <section className="h-screen bg-gradient-to-r from-[#00ff88] to-[#00a3ff] flex flex-col items-center justify-center overflow-hidden">
      <div className="flex justify-between items-center w-full p-4 absolute top-0 left-0">
        <Image src="/logoimg.png" alt="Logo" width={200} height={200} />
        <div>
            <button className="bg-white text-black px-4 py-2 rounded-full mr-2 border-2 border-purple-500 transiti</section>on-transform duration-300 hover:scale-105">Login</button>
            <button className="bg-white text-black px-4 py-2 rounded-full border-2 border-purple-500 transition-transform duration-300 hover:scale-105">Signup</button>
        </div>
      </div>
      <div className="flex gap-16 relative">
        {/* Python Code Block */}
        <div
          ref={pythonRef}
          className="bg-[#1a1a1a] p-8 rounded-lg text-[#00ff88] font-mono shadow-glow relative cursor-pointer"
        >
          <pre>{`def victory():\n    print("Code. Conquer. Repeat.")`}</pre>
          <div className="absolute inset-0 border-2 border-[#00ff88] rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </div>

        {/* JavaScript Code Block */}
        <div
          ref={jsRef}
          className="bg-[#1a1a1a] p-8 rounded-lg text-[#00ff88] font-mono shadow-glow relative cursor-pointer"
        >
          <pre>{`function dominate() {\n  console.log("Victory is binary.");\n}`}</pre>
          <div className="absolute inset-0 border-2 border-[#00ff88] rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </div>
      </div>

      <h1 ref={taglineRef} className="text-purple-900 text-4xl my-8 font-mono min-h-[1.2em]" />

      <button
        ref={ctaRef}
        className="bg-gradient-to-r from-[#00ff88] to-[#00a3ff] px-8 py-4 rounded-full font-bold relative overflow-hidden transition-transform duration-300 hover:scale-105 border-2 border-orange-500"
      >
        <span className="relative z-10 text-black">start game</span>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 animate-shine" />
      </button>
      <UserCount />
    </section>
  );
};

export default Hero;
