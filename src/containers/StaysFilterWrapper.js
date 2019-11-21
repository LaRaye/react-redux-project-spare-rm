import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { findStays } from '../actions/stays';
import StaysList from "./StaysList";
import FilteredStaysList from "./FilteredStaysList";

class StaysFilterWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stays: [],
      searchInput: "",
      filteredStays: [],
      completedSearch: false
    }
  }

  componentDidMount(state) {
    this.setState({
      ...state,
      stays: this.props.stays,
      filteredStays: this.props.filteredStays,
      completedSearch: this.props.completedSearch
    })
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
    console.log(this.props.filteredStays)

    if (this.props.stays.length === 0) {
      return <p>Loading...</p>
    }

    if (this.state.completedSearch) {
      return (
        <div>
          <h1>Stays</h1>

            <SearchBar
              searchInput={this.state.searchInput}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />

            <FilteredStaysList
              filteredStays={this.state.filteredStays}
            />
        </div>
      )
    } else if {
        return (
          <div>
            <h1>Stays</h1>

              <SearchBar
                searchInput={this.state.searchInput}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />

              <StaysList
                filteredStays={this.state.stays}
              />
          </div>
        )
    }

  }
}

const mapStateToProps = state => {
  return {
    stays: state.stays,
    filteredStays: state.filteredStays,
    completedSearch: state.completedSearch
  }
}

export default connect(mapStateToProps, { findStays } )(StaysFilterWrapper);
