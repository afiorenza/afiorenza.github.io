import React, { Component } from 'react';

export default class Section extends Component {

  render() {
    const { Child, href } = this.props

    return (
      <div className='section' id={ href }>
        <Child />
      </div>
    )
  }
}
