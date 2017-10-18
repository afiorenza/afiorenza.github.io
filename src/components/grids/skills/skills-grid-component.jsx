require('./_skills-grid.scss');

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export let SkillsGrid = () =>
  <Grid bsClass="SkillsGrid">
    <Row className="SkillsGrid--row">
      <Col md={4} className="show-grid SkillsGrid--column SkillsGrid--html5-logo"></Col>
      <Col md={4} className="show-grid SkillsGrid--column SkillsGrid--js-logo"></Col>
      <Col md={4} className="show-grid SkillsGrid--column SkillsGrid--css3-logo"></Col>
    </Row>

    <Row className="SkillsGrid--row">
      <Col md={4} className="show-grid SkillsGrid--column SkillsGrid--nodejs-logo"></Col>
      <Col md={4} className="show-grid SkillsGrid--column SkillsGrid--react-logo"></Col>
      <Col md={4} className="show-grid SkillsGrid--column SkillsGrid--redux-logo"></Col>
    </Row>

    <Row className="SkillsGrid--row">
      <Col md={4} className="show-grid SkillsGrid--column SkillsGrid--webpack-logo"></Col>
      <Col md={4} className="show-grid SkillsGrid--column SkillsGrid--npm-logo"></Col>
      <Col md={4} className="show-grid SkillsGrid--column SkillsGrid--magicxpa-logo"></Col>
    </Row>
  </Grid>

export default SkillsGrid;
