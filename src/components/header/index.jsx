import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { scroller } from 'react-scroll';

export default class Header extends Component {

  renderMenuItem = ({ name, title }) => {
    return (
      <Menu.Item
        key={ name }
        onClick={ this.handleMenuItemClick }
      >
        { title }
      </Menu.Item>
    );
  }

  renderMenuItems() {
    const { layers } = this.props;

    return layers.map(this.renderMenuItem);
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

  handleMenuItemClick = ({ key }) => {
    const options = {
      duration: 1000,
      offset: -64,
      smooth: true
    };

    scroller.scrollTo(key, options);
  }
}
