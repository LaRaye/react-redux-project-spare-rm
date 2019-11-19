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

  componentDidMount() {
    if (this.props.stay) {
      this.setState(this.stayFormData(this.props.stay))
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stay !== this.props.stay) {
      this.setState(this.stayFormData(this.props.stay))
    }
  }

  stayFormData = stay => {
    return ({
      cost: stay.cost,
      title: stay.title,
      location: stay.location,
      stay_type: stay.stay_type,
      number_of_guests: stay.number_of_guests,
      bedrooms: stay.bedrooms,
      baths: stay.baths,
      amenities: stay.amenities,
      about: stay.about
    })
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
