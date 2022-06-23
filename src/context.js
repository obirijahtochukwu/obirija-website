import React, { useState, useContext } from 'react';


const AppContext = React.createContext();
const AppProvider = ({ children }) => {
 
 return (
  <AppContext.Provider
    value={{
     isSidebarOpen,
     openNav
    }}
   >
    {children}
   </AppContext.Provider>
 );
};
// make sure use
export const useGlobalContext = () => {
 return useContext(AppContext);
};

export { AppContext, AppProvider };
