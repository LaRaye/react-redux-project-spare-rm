import React, { Component } from 'react';
import { fetchStays } from '../actions/stays';
import { connect } from 'react-redux';

class StaysList extends Component {

  render() {
    console.log(this.props.stays)
    if (this.props.stays.length === 0) {
      return <p>Loading...</p>
    }

    return(
      <div>
        <h1>Stays</h1>
        {this.props.stays.map(stay => <p>{stay.title}</p>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stays: state.stays
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch({type: 'DELETE_STAY', payload: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StaysList);
