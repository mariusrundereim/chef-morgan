"use client";

import { createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
  navTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType>({ navTheme: "light" });

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
  navTheme: "dark" | "light";
}

export function ThemeProvider({ children, navTheme }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ navTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
