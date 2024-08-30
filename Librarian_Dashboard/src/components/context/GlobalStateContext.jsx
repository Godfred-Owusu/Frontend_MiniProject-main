// src/context/GlobalStateContext.js
import React, { createContext, useState, useContext } from "react";

// Create a Context for the global state
const GlobalStateContext = createContext();

// Create a Provider component
export const GlobalStateProvider = ({ children }) => {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);

  return (
    <GlobalStateContext.Provider
      value={{ totalBooks, setTotalBooks, totalStudents, setTotalStudents }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for using the global state
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
