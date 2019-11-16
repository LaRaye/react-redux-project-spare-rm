import React from 'react';
import {
  LargeCardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardText,
  CardButton
} from "./CardStyle";

const StayShowPage = (props) => {
  return (
    <LargeCardWrapper>
      <div>
        <CardHeader>
          <CardHeading>{props.title}</CardHeading>
        </CardHeader>

        <CardBody>
          <CardText>
            <p>{props.location}</p>
            <p><strong>${props.cost} / night</strong></p>
            <p>{props.stay_type}</p>
            <p>up to {props.number_of_guests} guests</p>
            <p>{props.bedrooms} bedrooms</p>
            <p>{props.baths} baths</p>
            <p>{props.about}</p>
            <p>{props.amenities}</p>
          </CardText>
        </CardBody>

        <CardButton onClick={props.handleDelete} >Remove This Stay</CardButton>
      </div>
    </LargeCardWrapper>
  )
}

export default StayShowPage;
