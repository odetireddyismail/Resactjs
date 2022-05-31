import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
const Update_Method = () => {

    const [data, setData] = useState([])

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [userid, setUserid] = useState('')

    //sconsole.log(tr)
    useEffect(() => {
        Delete()
    }, [])

    //Close the UseEffect
    const Up = () => {
        fetch('http://localhost:3000/posts').then(
            (res) => {
                res.json().then((da) => {
                    setData(da)
                    setFname(da[null].fname)
                    setLname(da[null].lname)
                    setEmail(da[null].email)
                    setUserid(da[null].userid)
                })
            }
        )
    }

    //Close the Up()
    const Delete = (id) => {

        fetch(`http://localhost:3000/posts/${id}`, {

            method: 'DELETE'

        }).then((res) => {
            res.json().then((d) => {

                //console.log(d)
                Up()

            })
        })

    }

    //Close  the Delete 

    const Update = (id) => {
        const i = id - 1
        setFname(data[i].fname)
        setLname(data[i].lname)
        setEmail(data[i].email)
        setUserid(data[i].id)
    }

    //Close The Update

    const Sum = () => {

        const da = { fname, lname, email }

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(da)
        }).then((re) => {
            re.json().then((f) => {
                console.log(f)
                Delete()
            })
        })

    }
    return (
        <div>
            <h1><i>Get_Method</i></h1>
            <Table variant="dark">

                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Fname</th>
                        <th>Lname</th>
                        <th>Email</th>
                        <th>Pno</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>

                    {data.map((item, i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.pno}</td>
                            <td><button type="button" onClick={() => Delete(item.id)}>Delete</button></td>
                            <td><button type="button" onClick={() => Update(item.id)}>Update</button></td>
                        </tr>)}
                </tbody>

            </Table>
            <label>Fname</label>
            <input type='text' onChange={(e) => setFname(e.target.value)} value={fname} ></input><br /><br />
            <label>Lname</label>
            <input type='text' onChange={(e) => setLname(e.target.value)} value={lname}></input><br /><br />
            <label>Email</label>
            <input type='text' onChange={(e) => setEmail(e.target.value)} value={email}></input><br /><br />
            <input type='submit' onClick={Sum}></input>

        </div>
    )
}

export default Update_Method