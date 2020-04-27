import React from "react";
import { SignIn } from "aws-amplify-react";
import config from "./aws-exports";
import { CustomSignIn } from "./signin";
import App from "./App";
import { Authenticator } from "aws-amplify-react";

class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Authenticator hide={[SignIn]} amplifyConfig={config}>
          <CustomSignIn />
          <App />
        </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;
