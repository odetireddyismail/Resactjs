import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
const Delete_Method = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        Delete()
    }, [])

                //Close the UseEffect
    const Up = () => {
        fetch('http://localhost:3000/posts').then(
            (res) => {
                res.json().then((da) => {
                    setData(da)
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

                console.log(d)
                Up()
            })
        })

    }

       //Close  the Delete 
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
                    </tr>

                    {data.map((item, i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.pno}</td>
                            <td><button type="button" onClick={() => Delete(item.id)}>Delete</button></td>
                        </tr>)}
                </tbody>

            </Table>

        </div>
    )
}

export default Delete_Method