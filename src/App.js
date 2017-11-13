import React, { Component } from 'react';
import './App.css';

import { FormContainer } from './containers/form-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer />
      </div>
    );
  }
}

export default App;
