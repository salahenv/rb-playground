import makeStore from "./store";


const reducer  = (state, action) => {
    switch (action.type) {
        case 'ADD_LIST': {
          return {
            ...state,
            list: action.payload
          };
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

const [StoreProvider, useStore, useDispatch] = makeStore(reducer, {list: []});

export { StoreProvider, useStore, useDispatch };