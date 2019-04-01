import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div id="bgSelection">
        {/* selection of background options as components
        component holds info on selected background and url */}
        </div>
        <div id="listSelections">
          { /* one dropdown selection is a single component
           dropdown holds info on selected image name and url */ }
        </div>
        <div id="imageHolder">
        {/* Images loaded here, each a child component?? of listSelections, defined there?*/}
        </div>
      </div>
    );
  }
}

export default App;
