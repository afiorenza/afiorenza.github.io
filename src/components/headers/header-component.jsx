require('./_header.scss');

import React from 'react';
import SocialBadges from 'components/social-badges';

export let Header = () =>
  <div className="Header">
    <SocialBadges type="envelope-o" link="mailto:agustinfiorenza@gmail.com" className="Header--social-media-icons" />
    <SocialBadges type="linkedin" link="https://www.linkedin.com/in/agustin-fiorenza-88869892/" className="Header--social-media-icons" blank />
    <SocialBadges type="github" link="https://github.com/afiorenza" className="Header--social-media-icons" blank/>
  </div>

export default Header;
