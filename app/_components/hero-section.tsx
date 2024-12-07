"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter">
          Web design & development
        </h1>
        <p className={`text-xl md:text-2xl mb-8 max-w-2xl`}>
          Crafting a new web through interactive and creative design
        </p>
        <Link href="/experience">
          <Button
            size="lg"
            className="bg-violet-600 text-white hover:bg-violet-700 transition-colors"
          >
            View My Work
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
