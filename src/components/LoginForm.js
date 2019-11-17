import React, { Component } from 'react';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton
} from "./CardStyle";

class LoginForm extends Component {
  render () {
    return (
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>

        <CardBody>
          <div className="LoginForm" >
            <form onSubmit={this.props.handleSubmit} >
              <CardFieldset>
                <CardInput placeholder="Username" type="text" name="username" required onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardInput placeholder="E-mail" type="text" name="email" required onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardInput placeholder="Password" type="password" name="password" required onChange={event => this.props.handleChange(event)}/>
              </CardFieldset>

              <CardFieldset>
                <CardButton type="submit">Login</CardButton>
              </CardFieldset>
            </form>
          </div>
        </CardBody>
      </CardWrapper>
    );
  }
}

export default LoginForm;
