import React, { Component } from 'react';
import { connect } from 'react-redux';
import StayCard from '../components/StayCard';
import SearchBar from '../components/SearchBar';
import { findStays } from '../actions/stays';
import { Grid } from "../components/CardStyle";

class StaysList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stays: [],
      searchInput: "",
      filteredStays: []
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      searchInput: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.findStays(this.state.searchInput)
  }


  render() {
    console.log(this.props.stays)
    if (this.props.stays.length === 0) {
      return <p>Loading...</p>
    }

    return(
      <div>
        <h1>Stays</h1>

        <SearchBar
          searchInput={this.state.searchInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <div>
          <Grid>
          {this.props.stays.map(stay =>
            <StayCard
              key={stay.id}
              id={stay.id}
              title={stay.title}
              cost={stay.cost}
              location={stay.location}
            />
          )}
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stays: state.stays,
    filteredStays: state.filteredStays
  }
}

export default connect(mapStateToProps)(StaysList);
