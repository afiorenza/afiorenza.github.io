require('./_body.scss');

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BasePanel from 'components/panels';
import TimeLine from 'components/time-line';
import {CertificationsList} from 'components/lists';
import {SkillsGrid} from 'components/grids';

export default class Body extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    let {
      certifications,
      education,
      facts,
      introduction,
      panels,
      work
    } = this.props.language;

    return (
      <div className="Body">
        <div className="Body--container">
          <BasePanel title={panels.introduction}>
            <div className="Body--introduction-panel" dangerouslySetInnerHTML={{__html: introduction}}></div>
          </BasePanel>

          <BasePanel title={panels.work}>
            <TimeLine facts={work} language={this.props.language} />
          </BasePanel>

          <BasePanel className="Body--educationPanel" title={panels.education}>
            <TimeLine facts={education} language={this.props.language} />
          </BasePanel>

          <BasePanel title={panels.certifications}>
            <CertificationsList language={this.props.language} />
          </BasePanel>

          <BasePanel title={panels.skills}>
            <div className="Body--skills-panel">
              <SkillsGrid />
            </div>
          </BasePanel>
        </div>
      </div>
    );
  }
}

Body.propTypes = {
  language: PropTypes.object
}
