import React, { useState } from 'react'

const Post_method = () => {


    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')

    const [dis,setDis] = useState([])

     console.log(dis)
    const Change = () => {


        const data = { fname, lname, email }
        //console.log(data)
        fetch('http://localhost:3000/posts', {

            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            res.json().then((da) => {
              setDis(da)
            })
        })
    }
    return (
        <div>
            <h1><i>Post_method</i></h1>
            <label>Fname:</label>
            <input name='fname' value={fname} onChange={(e) => setFname(e.target.value)} type="text"></input><br /><br />
            <label>Fname:</label>
            <input name='lname' value={lname} onChange={(e) => setLname(e.target.value)} type="text"></input><br /><br />
            <label>Fname:</label>
            <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text"></input><br /><br />
            <input type="submit" onClick={Change}></input>


            <table>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Fname</td>
                        <td>Lname</td>
                        <td>Email</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Post_method