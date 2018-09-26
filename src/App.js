import React, { Component } from 'react';
import './App.css';
import { ROWS, COLS, CELL, BODY, FOOD, START, KEYS, DIRS } from './const.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="header__title">Snake</h1>
        </header>
        <main className="main">
        </main>
      </div>
    )
  }
}

export default App;
