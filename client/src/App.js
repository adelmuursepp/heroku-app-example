import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
    }

  }
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/countries")
    .then((response) => {
      return response.json()
    })
    .then((countries) => {
      this.setState({
        countries: countries
      })
    })
  }
  render() {
    const countryList = this.state.countries.map((country, i) => {
      return<li key={i}>{country.name}</li>
    })
    return(
      <div className="App">
        <h1>Countries list</h1>
        <ul>
          {countryList}
        </ul>

      </div>
    );
  }
}

export default App;
