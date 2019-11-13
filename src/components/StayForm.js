import React from 'react';

class StayForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>Host First Name:</label>
          <input type="text" name="host_first_name" value={this.props.formData.host_first_name} onChange={event => this.props.handleChange(event)}/>

          <label>Host Last Name:</label>
          <input type="text" name="host_last_name" value={this.props.formData.host_last_name} onChange={event => this.props.handleChange(event)}/>

          <label>Host Email:</label>
          <input type="text" name="host_email" value={this.props.formData.host_email} onChange={event => this.props.handleChange(event)}/>

          <label>Host Phone:</label>
          <input type="text" name="host_phone" value={this.props.formData.host_phone} onChange={event => this.props.handleChange(event)}/>

          <label>Title:</label>
          <input type="text" name="title" value={this.props.formData.title} onChange={event => this.props.handleChange(event)}/>

          <label>Cost per Night (in dollars):</label>
          <input type="number" name="cost" value={this.props.formData.cost} onChange={event => this.props.handleChange(event)}/>

          <label>Location:</label>
          <input type="text" name="location" value={this.props.formData.location} onChange={event => this.props.handleChange(event)}/>

          <label>Type of Stay:</label>
          <input type="text" name="type" value={this.props.formData.stay_type} onChange={event => this.props.handleChange(event)}/>

          <label>Number of Guests Permitted:</label>
          <input type="text" name="number_of_guests" value={this.props.formData.number_of_guests} onChange={event => this.props.handleChange(event)}/>

          <label>Bedrooms:</label>
          <input type="text" name="bedrooms" value={this.props.formData.bedrooms} onChange={event => this.props.handleChange(event)}/>

          <label>Baths:</label>
          <input type="text" name="baths" value={this.props.formData.baths} onChange={event => this.props.handleChange(event)}/>

          <label>About:</label>
          <input type="text" name="about" value={this.props.formData.about} onChange={event => this.props.handleChange(event)}/>

          <label>Amenities:</label>
          <input type="text" name="amenities" value={this.props.formData.amenities} onChange={event => this.props.handleChange(event)}/>

          <button type="submit">List a New Stay</button>
        </form>
      </div>
    )
  }
}

export default StayForm;
