import React, { Component } from 'react';
import StayCard from '../components/StayCard';
import { Grid } from "../components/CardStyle";

class FilteredStaysList extends Component {
  render () {
    if (this.props.completedSearch && this.props.filteredStays.length === 0) {
      return (<p>Sorry we cannot find any stays at that location</p>)
    }

    return (
      <div>
        <Grid>
          {this.props.filteredStays.map(stay =>
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
    )
  }
}

export default FilteredStaysList;
