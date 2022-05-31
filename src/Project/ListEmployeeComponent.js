import React, { Component } from 'react';
import Employ from './EmployeeSevices';

class ListEmployeeComponent extends Component {

  constructor(props){
    super(props)
    this.state={
        employees:[]
    };

  }

  componentDidMount(){
    Employ.getEmployee().then((res)=>{
       this.setState({employees:res.data});
    })
  }
  render() {
    return (
        <div>
          <h2 className='text-center '>employees List</h2>
          <div className='row'>
              <table className='table table-striped table-bordered'>
                <thead>
                  <tr>
                  <th>Employ id</th>
                    <th>Employ fName</th>
                    <th>Employ lName</th>
                    <th>Employ Email</th>
                    <th>Employ Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.map((employee)=>
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.fname}</td>
                    <td>{employee.lname}</td>
                    <td>{employee.email}</td>
                    <td>{employee.pno}</td>
                    

                  </tr>)}
                </tbody>
              </table>
          </div>
       </div>
    );
  }
}
export default ListEmployeeComponent