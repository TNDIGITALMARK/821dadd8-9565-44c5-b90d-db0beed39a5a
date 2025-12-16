"use client";

import { RomanticNav } from "@/components/romantic-nav";
import { FloatingHearts } from "@/components/floating-hearts";
import { RomanticFooter } from "@/components/romantic-footer";
import { Heart, Sparkles, MessageCircleHeart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [greeting, setGreeting] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good morning, beautiful");
    } else if (hour < 18) {
      setGreeting("Good afternoon, my love");
    } else {
      setGreeting("Sweet dreams, my love");
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative">
      <RomanticNav />
      <FloatingHearts />

      {/* Hero Section */}
      <section className="section-romantic pt-32 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <p className="text-lg text-muted-foreground mb-4 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            {greeting}
          </p>

          <h1 className="text-5xl md:text-7xl mb-6 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            My Dearest Abeera
          </h1>

          <div className="romantic-card max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <div className="flex justify-center mb-6">
              <Heart className="w-12 h-12 text-primary fill-primary animate-heartbeat" />
            </div>

            <p className="text-lg leading-relaxed mb-6">
              Every sunrise reminds me of your beautiful smile, and every sunset whispers your name.
              This little corner of the internet is my love letter to you, written in code and designed
              with all my heart.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              You are the melody in my favorite song, the warmth in every embrace, and the light that
              guides me through even the darkest nights. Being with you feels like coming home to a place
              I never knew I was searching for.
            </p>

            <p className="text-lg leading-relaxed text-primary font-semibold">
              You are my everything, today and always.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-romantic py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/our-story" className="romantic-card text-center group cursor-pointer">
            <div className="flex justify-center mb-4">
              <MessageCircleHeart className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl mb-3">Our Story</h3>
            <p className="text-muted-foreground">
              A beautiful journey through our most cherished memories together
            </p>
          </Link>

          <Link href="/forever" className="romantic-card text-center group cursor-pointer">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl mb-3">Forever Promises</h3>
            <p className="text-muted-foreground">
              The commitments and dreams I hold for our future together
            </p>
          </Link>
        </div>
      </section>

      {/* Love Counter Section */}
      <section className="section-romantic py-12 relative z-10">
        <div className="romantic-card max-w-2xl mx-auto text-center gradient-romantic-reverse">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
          </div>
          <h3 className="text-2xl mb-4">Every Moment with You</h3>
          <p className="text-lg text-muted-foreground">
            Each day with you is a blessing, each moment a treasure. You make every second count.
          </p>
        </div>
      </section>

      {/* Favorite Things Section */}
      <section className="section-romantic py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12">The Things I Love About You</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="romantic-card text-center">
              <div className="text-4xl mb-4">🌹</div>
              <h4 className="text-xl mb-3 font-handwriting">Your Beautiful Soul</h4>
              <p className="text-muted-foreground text-sm">
                The kindness and warmth that radiates from within you
              </p>
            </div>

            <div className="romantic-card text-center">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="text-xl mb-3 font-handwriting">Your Radiant Smile</h4>
              <p className="text-muted-foreground text-sm">
                That lights up my world and makes everything better
              </p>
            </div>

            <div className="romantic-card text-center">
              <div className="text-4xl mb-4">💫</div>
              <h4 className="text-xl mb-3 font-handwriting">Your Gentle Spirit</h4>
              <p className="text-muted-foreground text-sm">
                The way you make everyone around you feel loved
              </p>
            </div>
          </div>
        </div>
      </section>

      <RomanticFooter />
    </div>
  );
}