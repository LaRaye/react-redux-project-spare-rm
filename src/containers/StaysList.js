import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';

class StaysList extends Component {

  render() {
    console.log(this.props.stays)
    if (this.props.stays.length === 0) {
      return <p>Loading...</p>
    }

    return(
      <div>
        <h1>Stays</h1>
        {this.props.stays.map(stay =>
          <p>
            <Link key={stay.id} to={`/stays/${stay.id}`} >{stay.title}</Link>
          </p>)}
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
