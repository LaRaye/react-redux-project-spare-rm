import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStay } from '../actions/stays';
import StayForm from '../components/StayForm';

class EditStay extends Component {
  state = {
    host_first_name: "",
    host_last_name: "",
    host_email: "",
    host_phone: 0,
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
    this.props.editStay(this.state)
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
    editStay
  }
)(EditStay);
