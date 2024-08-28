import React, { createContext, useContext, useRef, useState } from 'react';
const TechnologyContext = createContext();

export const useTechnologyContext = () => useContext(TechnologyContext);

export const TechnologyProvider = ({ children }) => {
  const technologyRef = useRef(null);



  return (
    <TechnologyContext.Provider value={{ technologyRef }}>
      {children}
    </TechnologyContext.Provider>
  );
};
