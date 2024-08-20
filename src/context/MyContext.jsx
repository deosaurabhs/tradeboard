import React, { createContext, useState } from "react";

// Create the context
const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [choosedLoginOption, setChoosedLoginOption] = useState(null);

  return (
    <MyContext.Provider value={{ choosedLoginOption, setChoosedLoginOption }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
