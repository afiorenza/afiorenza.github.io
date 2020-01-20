import { animateScroll as scroll } from 'react-scroll';
import chevronUpIcon from '@iconify/icons-jam/chevron-up';
import { Icon } from '@iconify/react';
import React, { Component } from 'react';

export default class GoToTop extends Component {

  render() {
    return (
      <a
        className='go-to-top'
        onClick={scroll.scrollToTop}
      >
        <Icon icon={chevronUpIcon} />
      </a>
    )
  }
}
