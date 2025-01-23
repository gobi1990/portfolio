"use client";

import React, { createContext, useContext, useRef } from "react";

type ScrollContextType = {
  homeRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const homeRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{ homeRef, projectsRef, contactRef, scrollToSection }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
