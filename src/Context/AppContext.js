import { createContext, useReducer } from "react"

const AppReducer = (state, action)=> {
    switch(action.type){
        case 'ADD_EXPANSE':
            return {
                ...state,
                expanses: [...state.expanses, action.payload]
            }
        case 'DELETE_EXPANSE':
            return {
                ...state,
                expanses: state.expanses.filter(item=> item.id !== action.payload)
            }
        case 'SET_AMOUNT':
            return {
                ...state,
                budget: action.payload
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 0,
    expanses: []
}

export const AppContext = createContext()

export const AppProvider= (props)=> {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider
            value={{ budget: state.budget, expanses: state.expanses, dispatch }}
        >
            {props.children}
        </AppContext.Provider>
    )
}