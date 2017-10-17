require('./_time-line.scss');

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

export let isLastFact = (index, facts) => index === facts.length -1;
export let isSameYear = (from, to) => moment(from).format('YYYY') === moment(to).format('YYYY');


export let Connector = () => <div className="TimeLine--connector"></div>

export let TimeLine = ({facts}) =>
  <div className="TimeLine">
    {
      facts.map(({from, to, fact, institution, description}, index) =>
        <div className="TimeLine--fact" key={index}>

          <div className="TimeLine--content">
            <h3 className="TimeLine--dates">
              {moment(from).format('YYYY')}
              {!isSameYear(from, to) && <span> - {moment(to).format('YYYY')}</span>}
            </h3>

            <p className="TimeLine--description">{fact}</p>
            <p className="TimeLine--description">{institution}</p>
            <p className="TimeLine--description">{description}</p>
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
