import React,{createContext, useContext, useReducer} from 'react';

export const StateContext = createContext(); // data layer

export const StateProvider=({reducer,initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)} >
        {children}
    </StateContext.Provider>
)

// hook allows us to pull info from data layer
export const useStateValue = ()=> useContext(StateContext);

