"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    // Generate random hearts
    const generatedHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 4}s`,
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            top: `${100 + Math.random() * 20}%`,
          }}
          size={16 + Math.random() * 16}
        />
      ))}
    </div>
  );
}
