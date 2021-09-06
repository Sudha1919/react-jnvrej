import React from 'react';
import './style.css';

class Lifecycle extends React.Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = {
      a: 10
    };
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  UNSAFE_componentWillReceiveProps() {
    console.log('UNSAFE_componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUnMount() {
    console.log('componentDidUnMount');
  }
  render() {
    console.log('render');
    return (
      <div>
        <p>{this.state.a}</p>
        <button
          onClick={() => {
            this.setState({ a: 10 + 100 - 50 });
          }}
        >
          update A
        </button>
        <hr />
      </div>
    );
  }
}
export default Lifecycle;

/*
class -> life cycle methods & 
functional -> hooks

react life cycle -> mounting - updating & unmounting


updating -> state or props change

*/
