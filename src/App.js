import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import ProjectPanel from './components/ProjectPanel';
import NavBar from './components/NavBar/NavBar';
import MainTabs from './components/MainTabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainTabs />
      </div>
    );
  }
}

export default App;
