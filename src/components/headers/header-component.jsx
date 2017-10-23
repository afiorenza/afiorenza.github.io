require('./_header.scss');

import React from 'react';
import SocialBadges from 'components/social-badges';

export let Header = () =>
  <div className="Header">
    <span className="Header--email text-bold"><i className="fa fa-envelope-o" aria-hidden="true"></i> agustinfiorenza@gmail.com</span>
    <span className="Header--social-media-wrapper">
      <SocialBadges type="linkedin" link="https://www.linkedin.com/in/agustin-fiorenza-88869892/" className="Header--social-media-icons"/>
      <SocialBadges type="github" link="https://github.com/afiorenza" className="Header--social-media-icons"/>
    </span>
  </div>

export default Header;
