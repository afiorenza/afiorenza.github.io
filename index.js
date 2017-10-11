import React, {Component} from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppContainer>
        <div>probando react</div>
      </AppContainer>
    );
  }
}

render(<App />, document.getElementById('root'));
