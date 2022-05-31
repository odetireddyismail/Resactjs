import React, { Component } from 'react';
import Search from './Search.css'
export default class Search_fun extends Component {


  constructor(){
    super()
    this.state={
        searchData:null,
        noData:false
    }
  }

  search(key){
    //console.warn(key);
    fetch('https://jsonplaceholder.typicode.com/todos?q='+key).then((da)=>{
      da.json().then((d)=>{

        if(d.length>0){
          this.setState({searchData:d})
        }
        else{
          this.setState({noData:true})
        }
      
      })
    })
  }
  render() {
    return (
    <div className='search'>
      <h1> Search box</h1>
      <input type="text" placeholder='Search' onChange={(e)=>this.search(e.target.value)}></input>
      <div>
        {
          this.state.searchData?
          <div>
            {this.state.searchData.map((item,i)=>
            <div className='key' key={i}>
                {item.title}
            </div>)
            }
          </div>
          :""
        }
        {
          this.state.noData?<h2>No Data Found</h2>:""
        }
      </div>
    </div>
    );
  }
}
