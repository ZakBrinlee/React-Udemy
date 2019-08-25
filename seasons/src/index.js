// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

// Create a React component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "", isLoading: true };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // Helper method to avoid conditionals in render 
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='Please accept location request'/>;
  }

  render() {
    return(
    <div>
      {this.renderContent()}
    </div>
    );
  }
}
// Take component and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
