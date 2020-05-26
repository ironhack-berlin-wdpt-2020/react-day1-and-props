import React, { Component } from "react";
import User from './components/User.js'

class App extends Component {

  render() {

    const lastName = "Pan"

    return (
      // JSX template
      <div className="myMainApp">
        <h1> Hello Ironhackers! </h1>
        <User firstName="Hendrik" />
        <User firstName="Peter" lastName={lastName} />
        <User firstName="Mir" />

      </div>

    );
  }

}

// default export
export default App;