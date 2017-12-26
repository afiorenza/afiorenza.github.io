require('./_skills-grid.scss');

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export let SkillsGrid = () =>
  <Grid bsClass="SkillsGrid">
    <Row className="SkillsGrid--row">
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <div className="SkillsGrid--logo SkillsGrid--html5-logo"></div>
          <p className="SkillsGrid--logo-footer">HTML 5</p>
        </a>
      </Col>
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <div className="SkillsGrid--logo SkillsGrid--js-logo"></div>
          <p className="SkillsGrid--logo-footer">Javascript</p>
        </a>
      </Col>
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <div className="SkillsGrid--logo SkillsGrid--css3-logo"></div>
          <p className="SkillsGrid--logo-footer">CSS 3</p>
        </a>
      </Col>
    </Row>

    <Row className="SkillsGrid--row">
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://nodejs.org/en/">
          <div className="SkillsGrid--logo SkillsGrid--nodejs-logo"></div>
          <p className="SkillsGrid--logo-footer">Node JS</p>
        </a>
      </Col>
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://code.facebook.com/projects/176988925806765/react/">
          <div className="SkillsGrid--logo SkillsGrid--react-logo"></div>
          <p className="SkillsGrid--logo-footer">React</p>
        </a>
      </Col>
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="http://redux.js.org/docs/introduction/">
          <div className="SkillsGrid--logo SkillsGrid--redux-logo"></div>
          <p className="SkillsGrid--logo-footer">Redux</p>
        </a>
      </Col>
    </Row>

    <Row className="SkillsGrid--row">
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://webpack.github.io/">
          <div className="SkillsGrid--logo SkillsGrid--webpack-logo"></div>
          <p className="SkillsGrid--logo-footer">Webpack</p>
        </a>
      </Col>
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://www.npmjs.com/">
          <div className="SkillsGrid--logo SkillsGrid--npm-logo"></div>
          <p className="SkillsGrid--logo-footer">NPM</p>
        </a>
      </Col>
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://git-scm.com/">
          <div className="SkillsGrid--logo SkillsGrid--git-logo"></div>
          <p className="SkillsGrid--logo-footer">GIT</p>
        </a>
      </Col>
    </Row>

    <Row className="SkillsGrid--row">
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://www.magicsoftware.com/magic-xpa-application-platform">
          <div className="SkillsGrid--logo SkillsGrid--magicxpa-logo"></div>
          <p className="SkillsGrid--logo-footer">Magic XPA</p>
        </a>
      </Col>
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="https://www.ethereum.org/">
          <div className="SkillsGrid--logo SkillsGrid--ethereum-logo"></div>
          <p className="SkillsGrid--logo-footer">Ethereum</p>
        </a>
      </Col>
      <Col md={4} className="show-grid SkillsGrid--column">
        <a className="SkillsGrid--logo-link" target="_blank" href="http://solidity.readthedocs.io/en/develop/">
          <div className="SkillsGrid--logo SkillsGrid--solidity-logo"></div>
          <p className="SkillsGrid--logo-footer">Solidity</p>
        </a>
      </Col>
    </Row>
  </Grid>

export default SkillsGrid;
