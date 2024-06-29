import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

interface BackgroundContextProps {
  background: string;
  toggleBackground: () => void;
}

const BackgroundContext = createContext<BackgroundContextProps | undefined>(undefined);

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a ThemeProvider');
  }
  return context;
};
