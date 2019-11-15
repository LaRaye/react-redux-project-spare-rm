import React from 'react';
import { Link  } from 'react-router-dom';

const StayShowPage = (props) => {
  return (
    <div>
      <h1>
        {props.title}
      </h1>
      <button onClick={props.handleDelete} >Remove This Stay</button>
    </div>
  )
}

export default StayShowPage;
