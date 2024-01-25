import React, { createContext, useState } from 'react'

const create = createContext();
const All_Com = () => {

    const [data, setData] = useState({
        color: 'red',
        backgroundColor:'gray',
        width: "100%"
    })


    const Cl = () => {

        setData({
            color: "blue",
            backgroundColor: 'orange',
            width: "100%"
        })
    }

    return (
        <create.Provider value={data}>
            <One></One>
            <Ano Cl={Cl} />

        </create.Provider>
    )
}

export default All_Com


const One = () => {


    console.log()
    return (
        <create.Consumer>
            {
                ({ color, backgroundColor ,width}) => {
                    return <h1 style={{ color: color, backgroundColor: backgroundColor,width:width }}>Hallow ismail</h1>
                }
            }
        </create.Consumer>
    )
}

const Ano = ({ Cl }) => {

    return (
        <div>
            <button onClick={Cl}>Click</button>
        </div>
    )
}
