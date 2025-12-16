"use client";

import { Heart } from "lucide-react";

export function RomanticFooter() {
  return (
    <footer className="w-full py-8 mt-16 border-t border-border bg-gradient-romantic">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
          <p className="font-signature text-2xl text-primary">
            Forever yours, Abeera
          </p>
          <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Made with endless love
        </p>
      </div>
    </footer>
  );
}
