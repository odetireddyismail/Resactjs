import React, { useReducer } from 'react'
//The useReducer hook uses the same concept as the reducer in Redux.
//It is basically a pure function,with no side-effects
//the function always return the same output if the 
//same arguments are passed

//the function does not produce the any side effects.

const initialState = 10;
const reducer = (state, action) => {

    if (action.type === 'IN') {

        return state + 1
    }

    if (action.type === "DE") {

        return state - 1
    }

    else {

        return state
    }

}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={() => dispatch({ type: 'IN' })}>+</button>
            <h1> {state}</h1>
            <button onClick={() => dispatch({ type: 'DE' })}>-</button>
        </div>
    )
}

export default UseReducer