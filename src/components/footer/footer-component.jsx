require('./_footer.scss');

import React from 'react';
import SocialBadges from 'components/social-badges';

export let Footer = () =>
  <div className="Footer">
    <div className="Footer--social-media">
      <SocialBadges type="linkedin" link="https://www.linkedin.com/in/agustin-fiorenza-88869892/" className="Footer--social-media-icons"/>
      <SocialBadges type="github" link="https://github.com/afiorenza" className="Footer--social-media-icons"/>
      <SocialBadges type="twitter" link="https://twitter.com/agufiorenza" className="Footer--social-media-icons"/>
    </div>
  </div>

export default Footer;
