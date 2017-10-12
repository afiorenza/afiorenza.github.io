require('./_social-badges.scss');

import React, {PropTypes} from 'react';
import classNames from 'classnames';

export let SocialBadges = ({className, type, link}) =>
  <a className={className} target="_blank" href={link}>
    <i className={`SocialBadges fa fa-${type}`} aria-hidden="true"></i>
  </a>

SocialBadges.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string
}

export default SocialBadges;
