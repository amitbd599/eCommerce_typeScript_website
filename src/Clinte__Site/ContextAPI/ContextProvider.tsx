import React, { createContext } from "react";

const ContextInit = createContext("");
const ContextProvider = () => {
  return <ContextInit.Provider value={"Helloo"}>
    
  </ContextInit.Provider>;
};

export default ContextProvider;
