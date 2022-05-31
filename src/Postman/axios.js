import React,{ useState } from 'react'
import axios from 'axios'
const Axios = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInput = (e) => {
    let attr = e.target.name
    if(attr=='email')
    {
      setEmail(e.target.value)
    }
    if(attr=='password')
    {
      setPassword(e.target.value)
    }
  }

    const handleSubmit = (e)=>{
      e.preventDefault()

      const formData = {
        email:email,
        password:password
      }
      //console.log(formData)
      axios.post('http://localhost:3000/posts',formData)
      .then((response)=>{
        console.log(response)
        console.log('s',response.data)
      })
    }
    

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='email' value={email} onChange={handleInput} /><br/>
      <input type='password' name='password' value={password} onChange={handleInput} />
      <input type='submit' value='login'/>
    </form>
  )
}
export default Axios