import React, { createContext, useState } from "react";

const AsideContext = createContext();

const AsideProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [dimensions, SetDimensions] = useState()

  const handleMenuClick = () => {
    setHidden(!hidden);
  };

  return (
    <AsideContext.Provider value={{ dimensions, hidden, SetDimensions, handleMenuClick }}>
      {children}
    </AsideContext.Provider>
  );
};

export default AsideContext;
export { AsideProvider };

