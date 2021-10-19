/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Button from './Button';
import './calculator.css';

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="d-flex justify-content-end h-bg">
            <h2>0</h2>
          </div>
        </header>
        <section className="d-flex">

          <Button classes="box btn" value="AC" />
          <Button classes="box btn" value="+/-" />
          <Button classes="box btn" value="%" />
          <Button classes="s-box btn" value="&divide;" />

        </section>
      </div>
    );
  }
}
