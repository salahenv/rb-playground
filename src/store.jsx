import {
    createContext,
    useContext,
    useReducer
  } from 'react';
  
  export default function makeStore(userReducer, initialState,) {
    const dispatchContext = createContext(undefined);
    const storeContext = createContext(initialState);
  
    const reducer = (state, action) => {
      const newState = userReducer(state, action);
      return newState;
    };
  
    const StoreProvider = ({ children }) => {
      const [store, dispatch] = useReducer(reducer, initialState);
      return (
        <dispatchContext.Provider value={dispatch}>
          <storeContext.Provider value={store}>{children}</storeContext.Provider>
        </dispatchContext.Provider>
      );
    };
  
    function useDispatch() {
      const dispatch = useContext(dispatchContext);
      if (!dispatch)
        throw new Error(
          'dispatch must be used under store Provider and it should be define in context'
        );
      return dispatch;
    }
  
    function useStore() {
      const store = useContext(storeContext);
      if (!store) throw new Error('store must be used under store Provider');
      return store;
    }
  
    return [StoreProvider, useStore, useDispatch];
  }