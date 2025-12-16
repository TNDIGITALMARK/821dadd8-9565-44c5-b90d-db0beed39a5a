"use client";

import { RomanticNav } from "@/components/romantic-nav";
import { FloatingHearts } from "@/components/floating-hearts";
import { RomanticFooter } from "@/components/romantic-footer";
import { Heart, Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  location: string;
  description: string;
  emoji: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "The Beginning",
    title: "When Our Eyes First Met",
    location: "A Moment Frozen in Time",
    description: "I remember that day like it was yesterday. The world seemed to stop, and in that instant, I knew my life would never be the same. Your smile captured my heart.",
    emoji: "💫"
  },
  {
    id: 2,
    date: "Our First Date",
    title: "Moonlight Café Magic",
    location: "Under the Stars",
    description: "We talked for hours, and time seemed to stand still. The coffee grew cold, but our conversation was warm and endless. I fell deeper with every word you spoke.",
    emoji: "☕"
  },
  {
    id: 3,
    date: "A Special Day",
    title: "The Day You Said Yes",
    location: "Cherry Blossom Park",
    description: "Pink petals falling around us like nature's confetti. When you said yes, my heart soared higher than I ever thought possible. That moment is etched in my soul forever.",
    emoji: "🌸"
  },
  {
    id: 4,
    date: "Our Adventure",
    title: "Mountain Lake Retreat",
    location: "Where Mountains Touch the Sky",
    description: "We hiked together, laughed together, and watched the sunset paint the sky in colors that rivaled the beauty I see in you. Every step with you is an adventure.",
    emoji: "🏔️"
  },
  {
    id: 5,
    date: "A Quiet Evening",
    title: "Stargazing Together",
    location: "Under the Infinite Universe",
    description: "Lying on a blanket, counting stars, and making wishes. But I realized I didn't need to wish for anything - I already had everything I ever wanted right beside me.",
    emoji: "⭐"
  },
  {
    id: 6,
    date: "Today and Always",
    title: "Every Moment with You",
    location: "Wherever We Are Together",
    description: "Our story continues to unfold, each chapter more beautiful than the last. With you, every ordinary day becomes extraordinary, every moment a cherished memory.",
    emoji: "💝"
  }
];

export default function OurStoryPage() {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);

  useEffect(() => {
    // Stagger the appearance of timeline events
    timelineEvents.forEach((event, index) => {
      setTimeout(() => {
        setVisibleEvents(prev => [...prev, event.id]);
      }, index * 300);
    });
  }, []);

  return (
    <div className="min-h-screen relative">
      <RomanticNav />
      <FloatingHearts />

      {/* Hero Section */}
      <section className="section-romantic pt-32 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl mb-6">Our Beautiful Story</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of moments that brought us together and memories that keep us close.
            Every chapter of our story is written with love, sealed with a kiss, and treasured forever.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-romantic py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const isVisible = visibleEvents.includes(event.id);
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={event.id}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <div className={`md:flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                      {/* Content Card */}
                      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                        <div className="romantic-card">
                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                              {event.date}
                            </span>
                          </div>

                          <h3 className="text-2xl mb-2 font-handwriting">
                            {event.title}
                          </h3>

                          <div className={`flex items-center gap-2 mb-4 text-muted-foreground ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{event.location}</span>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Marker */}
                      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-card border-2 border-primary shadow-lg flex items-center justify-center text-3xl">
                          {event.emoji}
                        </div>
                      </div>

                      {/* Spacer for layout */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Memory Gallery Section */}
      <section className="section-romantic py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="romantic-card gradient-romantic text-center">
            <Heart className="w-12 h-12 text-primary fill-primary mx-auto mb-6 animate-heartbeat" />
            <h2 className="text-3xl mb-4 font-handwriting">
              Every Memory is a Treasure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These moments are just the beginning of our beautiful story. With you, every day brings
              new memories to cherish, new reasons to smile, and new chapters to write together.
            </p>
          </div>
        </div>
      </section>

      <RomanticFooter />
    </div>
  );
}
