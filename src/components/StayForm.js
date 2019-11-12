import React from 'react';

class StayForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Host First Name:</label>
          <input type="text" name="host_first_name" value={this.props.formData.host_first_name} />

          <label>Host Last Name:</label>
          <input type="text" name="host_last_name" value={this.props.formData.host_last_name} />

          <label>Host Email:</label>
          <input type="text" name="host_email" value={this.props.formData.host_email} />

          <label>Host Phone:</label>
          <input type="text" name="host_phone" value={this.props.formData.host_phone} />

          <label>Title:</label>
          <input type="text" name="title" value={this.props.formData.title} />

          <label>Cost per Night (in dollars):</label>
          <input type="number" name="cost" value={this.props.formData.cost} />

          <label>Location:</label>
          <input type="text" name="location" value={this.props.formData.location} />

          <label>Type:</label>
          <input type="text" name="type" value={this.props.formData.type} />

          <label>Number of Guests Permitted:</label>
          <input type="text" name="number_of_guests" value={this.props.formData.number_of_guests} />

          <label>Bedrooms:</label>
          <input type="text" name="bedrooms" value={this.props.formData.bedrooms} />

          <label>Baths:</label>
          <input type="text" name="baths" value={this.props.formData.baths} />

          <label>About:</label>
          <input type="text" name="about" value={this.props.formData.about} />

          <label>Amenities:</label>
          <input type="text" name="amenities" value={this.props.formData.amenities} />

        </form>
      </div>
    )
  }
}

export default StayForm;
