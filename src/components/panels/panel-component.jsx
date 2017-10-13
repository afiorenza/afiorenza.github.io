require('./_panel.scss');

import React, {PropTypes} from 'react';

export let BasePanel = ({className, title, children}) =>
  <div className={className}>
    <h2>{title}</h2>
    <div className="BasePanel--children">{children}</div>
  </div>

BasePanel.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string
}

export default BasePanel;
