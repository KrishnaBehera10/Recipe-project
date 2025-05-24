import { createContext, useState } from "react";

export const contextData = createContext(null);
function MainContext({ children }) {
  const [data, setdata] = useState([]);
  return (
    <contextData.Provider value={{ data, setdata }}>
      {children}
    </contextData.Provider>
  );
}

export default MainContext;
