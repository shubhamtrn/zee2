import React, { Component } from 'react'

// use shortcut rce

export class First extends Component {
    constructor(props){
        super(props)
        this.state={
            myMessage:"Shubham Kumar",
            count:0,
            newcount:1

        }
        this.onChangeState= this.onChangeState.bind(this)
        }
        onChangeState(){
            
            // alert("Button is clicked")
            this.setState({
                count:this.state.count+=1,
                myMessage:this.state.myMessage+" you clicked "+this.state.count+ "times" })
            
        }
        incrementfive(){
            for(let i=0;i<=5;i++){
                this.setState({newcount:i*5})
            }
        }
    
  render() {
    return (
      <div>
        <h1>My name is {this.state.myMessage}</h1>
        <button onClick={this.onChangeState}>change state</button>
        <h3 onClick={()=>this.incrementfive()}>Here, the value of count is {this.state.newcount} </h3>
      </div>
    )
  }
}

export default First
