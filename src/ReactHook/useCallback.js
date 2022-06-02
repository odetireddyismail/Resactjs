import React, { useState } from 'react'

const Use = () => {
    const [data, setData] = useState(0)
    const [count, setCount] = useState([])

    console.log(count)
    const click = () => {

        setData((g) => {
            return g + 1
        })
        Todo() 
    }

    const Todo = () => {
         
        

        setCount((t) => {

            return [...t,data]
        })
    }
    return (
        <div>
            <Call count={count} Todo={Todo} />
            <h1>{data}</h1>
            <button onClick={click}>ADD</button>
        </div>
    )
}

export default Use

//import React from 'react'

const Call = ({ count, Todo }) => {
    return (
        <div>
            <h3>{count.map((h, i) =>
                <div key={i}><h2>{i}{h }</h2></div>)}</h3>
            <button onClick={Todo}>Name</button>
        </div>
    )
}

//export default Call