import AboutMe from '~components/about-me';
import Contact from '~components/contact';
import Header from '~components/header';
import React, { Component } from 'react';
import Section from '~components/section';
import Stack from '~components/stack';

const layers = [
  {
    Child: AboutMe,
    href: '#about-me',
    title: 'About me'
  },
  {
    Child: Stack,
    href: '#stack',
    title: 'Stack'
  },
  {
    Child: Contact,
    href: '#contact',
    title: 'Contact'
  }
];

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.parallaxRef = React.createRef();
  }

  renderLayer(layer, index) {
    const { Child, href } = layer;

    return (
      <Section
        Child={ Child }
        key={ `section-${index}` }
        href={ href }
      />
    );
  }

  renderLayers() {
    return layers.map(this.renderLayer);
  }

  render() {
    return (
      <div className='home'>
        <Header layers={ layers } />
        <div className='home__body'>
          { this.renderLayers() }
        </div>
      </div>
    );
  }
}
