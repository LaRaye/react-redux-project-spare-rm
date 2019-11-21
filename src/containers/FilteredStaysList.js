import React, { Component } from 'react';
import StayCard from '../components/StayCard';

class FilteredStaysList extends Component {
  render () {
    if (this.props.completedSearch && this.props.filteredStays.length === 0) {
      return (<p>Sorry we cannot find any stays at that location</p>)
    }

    return (
      <div>
        <h1>Stays</h1>

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

      </div>
    )
  }

}

export default FilteredStaysList;
