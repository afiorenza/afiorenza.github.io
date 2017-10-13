require('./_body.scss');

import Footer from 'components/footer';
import React from 'react';
import BasePanel from 'components/panels';
import TimeLine from 'components/time-line';

let educationFacts = [
  {
    from: '2010',
    to: '2010',
    fact: 'FCEIA ingenieria civil',
  },
  {
    from: '2011',
    to: '2016',
    fact: 'UCA- Licenciatura en sistemas y computacion',
  }
]

export let Body = () =>
  <div className="Body">
    <div className="Body--container">
      <BasePanel title="Introduction">
        this is the intro
      </BasePanel>

      <BasePanel className="Body--educationPanel" title="Education">
        <TimeLine facts={educationFacts} />
      </BasePanel>

      <BasePanel title="Work">
        this is the intro
      </BasePanel>

      <BasePanel title="Skills">
        this is the intro
      </BasePanel>
    </div>
    <Footer />
  </div>

export default Body;
