import React from 'react';
import { Link  } from 'react-router-dom';

const StayCard = (props) => {
  return (
    <div>
      <p>
        <Link key={props.id} to={`/stays/${props.id}`} >{props.title}</Link>
      </p>
    </div>
  )
}

export default StayCard;
