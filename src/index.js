require('./_app.scss');

import React from 'react';
import Body from 'components/body';
import {Image} from 'react-bootstrap';
import SocialBadges from 'components/social-badges';

export let App = () =>
  <div className="App">
    <div>
      <Image bsClass="App--profileImage" src="/assets/profile.png" circle/>
      <div className="App--contact">
        <h1 className="App--title text-bold">Agustín Fiorenza</h1>
        <div>
          <span className="App--email text-bold"><i className="fa fa-envelope-o" aria-hidden="true"></i> agustinfiorenza@gmail.com</span>
          <SocialBadges type="linkedin" link="https://www.linkedin.com/in/agustin-fiorenza-88869892/" className="App--social-media-icons"/>
          <SocialBadges type="github" link="https://github.com/afiorenza" className="App--social-media-icons"/>
        </div>
      </div>
    </div>
    <Body />
  </div>

export default App;
