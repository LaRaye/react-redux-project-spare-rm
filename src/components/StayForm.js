import React from 'react';
import {
  LargeCardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardText,
  CardButton
} from "./CardStyle";

class StayForm extends React.Component {
  render() {
    return (
      <LargeCardWrapper>
        <CardHeader>
          <CardHeading>List A Stay Below</CardHeading>
        </CardHeader>
        <CardBody>
          <div>
            <form onSubmit={this.props.handleSubmit}>

              <CardFieldset>
                <CardText>Title of Stay:</CardText>
                <CardInput type="text" name="title" value={this.props.formData.title} onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardText>Cost(in dollars) Per Night:</CardText>
                <CardInput type="number" name="cost" value={this.props.formData.cost} onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardText>Location:</CardText>
                <CardInput type="text" name="location" value={this.props.formData.location} onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardText>Type of Stay (i.e. entire home, single room, etc.):</CardText>
                <CardInput type="text" name="stay_type" value={this.props.formData.stay_type} onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardText>Number of Guests Permitted:</CardText>
                <CardInput type="number" name="number_of_guests" value={this.props.formData.number_of_guests} onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardText>Number of Bedrooms:</CardText>
                <CardInput type="number" name="bedrooms" value={this.props.formData.bedrooms} onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardText>Number of Baths:</CardText>
                <CardInput type="number" name="baths" value={this.props.formData.baths} onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardText>About:</CardText>
                <CardInput type="text" name="about" value={this.props.formData.about} onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardText>Amenities:</CardText>
                <CardInput type="text" name="amenities" value={this.props.formData.amenities} onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardButton type="submit">List Stay</CardButton>
              </CardFieldset>
            </form>
          </div>
        </CardBody>
      </LargeCardWrapper>
    )
  }
}

export default StayForm;
