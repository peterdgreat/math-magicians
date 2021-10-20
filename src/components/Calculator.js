/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Button from './Button';
import './calculator.css';

export default class Calculator extends Component {
  render() {
    return (
      <div className="h-bg">
        <header>
          <div className="d-flex justify-content-end px-2">
            <h2>0</h2>
          </div>
        </header>
        <section className="d-flex">

          <Button classes="box btn" value="AC" />
          <Button classes="box btn" value="+/-" />
          <Button classes="box btn" value="%" />
          <Button classes="s-box btn" value="&divide;" />

        </section>
        <section className="d-flex">

          <Button classes="box btn" value="7" />
          <Button classes="box btn" value="8" />
          <Button classes="box btn" value="9" />
          <Button classes="s-box btn" value="x" />

        </section>
        <section className="d-flex">

          <Button classes="box btn" value="4" />
          <Button classes="box btn" value="5" />
          <Button classes="box btn" value="6" />
          <Button classes="s-box btn" value="-" />

        </section>
        <section className="d-flex">

          <Button classes="box btn" value="1" />
          <Button classes="box btn" value="2" />
          <Button classes="box btn" value="3" />
          <Button classes="s-box btn" value="+" />

        </section>
        <section className="d-flex">
          <Button classes="b-box btn" value="0" />
          <Button classes="box btn" value="." />
          <Button classes="s-box btn" value="=" />

        </section>
      </div>
    );
  }
}
