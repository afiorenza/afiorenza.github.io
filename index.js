import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>this is a final test</div>
    );
  }
}

render(<App />, document.getElementById('root'));
