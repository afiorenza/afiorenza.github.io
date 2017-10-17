require('./_panel.scss');

import React from 'react';
import PropTypes from 'prop-types';

export let BasePanel = ({className, title, children}) =>
  <div className={className}>
    <h2>{title}</h2>
    <div className="BasePanel--children">{children}</div>
  </div>

BasePanel.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string
}

export default BasePanel;
