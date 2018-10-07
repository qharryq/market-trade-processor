import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    data: []
  };

  componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res }))
        .catch(err => console.log(err));
  }

  //Allows frontend to display real time data
  componentDidUpdate() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
}
  
  callBackendAPI = async () => {
    const response = await fetch('/tradeMessages');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body);
    return body;
  };



  render() {
    return (
      <div className="App">
        
        {this.state.data.map(d => <li key={d._id}>User ID: {d.userId}, Converted From: {d.currencyFrom}, Converted To: {d.currencyTo},  Amount Sold: {d.amountSell.$numberDecimal}, Amount Bought: {d.amountBuy.$numberDecimal},  Rate: {d.rate.$numberDecimal}, Timestamp: {d.timePlaced}, Originating Country: {d.originatingCountry}</li>)}

      </div>
    );
  }
}

export default App;
