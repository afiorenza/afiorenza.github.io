import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import AboutMe from '~components/about-me';
import Contact from '~components/contact';
import Header from '~components/header';
import React, { Component } from 'react';
import Stack from '~components/stack';

const layers = [
  AboutMe,
  Stack,
  Contact
];

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.parallaxRef = React.createRef();
  }

  renderLayer(Child, index) {
    return (
      <ParallaxLayer
        offset={ index }
        speed={ 0.5 }
      >
        <Child />
      </ParallaxLayer>
    );
  }

  renderLayers() {
    return layers.map(this.renderLayer);
  }

  render() {
    return (
      <div className='home'>
        <Header
          parallaxRef={ this.parallaxRef }
        />
        <Parallax
          className='home__body'
          pages={ layers.length }
          ref={ this.parallaxRef }
        >
          { this.renderLayers() }
        </Parallax>
      </div>
    );
  }
}
