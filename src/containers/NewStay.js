import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStay } from '../actions/stays';
import StayForm from '../components/StayForm';

class NewStay extends Component {
  state = {
    cost: 0,
    title: "",
    location: "",
    stay_type: "",
    number_of_guests: 0,
    bedrooms: 0,
    baths: 0,
    amenities: "",
    about: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createStay(this.state, this.props.history)
  }

  render() {
    return (
      <div>
        <StayForm
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default connect(
  null,
  {
    createStay
  }
)(NewStay);

// eventually will need to prefill host info from state so will need mapStateToProps instead of null
// use sessions/current user to link to host instance
