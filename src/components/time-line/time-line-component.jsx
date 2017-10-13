require('./_time-line.scss');

import React, {PropTypes} from 'react';
import classNames from 'classnames';
import moment from 'moment';

export let isLastFact = (index, facts) => index === facts.length -1;
export let isSameYear = (from, to) => moment(from).format('YYYY') === moment(to).format('YYYY');


export let Connector = () => <div className="TimeLine--connector"></div>

export let TimeLine = ({facts}) =>
  <div className="TimeLine">
    {
      facts.map(({from, to, fact}, index) =>
        <div className="TimeLine--fact" key={index}>

          <div className="TimeLine--content">
            <div className="TimeLine--dates">
              {moment(from).format('YYYY')}
              {!isSameYear(from, to) && <span> - {moment(to).format('YYYY')}</span>}
            </div>

            <p className="TimeLine--description">{fact}</p>
          </div>
        </div>
      )
    }
  </div>

TimeLine.propTypes = {
  facts: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
      fact: PropTypes.string
    })
  )
};

export default TimeLine;
