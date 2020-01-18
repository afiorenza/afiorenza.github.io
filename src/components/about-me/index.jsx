import { Avatar } from 'antd';
import React, { Component } from 'react';

export default class AboutMe extends Component {

  renderAvatar() {
    return (
      <Avatar
        shape='circle'
        size={ 180 }
        src='/assets/profile.jpeg'
      />
    );
  }

  renderTitle() {
    return (
      <div className='about-me__title'>
        <h1>Welcome, I'm Agustín Fiorenza</h1>
        <h2>Frontend developer</h2>
      </div>
    );
  }

  render() {
    return (
      <div className='about-me'>
        { this.renderAvatar() }
        { this.renderTitle() }
      </div>
    );
  }
}
