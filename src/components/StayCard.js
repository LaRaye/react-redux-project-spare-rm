import React from 'react';
import { Link  } from 'react-router-dom';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardText,
  CardButton,
  CardLink
} from "./CardStyle";

const StayCard = (props) => {
  return (
    <Link key={props.id} to={`/stays/${props.id}`} >
      <div className="stay-card">
        <CardWrapper>
          <CardHeader>
            <CardHeading>{props.title}</CardHeading>
          </CardHeader>

          <CardBody>
            <CardText>
              <p>{props.location}</p>
              <p><strong>${props.cost} / night</strong></p>
            </CardText>
          </CardBody>
        </CardWrapper>
      </div>
    </Link>
  )
}

export default StayCard;
