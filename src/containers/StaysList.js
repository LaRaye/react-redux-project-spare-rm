import React, { Component } from 'react';
import { connect } from 'react-redux';
import StayCard from '../components/StayCard';

class StaysList extends Component {

  render() {
    console.log(this.props.stays)
    if (this.props.stays.length === 0) {
      return <p>Loading...</p>
    }

    return(
      <div>
        <h1>Stays</h1>
        <div>
          {this.props.stays.map(stay =>
            <StayCard
              key={stay.id}
              id={stay.id}
              title={stay.title}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stays: state.stays
  }
}

export default connect(mapStateToProps)(StaysList);
