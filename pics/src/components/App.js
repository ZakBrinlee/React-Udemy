// Import React and ReactDOM libraries
import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

// Create a React component
class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 17b664efc6d7000313425d5dd3ad8598af7bd451be4cf21c3aae9aad5f380fcc"
      }
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
