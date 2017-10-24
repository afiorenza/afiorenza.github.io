require('./_header.scss');

import React from 'react';
import SocialBadges from 'components/social-badges';

export let Header = () =>
  <div className="Header">
    <a href="mailto:agustinfiorenza@gmail.com"><i className="Header--email fa fa-envelope-o" aria-hidden="true"></i></a>
    <SocialBadges type="linkedin" link="https://www.linkedin.com/in/agustin-fiorenza-88869892/" className="Header--social-media-icons"/>
    <SocialBadges type="github" link="https://github.com/afiorenza" className="Header--social-media-icons"/>
  </div>

export default Header;
