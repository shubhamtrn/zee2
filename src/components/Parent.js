import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
constructor(){
    super();
    // this.helloParent=this.helParent.bind();
}
helParent(data){
    alert("HelloParent is called..."+data)
}

newfunc(){
    console.log("My newfunc is active..");
}

  render() {
    return (
      <div>
        <Child helloParent={this.helParent} newf={this.newfunc}  ></Child>
        
      </div>
    )
  }
}

export default Parent
