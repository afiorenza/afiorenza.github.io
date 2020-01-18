import { Icon } from '@iconify/react';
import fiverrIcon from '@iconify/icons-jam/fiverr';
import githubIcon from '@iconify/icons-fa-brands/github';
import linkedinIcon from '@iconify/icons-fa-brands/linkedin';
import telegramIcon from '@iconify/icons-fa-brands/telegram';
import React, { Component } from 'react';

const icons = [{
  href: 'http://github.com/afiorenza/',
  icon: githubIcon
}, {
  href: 'https://www.linkedin.com/in/agufiorenza/',
  icon: linkedinIcon
}, {
  href: 'https://www.fiverr.com/agustinfiorenza/',
  icon: fiverrIcon
}, {
  href: 'http://t.me/agustinfiorenza',
  icon: telegramIcon
}];

export default class SocialIcons extends Component {

  renderIcon({ href, icon}, index) {
    return (
      <a
        className='social-icons__link'
        href={ href }
        key={ `icon-${index}` }
        target='_blank'
      >
        <Icon
          icon={ icon }
        />
      </a>
    )
  }

  render() {
    return (
      <div className='social-icons'>
        { icons.map(this.renderIcon) }
      </div>
    );
  }
}
