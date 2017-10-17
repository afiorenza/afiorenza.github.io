require('./_app.scss');

import React from 'react';
import Body from 'components/body';
import {Image} from 'react-bootstrap';

export let App = () =>
  <div className="App">
    <div>
      <Image bsClass="App--profileImage" src="/assets/profile.png" circle/>
      <div className="App--contact">
        <h1 className="App--title text-bold">Agustín Fiorenza</h1>
        <p className="text-bold"><i className="fa fa-envelope-o" aria-hidden="true"></i> agustinfiorenza@gmail.com</p>
      </div>
    </div>
    <Body />
  </div>

export default App;
