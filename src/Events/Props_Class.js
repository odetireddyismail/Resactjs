import React from "react";

class Props_Class extends React.Component{

   
    constructor(e){
         super(e)
         this.state={
                N1:e.name,
                N2:e.address[0],
                N3:e.address.h1,
                N4:"Hallow SetState"
         }
         console.log(e);
        }

     

     render(){
         return(
             <div>
                {this.state.N1}
                {this.state.N2}
                {this.props.name}

                <ul>
                    <li><h1>{this.state.N4}</h1></li>
                </ul>
              
              <div>
                  <button onClick={()=>this.setState({N4:" Change"})}>button</button>
              </div>
             </div>
         )
     }
    

}
export default Props_Class;