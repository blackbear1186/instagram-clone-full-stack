import React, {createContext, useReducer} from 'react'

export const AppReducer = (state, action) => {
  switch(action.type) {

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
}

const initialState = {
  user: null
}

export const AppContext = createContext(initialState)

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider 
      value={{
        user: state.user, 
        dispatch,
      }}
      >
      {children}
      </AppContext.Provider>
  )
}