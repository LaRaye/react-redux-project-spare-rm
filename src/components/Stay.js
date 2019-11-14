import React from 'react'
import { connect } from 'react-redux';

const Stay = (props) => {
  if (!props.stay) {
    return <p>Loading...</p>
  }

// what if stay does not exist?

  return (
    <div>
      <h1>{props.stay.title}</h1>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const id = parseInt(props.match.params.id);
  const stay = state.stays.filter(stay => stay.id === id)[0];
  return {
    stay: stay
  };
};

export default connect(mapStateToProps)(Stay);
