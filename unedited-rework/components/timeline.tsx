"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type TimelineItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  story: string;
};

const timelineItems: TimelineItem[] = [
  {
    id: "1",
    date: "2021 - Present",
    title: "Full Stack Developer",
    description: "Building advanced websites with Next.js, React and Hono.js.",
    story: "Detailed story about full stack development experience...",
  },
  {
    id: "2",
    date: "2015 - 2019",
    title: "Learning Python 3 and Web 3 technologies",
    description: "Building small applications with Python and HTML, CSS and JS",
    story: "This is my first real experience with coding...",
  },
];

export default function PortfolioLayout() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isStoryVisible, setIsStoryVisible] = useState(false);

  const selectedItem = timelineItems.find((item) => item.id === selectedId);

  const toggleStoryVisibility = () => {
    setIsStoryVisible(!isStoryVisible);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center">My Journey</h1>

      <div className="lg:hidden">
        <ScrollArea className="h-[50vh] pr-4 mb-8">
          {timelineItems.map((item, index) => (
            <TimelineCard
              key={item.id}
              item={item}
              index={index}
              isSelected={selectedId === item.id}
              onClick={() => {
                setSelectedId(item.id);
                setIsStoryVisible(true);
              }}
            />
          ))}
        </ScrollArea>

        <AnimatePresence>
          {isStoryVisible && selectedItem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <StoryCard
                selectedItem={selectedItem}
                onToggle={toggleStoryVisibility}
                isVisible={isStoryVisible}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden lg:flex flex-row gap-8">
        <div className="w-1/2">
          <ScrollArea className="h-[70vh] pr-4">
            {timelineItems.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                isSelected={selectedId === item.id}
                onClick={() => setSelectedId(item.id)}
              />
            ))}
          </ScrollArea>
        </div>
        <div className="w-1/2">
          <StoryCard selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

function TimelineCard({ item, index, isSelected, onClick }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative mb-8"
    >
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20"></div>
      <div className="relative flex items-center mb-4">
        <motion.div
          className={cn(
            "w-4 h-4 rounded-full border-4 border-background transition-all",
            isSelected ? "bg-primary scale-125" : "bg-primary/40"
          )}
          whileHover={{ scale: 1.2 }}
        ></motion.div>
        <div className="ml-4 text-sm text-muted-foreground font-medium">
          {item.date}
        </div>
      </div>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Card
          className={cn(
            "ml-6 cursor-pointer transition-all hover:shadow-lg",
            isSelected && "ring-2 ring-primary"
          )}
          onClick={onClick}
        >
          <CardHeader>
            <CardTitle className="text-primary">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

interface StoryCardProps {
  selectedItem: TimelineItem | undefined;
  onToggle?: () => void;
  isVisible?: boolean;
}

function StoryCard({ selectedItem, onToggle, isVisible }: StoryCardProps) {
  return (
    <Card className="h-full bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl text-primary">
          {selectedItem ? selectedItem.title : "My Story"}
        </CardTitle>
        {onToggle && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            aria-label={isVisible ? "Hide story" : "Show story"}
          >
            {isVisible ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {selectedItem ? (
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <CardDescription className="text-lg font-medium">
                {selectedItem.date}
              </CardDescription>
              <p className="text-card-foreground leading-relaxed">
                {selectedItem.story}
              </p>
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground"
            >
              Select a timeline item to view the story
            </motion.p>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
