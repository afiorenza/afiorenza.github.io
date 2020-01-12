import './styles/index.scss'
import { render } from 'react-dom';
import React, { Component } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.GA_CODE);

class App extends Component {

  render() {
    return (
      <div>
        In progressss
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
