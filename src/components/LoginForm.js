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
            <form>
              <CardFieldset>
                <CardInput placeholder="Username" type="text" required />
              </CardFieldset>

              <CardFieldset>
                <CardInput placeholder="E-mail" type="text" required />
              </CardFieldset>

              <CardFieldset>
                <CardInput placeholder="Password" type="password" required />
              </CardFieldset>

              <CardFieldset>
                <CardButton type="button">Sign Up</CardButton>
              </CardFieldset>
            </form>
          </div>
        </CardBody>
      </CardWrapper>
    );
  }
}

export default LoginForm;
