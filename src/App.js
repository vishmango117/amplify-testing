import React from "react";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.authState == "signedIn") {
      return (
        <div>
          <h1>Internal App</h1>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
