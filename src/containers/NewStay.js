import React { Component } from 'react';
import { connect } from 'react-redux';
import { createStay } from '../action/stays';
import StayForm from '../components/StayForm';

class NewStay extends Component {
  state = {
    host_first_name: "",
    host_last_name: "",
    host_email: "",
    host_phone: 0,
    cost: 0,
    title: "",
    location: "",
    type: "",
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

  render() {
    return (
      <div>
        <StayForm
          formData={this.state}
          handleChange={this.handleChange}
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
