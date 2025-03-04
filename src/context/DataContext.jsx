import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addData = (newItem) => {
    setData([...data, newItem]);
  };

  return (
    <DataContext.Provider value={{ data, addData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
