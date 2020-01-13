import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';

export default class Header extends Component {

  static propTypes = {
    parallaxRef: PropTypes.shape({
      current: PropTypes.elementType
    })
  }

  renderMenuItem = ({ title }, index) => {
    const { parallaxRef } = this.props;

    return (
      <Menu.Item
        key={ index }
        onClick={ () => parallaxRef.current.scrollTo(index) }
      >
        { title }
      </Menu.Item>
    );
  }

  renderMenuItems() {
    const items = [
      {
        title: 'About me'
      },
      {
        title: 'Stack'
      },
      {
        title: 'Contact'
      }
    ];

    return items.map(this.renderMenuItem);
  }

  renderMenu() {
    return (
      <Menu
        className='header__menu'
        defaultSelectedKeys={ ['0'] }
        mode='horizontal'
        theme='dark'
      >
        { this.renderMenuItems() }
      </Menu>
    )
  }

  render() {
    return (
      <div className='header'>
        <Layout.Header>
          { this.renderMenu() }
        </Layout.Header>
      </div>
    )
  }
}
