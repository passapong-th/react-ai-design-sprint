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
  campaignName: string;
  setCampaignName: (name: string) => void;
}>({
  topics: [],
  setTopics: () => {},
  campaignName: "",
  setCampaignName: () => {},
});

export const TopicsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [topics, setTopics] = React.useState<Topic[]>([]);
  const [campaignName, setCampaignName] = React.useState<string>("");
  
  return (
    <TopicsContext.Provider value={{ topics, setTopics, campaignName, setCampaignName }}>
      {children}
    </TopicsContext.Provider>
  );
};