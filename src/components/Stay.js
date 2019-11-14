import React from 'react'
import { connect } from 'react-redux';

const Stay = () => {
  return (
    <div>
      <h1>This Stay</h1>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const stay = state.stays.filter(stay => stay.id === id)[0];
  return {
    stay
  };
};

export default connect(mapStateToProps)(Stay);
