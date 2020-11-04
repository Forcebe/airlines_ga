import React, {Component} from 'react'

class Clock extends Component{
    constructor(){
        super();
        this.state ={
            time: (new Date()).toString()
        }
        setInterval(() => {
            this.setState({ time: (new Date()).toString()})
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
