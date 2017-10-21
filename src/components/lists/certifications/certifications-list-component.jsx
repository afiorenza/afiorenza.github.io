import React, {PropTypes} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export let CertificationsListItem = ({certification, index, language}) =>
  <li className="list-group-item" key={index}>
    <h3 className="text-bold">{certification.title}</h3>
    <span className="text-bold">{`${language.institution}`}: </span><span>{certification.institution}</span>
    <br />
    {certification.award && <span><span className="text-bold">{`${language.award}`}: </span><span>{certification.award}</span><br /></span>}
    <span className="text-bold">{`${language.year}`}: </span><span>{certification.year}</span>
  </li>

export let CertificationsList = ({language}) =>
  <ListGroup componentClass="ul">
    {language.certifications.map((certification, index) => <CertificationsListItem {...{certification, index, language}} />)}
  </ListGroup>

CertificationsList.propTypes = {
  language: PropTypes.object
}

export default CertificationsList;
