import React from 'react';
import { Link  } from 'react-router-dom';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardText
} from "./CardStyle";
import LikeButton from './LikeButton';

const StayCard = (props) => {
  return (

      <div className="stay-card">
        <CardWrapper>
          <CardHeader>
            <Link key={props.id} to={`/stays/${props.id}`} ><CardHeading>{props.title}</CardHeading></Link>
          </CardHeader>

          <CardBody>
            <CardText>
              <p>{props.location}</p>
              <p><strong>${props.cost} / night</strong></p>

              <LikeButton />

            </CardText>
          </CardBody>
        </CardWrapper>
      </div>
  )
}

export default StayCard;
