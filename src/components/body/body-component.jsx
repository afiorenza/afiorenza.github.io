require('./_body.scss');

import Footer from 'components/footer';
import React from 'react';
import BasePanel from 'components/panels';
import TimeLine from 'components/time-line';
import facts from 'data/facts.json';
import {CertificationsList} from 'components/lists';

export let Body = () =>
  <div className="Body">
    <div className="Body--container">
      <BasePanel title="Introduction">
        <div className="Body--introduction-panel">
          Currently, studying a degree in Bachelor of Computer and Systems and working as a Frontend developer under agile methodologies (Scrum and kamban).
          <br />
          Open to new challenges and goals in the IT world, I like to start new projects, learn and implement new
          technologies and to develop quality products to the customer for this work, both working for a company and
          personally.
          <br />
          I also love languages as well as working with people from different fields and / or cultures.
        </div>
      </BasePanel>

      <BasePanel title="Work">
        <TimeLine facts={facts.work} />
      </BasePanel>

      <BasePanel className="Body--educationPanel" title="Education">
        <TimeLine facts={facts.education} />
      </BasePanel>

      <BasePanel title="Certifications">
        <CertificationsList />
      </BasePanel>

      <BasePanel title="Skills">
        this is the intro
      </BasePanel>
    </div>
    <Footer />
  </div>

export default Body;
