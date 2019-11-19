import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStay } from '../actions/stays';
import StayForm from '../components/StayForm';

class EditStay extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stay !== this.props.stay) {

      this.setState({
        cost: this.props.stay.cost,
        title: this.props.stay.title,
        location: this.props.stay.location,
        stay_type: this.props.stay.stay_type,
        number_of_guests: this.props.stay.number_of_guests,
        bedrooms: this.props.stay.bedrooms,
        baths: this.props.stay.baths,
        amenities: this.props.stay.amenities,
        about: this.props.stay.about
      })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.editStay(this.state, this.props.stay.id, this.props.history)
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
  const stay = state.stays.filter(stay => stay.id === id)[0];

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
