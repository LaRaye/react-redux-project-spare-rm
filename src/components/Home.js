import React from 'react';
import { Link  } from 'react-router-dom';
import {
  CardWrapper,
  CardHeader,
  CardHeading
} from "./CardStyle";

const Home = () => {
  return (
    <div>
      <h1>Welcome to SpareRoom </h1>
      <Link to={'/stays'} >
          <CardWrapper>
            <CardHeader>
              <CardHeading>Explore Stays</CardHeading>
            </CardHeader>
          </CardWrapper>
      </Link>
    </div>
  )
}

export default Home;
