import React, { Component } from 'react';
import { fetchStays } from '../actions/stays';
import { connect } from 'react-redux';

class StaysList extends Component {

  componentDidMount() {
    this.props.fetchStays()
  }

  render() {
    return(
      <div>
        <h1>Stays</h1>
      </div>
    )
  }
}

export default connect(
  null,
  { fetchStays }
  )(StaysList);
