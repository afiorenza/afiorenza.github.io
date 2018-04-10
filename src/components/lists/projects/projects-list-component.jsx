import React, {PropTypes} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export let ProjectsListItem = ({project, index, language}) =>
  <li className="list-group-item" key={index}>
    <h3 className="text-bold">{project.title}</h3>
    <a href={project.url} target="_blank">{project.url}</a>
    <p>{project.description}</p>
  </li>

export let ProjectsList = ({language}) =>
  <ListGroup componentClass="ul">
    {language.projects.map((project, index) => <ProjectsListItem {...{project, index, language}} />)}
  </ListGroup>

ProjectsList.propTypes = {
  language: PropTypes.object
}

export default ProjectsList;
