"use client";
import React from "react";

export type Topic = {
  primaryText: string;
  headline: string;
  description: string;
  hashtag: string;
};

export const TopicsContext = React.createContext<{
  topics: Topic[];
  setTopics: (topics: Topic[]) => void;
}>({
  topics: [],
  setTopics: () => {},
});

export const TopicsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [topics, setTopics] = React.useState<Topic[]>([]);
  return (
    <TopicsContext.Provider value={{ topics, setTopics }}>
      {children}
    </TopicsContext.Provider>
  );
};