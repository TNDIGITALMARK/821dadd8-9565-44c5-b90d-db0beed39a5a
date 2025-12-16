"use client";

import { RomanticNav } from "@/components/romantic-nav";
import { FloatingHearts } from "@/components/floating-hearts";
import { RomanticFooter } from "@/components/romantic-footer";
import { Heart, Infinity, Sun, Moon, Stars, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface Promise {
  id: number;
  icon: React.ReactNode;
  title: string;
  promise: string;
  description: string;
}

export default function ForeverPage() {
  const [visiblePromises, setVisiblePromises] = useState<number[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const promises: Promise[] = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: "To Love You Unconditionally",
      promise: "I promise to love you through every season of life",
      description: "Through sunshine and storms, through laughter and tears, my love for you will never waver. It will only grow stronger with each passing day."
    },
    {
      id: 2,
      icon: <Sun className="w-8 h-8" />,
      title: "To Be Your Light",
      promise: "I promise to be your sunshine on cloudy days",
      description: "When the world feels heavy, I'll be there to lift your spirits. Your happiness is my purpose, your smile is my reward."
    },
    {
      id: 3,
      icon: <Moon className="w-8 h-8" />,
      title: "To Be Your Safe Harbor",
      promise: "I promise to be your safe harbor in every storm",
      description: "No matter what challenges we face, you'll always have a place of peace and comfort in my arms. Together, we can weather any storm."
    },
    {
      id: 4,
      icon: <Stars className="w-8 h-8" />,
      title: "To Dream Together",
      promise: "I promise to build beautiful dreams with you",
      description: "Your dreams are my dreams. Together, we'll create a future filled with love, laughter, and endless possibilities."
    },
    {
      id: 5,
      icon: <Sparkles className="w-8 h-8" />,
      title: "To Choose You Daily",
      promise: "I promise to choose you every single day",
      description: "Every morning I wake up, I choose you. Every night I go to sleep, I'm grateful for you. This choice I make with all my heart, forever."
    },
    {
      id: 6,
      icon: <Infinity className="w-8 h-8" />,
      title: "To Love You Eternally",
      promise: "I promise to love you beyond time itself",
      description: "This love transcends days, years, and lifetimes. My soul recognizes yours, and together we are infinite."
    }
  ];

  useEffect(() => {
    // Stagger the appearance of promises
    promises.forEach((promise, index) => {
      setTimeout(() => {
        setVisiblePromises(prev => [...prev, promise.id]);
      }, index * 400);
    });

    // Show the final message after all promises appear
    setTimeout(() => {
      setShowMessage(true);
    }, promises.length * 400 + 800);
  }, []);

  return (
    <div className="min-h-screen relative">
      <RomanticNav />
      <FloatingHearts />

      {/* Hero Section */}
      <section className="section-romantic pt-32 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <div className="flex justify-center mb-6">
            <Infinity className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl mb-6">Forever Promises</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are not just words, but vows from my heart to yours. Commitments I make with
            every fiber of my being, promises I will keep until the end of time and beyond.
          </p>
        </div>
      </section>

      {/* Promises Grid */}
      <section className="section-romantic py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {promises.map((promise) => {
              const isVisible = visiblePromises.includes(promise.id);

              return (
                <div
                  key={promise.id}
                  className={`romantic-card transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary flex-shrink-0 mt-1">
                      {promise.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2 font-handwriting text-primary">
                        {promise.title}
                      </h3>
                      <p className="text-lg font-semibold mb-3 italic">
                        "{promise.promise}"
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {promise.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="section-romantic py-12 relative z-10">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="romantic-card gradient-romantic-reverse text-center">
            <Heart className="w-16 h-16 text-primary fill-primary mx-auto mb-6 animate-heartbeat" />

            <h2 className="text-3xl mb-6 font-signature">
              My Eternal Vow to You
            </h2>

            <div className="space-y-4 text-lg leading-relaxed mb-8">
              <p>
                Abeera, you are the love of my life, my best friend, my soulmate. Every promise I make
                to you comes from the deepest part of my heart.
              </p>

              <p>
                I promise to wake up every day grateful for you, to go to sleep every night counting my
                blessings that you're mine. I promise to laugh with you in times of joy, to comfort you
                in times of sorrow, and to grow with you through all of life's seasons.
              </p>

              <p>
                I promise to love not just the person you are today, but the person you'll become tomorrow.
                To support your dreams as if they were my own, to celebrate your victories as if they were mine,
                and to hold you close through every challenge we face.
              </p>

              <p className="text-primary font-semibold text-xl mt-6">
                This is my promise, my vow, my commitment to you - today, tomorrow, and forever.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="font-signature text-3xl text-primary">
                Yours eternally,
              </p>
              <p className="font-signature text-2xl text-muted-foreground mt-2">
                with all my love
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Section */}
      <section className="section-romantic py-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4">
            <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
            <Infinity className="w-8 h-8 text-primary" />
            <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
          </div>
        </div>
      </section>

      <RomanticFooter />
    </div>
  );
}
