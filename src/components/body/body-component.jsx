require('./_body.scss');

import Footer from 'components/footer';
import React from 'react';
import {IntroductionPanel} from 'components/panels';

export let Body = () =>
  <div className="Body">
    <div className="Body--container">
      <IntroductionPanel />
    </div>
    <Footer />
  </div>

export default Body;
