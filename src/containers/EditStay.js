import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStay } from '../actions/stays';
import StayForm from '../components/StayForm';

class EditStay extends Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
        host_first_name: props.stay.host_first_name,
        host_last_name: props.stay.host_last_name,
        host_email: props.stay.host_email,
        host_phone: props.stay.host_phone,
        cost: props.stay.cost,
        title: props.stay.title,
        location: props.stay.location,
        stay_type: props.stay.stay_type,
        number_of_guests: props.stay.number_of_guests,
        bedrooms: props.stay.bedrooms,
        baths: props.stay.baths,
        amenities: props.stay.amenities,
        about: props.stay.about
    }
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
        <h1>Edit Stay</h1>
        <StayForm
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const id = parseInt(props.match.params.id);
  const stay = state.stays.filter(stay => stay.id === id)[0] || {};

  return {
    stay: stay
  };
};

export default connect(
  mapStateToProps,
  {
    editStay
  }
)(EditStay);
