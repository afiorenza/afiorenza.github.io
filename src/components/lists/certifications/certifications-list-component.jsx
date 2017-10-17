import React from 'react';
import facts from 'data/facts.json';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export let CertificationsListItem = ({certification, index}) =>
  <li className="list-group-item" key={index}>
    <h3 className="text-bold">{certification.title}</h3>
    <span className="text-bold">Institution: </span><span>{certification.institution}</span>
    <br />
    {certification.award && <span><span className="text-bold">Award: </span><span>{certification.award}</span><br /></span>}
    <span className="text-bold">Year: </span><span>{certification.year}</span>
  </li>

export let CertificationsList = () =>
  <ListGroup componentClass="ul">
    {facts.certifications.map((certification, index) => <CertificationsListItem {...{certification, index}} />)}
  </ListGroup>

export default CertificationsList;
