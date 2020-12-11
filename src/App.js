import React, { Component } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Container from './Container';

import './App.css';

class App extends Component {
  state = {
    light: true
  }

  switchHandler() {
    this.setState({light : !this.state.light});
  }

  render() {
    return <div data-testid="app" className={this.state.light ? "App" : "dark"}>
      <Header switch={() => this.switchHandler()} label={this.state.light ? "off" : "on"}/>
      <div className="wrapper">
        <Sidebar/>
        <Container />
      </div>
    </div>
  }
}

export default App;
