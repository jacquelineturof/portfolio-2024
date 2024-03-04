import React, { createContext, useState, useContext } from 'react';

// Create Context
const CursorContext = createContext();

export function CursorContextProvider({ children }) {
  const [isMouseOverNav, setIsMouseOverNav] = useState(false);

  return (
    <CursorContext.Provider value={{ isMouseOverNav, setIsMouseOverNav }}>
      {children}
    </CursorContext.Provider>
  );
}

// Custom Hook to use the context
export function useCursorContext() {
  return useContext(CursorContext);
}
