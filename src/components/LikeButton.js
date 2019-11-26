import React, { Component} from 'react';
import { CardButton } from "./CardStyle";

/*work on persistng likes*/

class LikeButton extends Component {

  constructor () {
    super()

    this.state = {
      counter: 0
    }
  }

  handleClick = (event) => {
    this.setState({
      counter: this.state.counter + 1
    })
  }


  render() {
    return (
      <div>
        <CardButton onClick={this.handleClick} >Like {this.state.counter}</CardButton>
      </div>
    )
  }
}

export default LikeButton;
