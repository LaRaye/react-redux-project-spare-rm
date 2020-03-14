import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import StaysList from "./StaysList";
import FilteredStaysList from "./FilteredStaysList";

class StaysFilterWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: "",
      filteredStays: [],
      completedSearch: false
    }
  }

  componentDidMount(state) {
    console.log("mounted")
    this.setState({
      ...state,
      completedSearch: false
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
    this.filterStaysOnSearch()
  }

  filterStaysOnSearch = () => {

    let myFilteredStays = this.props.stays.filter(stay => stay.location.toLowerCase() === this.state.searchInput.toLowerCase())

    this.setState({
      ...this.state,
      filteredStays: myFilteredStays,
      completedSearch: true
    })
  }

  handleCompletedSearch = () => {
    this.setState({
      ...this.state,
      completedSearch: false
    })
  }

  render() {

    if (this.props.stays.length === 0) {
      return <p>Loading...</p>
    }

    if (this.state.searchInput !== "") {

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
              completedSearch={this.state.completedSearch}
              handleCompletedSearch={this.handleCompletedSearch}
            />
        </div>
      )
    } else {

        return (
          <div>
            <h1>Stays</h1>

              <SearchBar
                searchInput={this.state.searchInput}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />

              <StaysList />
          </div>
        )
    }
  }
}

const mapStateToProps = state => {
  return {
    stays: state.stays
  }
}

export default connect(mapStateToProps)(StaysFilterWrapper);
