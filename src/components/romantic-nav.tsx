"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";

export function RomanticNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Heart className="w-6 h-6 text-primary animate-heartbeat" />
            <span className="font-signature text-2xl text-primary">
              For Abeera
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`transition-romantic ${
                isActive("/")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/our-story"
              className={`transition-romantic ${
                isActive("/our-story")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Our Story
            </Link>
            <Link
              href="/forever"
              className={`transition-romantic ${
                isActive("/forever")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Forever
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
