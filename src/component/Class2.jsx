import React, { Component } from 'react'


export default class class2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    };
    decrement=()=>{
        if (this.state.count>0) {
            this.setState({count:this.state.count-1});
        }
        
    };
  render() {
    return (
        <>
      <h2>
        counting:{this.state.count}
      </h2>
      <button  onClick={this.increment}>+</button>

      <button onClick={this.decrement}>-</button>
      </>
    )
  }
}
