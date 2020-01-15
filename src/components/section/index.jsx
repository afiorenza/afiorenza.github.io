import { Element } from 'react-scroll';
import React, { Component } from 'react';

export default class Section extends Component {

  render() {
    const { Child, name } = this.props

    return (
      <Element name={ name }>
        <div className='section'>
            <Child />
        </div>
      </Element>
    )
  }
}
