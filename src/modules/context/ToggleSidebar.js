import React, { useState } from 'react';

export const ToggleContext = React.createContext();

export const ToggleProvider = ({ children }) => {
  const [appead, setAppead] = useState(false);
  const toggle = () => {
    setAppead(!appead);
  };
  return (
    <ToggleContext.Provider
      value={{
        toggle: toggle,
        appead: appead,
      }}>
      {children}
    </ToggleContext.Provider>
  );
};
