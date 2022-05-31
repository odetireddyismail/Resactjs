import React, { useState,useMemo } from 'react'


//Memo
//Here Use-memo means it will check the state vale are repeated or not 
//If it will repeat the state value then it will stop the  Re-rendering
//pureComponent and Use-Memo are both are same purpose 

const Fun_memo = () => {
    const [count, setCount] = useState(0)
    const [cou, setCou] = useState(10)

    const multiCount11=useMemo(function multiCount(){
        console.log('multiCount')
       return  count*10
    },[count] )
    return (
        <div><h1>fun_memo</h1>
            <h3>Count:{count}</h3>
            <h3>Print:{cou}</h3>    
            <h2>{multiCount11}</h2>
            <button onClick={() => setCount(count + 1)}>Double_Count</button>
            <button onClick={() => setCou(cou + 1)}>button</button>
        </div>
    )
}

export default Fun_memo