import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const MyProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const value = {
    counter,
    setCounter,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  return useContext(CounterContext);
};
