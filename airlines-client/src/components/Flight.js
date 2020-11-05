import React, { Component,Fragment } from 'react';
import Clock from './Clock';
import '../stylesheets/flight.css';

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
        this.setState({showELement: true });
        console.log(event.target.value);
    }

    render (){
      return (
        <Fragment>
          <Clock />
            <div className="section">
              <div className="form">
                <div className="grid-col-3">
                  <h1 className="title col-1"> Flights </h1>
                  <button className="btn-primary col-3 h45">Create Flight</button>
                </div>
                <form onSubmit={ this._handleSubmit } className="grid-col-3">
                    <input type="search" placeholder="passenger" onChange={this._handlePassengerInput} className="form-control row-1 col-1"/>
                    <input type="search" placeholder=" from "
                           onChange={this._handleFromInput} required className="form-control row-1 col-2" />
                       <input type="search" placeholder=" to "
                           onChange={this._handleToInput} required className="form-control  row-1 col-3" />
                       <input type="search" placeholder="search Flight" onChange={this._handleSearchInput} className="form-control  row-2 col-1"/>
                       <input type="date" className="form-control  row-2 col-2" />
                       <input type="submit" className="btn-primary row-2 col-3"/>
                </form>
                    {/*  this is for showing flight status if needed  */}
                    { this.state.showELement?(<h3> {this.state.flight_number} form {this.state.from} to {this.state.to}</h3>):null }
                </div>
              </div>
            </Fragment>
        );
      }
    }

    export default Flight;
