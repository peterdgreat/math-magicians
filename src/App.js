/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React, { Component } from 'react';
import Calculator from './components/Calculator';

export default class App extends Component {
  render() {
    return (
      <div className="main-container col-8 d-flex flex-column justify-content-center">
        <Calculator />
      </div>
    );
  }
}
