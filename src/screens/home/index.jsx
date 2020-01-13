import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <Parallax pages={3} ref={ref => (this.parallax = ref)}>
        <ParallaxLayer offset={0} speed={0.5}>
          <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <span onClick={() => this.parallax.scrollTo(2)}>Layers can contain anything 2</span>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <span onClick={() => this.parallax.scrollTo(0)}>Layers can contain anything 3</span>
        </ParallaxLayer>
      </Parallax>
    )
  }
}
