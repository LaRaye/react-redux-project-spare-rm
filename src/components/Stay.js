import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteStay } from '../actions/stays';

class Stay extends Component {
  handleDelete = () => {
    this.props.deleteStay(this.props.stay.id, this.props.history)
  }

  render() {
    if (!this.props.stay) {
      return <p>Loading...</p>
    }

    if(this.props.stay && !this.props.found) {
      return <p>Sorry, we cannot locate this Stay</p>;
    }

    return (
      <div>
        <h1>{this.props.stay.title}</h1>
        <button onClick={this.handleDelete}>Remove This Stay</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const id = parseInt(props.match.params.id);
  const stay = state.stays.filter(stay => stay.id === id)[0] || {};
  const found = Object.keys(stay).length > 1;

  return {
    stay: stay,
    found: found
  };
};

export default connect(
  mapStateToProps,
  { deleteStay }
)(Stay);
