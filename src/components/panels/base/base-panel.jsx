import React, {PropTypes} from 'react';

export let BasePanel = ({title, children}) =>
  <div>
    <h2>{title}</h2>
    <p>{children}</p>
  </div>

BasePanel.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string
}

export default BasePanel;
