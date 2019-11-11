import React, { Component } from 'react';
import { fetchStays } from '../actions/stays';
import { connect } from 'react-redux';

class StaysList extends Component {

  componentDidMount() {
    this.props.fetchStays()
  }

  render() {
    console.log(this.props.stays)
    if (this.props.stays.length === 0) {
      return <p>Loading...</p>
    }

    return(
      <div>
        <h1>Stays</h1>
        {this.props.stays[0].title}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stays: state.stays
  }
}

export default connect(
  mapStateToProps,
  { fetchStays }
  )(StaysList);
