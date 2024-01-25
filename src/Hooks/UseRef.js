import React,{useRef} from 'react'

//Focus,Color,Value etc handle with UseRef. 
//HTML input field value get and Direct Color Modification in HTML
//Focus Handling
// It mostly used in Functional Component
//We easily find the hooks it starts with USE key word
//All time state not usefull thats why we use UseRef.

const UseRef = () => {


    const inputRef=useRef("")

    const Ismail=()=>{
        console.log('hallow world')
        inputRef.current.value="100"
        inputRef.current.focus();
        inputRef.current.style.color="red"
       // inputRef.current.style.display="none"
    }
    
    return (
        <div>
            <h1>UseRef</h1>
             Name:<input type="text" ref={inputRef}></input><br/><br/>
             <button onClick={Ismail}>button</button>
        </div>
    )
}

export default UseRef