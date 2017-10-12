require('./_app.scss');

import React from 'react';
import Body from 'components/body';
import {Image} from 'react-bootstrap';

export let App = () =>
  <div className="App">
    <div className="App--header">
      <Image bsClass="App--profileImage" src="/assets/profile.png" circle/>
      <h1 className="App--title">Agustín Fiorenza</h1>
    </div>
    <Body />
  </div>

export default App;
