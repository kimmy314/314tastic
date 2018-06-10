import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const ProjectPanel = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProjectPanel;
