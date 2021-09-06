import React, { Component } from 'react';
import './style.css';
import Lifecycle from './Lifecycle';

class App extends Component {
  constructor() {
    super();
    this.state = {
      anything: 'sslabs'
    };
  }
  render() {
    return (
      <>
        <Lifecycle />
        <button
          onClick={() => {
            this.setState({ anything: 'Sandeep' });
          }}
        >
          Click to Receive props from parent
        </button>
        <p>{this.state.anything}</p>
      </>
    );
  }
}
export default App;
