'use client';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const UserCount = () => {
  const [count, setCount] = useState(0);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newsocket = new WebSocket('ws://localhost:8080');

    newsocket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    newsocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'userCount') {
        setCount(message.count);
      }
    };

    setSocket(newsocket);
    return () => newsocket.close();
  }, []);

  useEffect(() => {
    if (circleRef.current && countRef.current) {
      // Circle animation
      gsap.to(circleRef.current, {
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // Text glow animation
      gsap.fromTo(
        countRef.current,
        { opacity: 0.5, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        }
      );
    }
  }, []);

  return (
    <div style={{ marginTop: '40px', position: 'relative', textAlign: 'center' }} className="user-count">
      {/* Glowing Circle */}
      <div
        ref={circleRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '200px',
          height: '200px',
          backgroundColor: '#ff0055',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
        }}
        className="glow"
      ></div>

      {/* Glowing Count */}
      <div
        ref={countRef}
        style={{
          fontSize: '48px',
          color: '#fff',
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 1,
          
        }}
        className="text-glow"
      >
        {count}
      </div>

      {/* Glowing Label */}
      <div
        style={{
          fontSize: '24px',
          color: '#fff',
          marginTop: '10px',
          position: 'relative',
          zIndex: 1,
        }}
        className="text-glow"
      >
        Live Battles
      </div>
    </div>
  );
};

export default UserCount;
