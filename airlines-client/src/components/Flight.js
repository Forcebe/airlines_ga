import React, { Component,Fragment } from 'react'
import Clock from './Clock'

const SERVER_URL = 'http://localhost3000/flights.json';

class Flight extends Component {
    constructor(){
        super();
        this.state ={
            showELement: false,
            flight_number: '',
            passenger: 0,
            from: '',
            to: ''
        }
        this._handleSubmit = this._handleSubmit.bind(this)
        this._handleSearchInput = this._handleSearchInput.bind(this)
        this._handlePassengerInput = this._handlePassengerInput.bind(this)
        this._handleFromInput = this._handleFromInput.bind(this)
        this._handleToInput = this._handleToInput.bind(this)
    }

    _handleSearchInput(event){
        event.preventDefault();
        this.setState({flight_number: event.target.value})
    }

    _handlePassengerInput(event){
        event.preventDefault();
        this.setState({passenger: event.target.value})
    }

    _handleFromInput(event){
        event.preventDefault();
        this.setState({from: event.target.value})
    }

    _handleToInput(event){
        event.preventDefault();
        this.setState({to: event.target.value})
    }

    _handleSubmit( event ){
        event.preventDefault();
        this.setState({showELement: true})
        console.log(event.target.value);
    }

    render (){
        return (
            <Fragment>
                <Clock />
                <form onSubmit={ this._handleSubmit }>
                    <div>
                       <input type="search" placeholder="passenger"
                           onChange={this._handlePassengerInput}></input>

                       <input type="search" placeholder=" from "
                           onChange={this._handleFromInput} required>
                           </input>
                       <input type="search" placeholder=" to "
                           onChange={this._handleToInput} required></input>
                    </div>

                    <div>
                       <input type="search" placeholder="search Flight" onChange={this._handleSearchInput}></input>
                       <input type="date" ></input>
                       <input type="submit" ></input>
                    </div>
                </form>
                    {/*  this is for showing flight status if needed  */}
                    { this.state.showELement?(
                            <h3> {this.state.flight_number} form {this.state.from} to {this.state.to}
                            </h3>
                        ):null
                    }
            </Fragment>
        )
    }
}

export default Flight
