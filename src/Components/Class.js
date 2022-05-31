import React, { Component } from 'react';

class Class_Com extends React.Component{



    render(){
        return <Class1/>
       // <h1>Hallow this is Class Component</h1>
    }

}


class Class1 extends Component{
    render(){
        return (<div>
            <h1>Hallow</h1> <Class2/>
        </div>)
    }
}


class Class2 extends Component{
    render(){
        return (<div>
            <h1>This is </h1><Class3/>
        </div>)
    }
}


class Class3 extends Component{
    render(){
        return (<div>
            <h1>Class Component</h1>
        </div>)
    }
}

 // Parent to child Accessing data

  //child
export default Class_Com