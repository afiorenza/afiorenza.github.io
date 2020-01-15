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

export default class AboutMe extends Component {

  renderIcon({ href, icon}, index) {
    return (
      <a
        className="about-me__link"
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

  renderIcons() {
    return (
      <div className='about-me__icons'>
        { icons.map(this.renderIcon) }
      </div>
    );
  }

  render() {
    return (
      <div className='about-me'>
        <h1>Welcome, I'm Agustín Fiorenza</h1>
        <h2>Frontend developer</h2>
        { this.renderIcons() }
      </div>
    );
  }
}
