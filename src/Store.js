import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext(null);

function Store({children}) {
  const [state, setState] = useState({
    name: ''
  });
    return (
      <StoreContext.Provider value = {{state, setState}}>
          {children}
      </StoreContext.Provider>
    );
}

const useStore = () => {
  const  store = useContext(StoreContext);
  return store;
}


export {
  Store,
  useStore
}