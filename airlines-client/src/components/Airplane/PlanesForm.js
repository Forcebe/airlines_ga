import React, { Component } from 'react';

class PlanesForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      rows: '',
      columns: ''
    };
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeRows = this._handleChangeRows.bind(this);
    this._handleChangeColumns = this._handleChangeColumns.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChangeName(event) {
    this.setState({name: event.target.value})
  }
  _handleChangeRows(event) {
    this.setState({rows: event.target.value})
  }
  _handleChangeColumns(event) {
    this.setState({columns: event.target.value})
  }
  _handleSubmit(event){
    event.preventDefault();
    this.setState({
      name: event.target.value,
      rows: event.target.value,
      columns: event.target.value
    });
  }

render() {
  return (
      <div className="section">
        <div className="form">
          <div className="grid-col-3">
              <h1 className="title col-1"> Aeroplanes </h1>
              <button className="btn-primary col-3 h45">Create Plane</button>
          </div>
          <div>
            <form onSubmit={ this._handleSubmit } className="grid-col-3">
                <input onChange={ this._handleChangeName } type="text" placeholder="name" className="form-control row-1 col-1"/>
                <input onChange={ this._handleChangeRows } type="number" placeholder="rows" className="form-control row-1 col-2"/>
                <input onChange={ this._handleChangeColumns } type="number" placeholder="columns" className="form-control  row-1 col-3"/>
                <input type="submit" value="Cancel" className="btn-primary row-2 col-2"/>
                <input type="submit" value="Save" className="btn-primary row-2 col-3"/>
            </form>
          </div>
        </div>
     </div>
    );
  }
}

export default PlanesForm
