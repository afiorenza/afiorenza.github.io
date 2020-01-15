import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

export default class Header extends Component {

  renderMenuItem = ({ href, title }, index) => {
    return (
      <Menu.Item key={ `menuitem-${index}`  }>
        <a href={ href }>
          { title }
        </a>
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
}
