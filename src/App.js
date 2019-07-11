import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputsComponent from './components/InputsComponent';
import OutputComponent from './components/OutputComponent';
import RGBComponent from './components/RGBComponent';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1 className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <InputsComponent />
          <OutputComponent/>
        </h1>
        <div>
        <RGBComponent />
        </div>
      </div>
    );
  }
  
}

export default App;
