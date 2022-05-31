import React,{forwardRef} from 'react'

const User1 = (p,re) => {
  console.log(re)
  return (
    <div>
        <h1>User</h1>
        Name:<input type="text" ref={re}></input>
        <h2>{re.current}</h2>
    </div>
  )
}

export default forwardRef(User1)