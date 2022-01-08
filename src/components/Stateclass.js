import React, { Component } from 'react'

export default class Stateclass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"sireesha",
             count:0
        }
    }
    render() {
        setTimeout(()=>{
            this.setState({
                name:"sireesha gunapati",
            })
        },2000)
        return (
            <div>
               <h1>Name:{this.state.name}</h1> 
               <h1>count:{this.state.count}</h1>
            </div>
        )
    }
}
