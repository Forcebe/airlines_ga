import React, {Component} from 'react'

class Clock extends Component{
    constructor(){
        super();
        this.state ={
            time: (new Date()).toString().slice(0,25)
        }
        setInterval(() => {
            this.setState({ time: (new Date()).toString().slice(0,25)})
        },1000)
    }

    render(){
        return(
            <div>
                <p>Today time: {this.state.time}</p>
            </div>
        )
    }
}

export default Clock
