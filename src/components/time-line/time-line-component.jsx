require('./_time-line.scss');

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

export let isSameYear = (from, to) => moment(from).format('YYYY') === moment(to).format('YYYY');

export let TimeLine = ({facts, language}) =>
  <div className="TimeLine">
    {
      facts.map(({from, to, fact, institution, description}, index) =>
        <div className="TimeLine--fact" key={index}>

          <div className="TimeLine--content">
            <h3 className="TimeLine--dates">
              {moment(from).format('YYYY')}
              {isSameYear(from, to) ? <span> - {language.present}</span> : <span> - {moment(to).format('YYYY')}</span>}
            </h3>

            {fact && <span className="TimeLine--description">{fact}</span>}
            {institution && <span className="TimeLine--description" dangerouslySetInnerHTML={{__html: ` ${language.at} ${institution}`}}></span>}
            {description && <p className="TimeLine--description" dangerouslySetInnerHTML={{__html: description}}></p>}
          </div>
        </div>
      )
    }
  </div>

TimeLine.propTypes = {
  language: PropTypes.object,
  facts: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
      fact: PropTypes.string
    })
  )
};

export default TimeLine;
