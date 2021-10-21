/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Button from './Button';
import './calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (value) => {
    this.setState((state) => calculate(state, value));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="h-bg">
        <header>
          <div className="d-flex justify-content-end px-2">
            <h2>
              {total}
              {operation}
              {next}
            </h2>
          </div>
        </header>
        <section className="d-flex">

          <Button classes="box btn" value="AC" handleClick={this.handleClick} />
          <Button classes="box btn" value="+/-" handleClick={this.handleClick} />
          <Button classes="box btn" value="%" handleClick={this.handleClick} />
          <Button classes="s-box btn" value="&divide;" handleClick={this.handleClick} />

        </section>
        <section className="d-flex">

          <Button classes="box btn" value="7" handleClick={this.handleClick} />
          <Button classes="box btn" value="8" handleClick={this.handleClick} />
          <Button classes="box btn" value="9" handleClick={this.handleClick} />
          <Button classes="s-box btn" value="x" handleClick={this.handleClick} />

        </section>
        <section className="d-flex">

          <Button classes="box btn" value="4" handleClick={this.handleClick} />
          <Button classes="box btn" value="5" handleClick={this.handleClick} />
          <Button classes="box btn" value="6" handleClick={this.handleClick} />
          <Button classes="s-box btn" value="-" handleClick={this.handleClick} />

        </section>
        <section className="d-flex">

          <Button classes="box btn" value="1" handleClick={this.handleClick} />
          <Button classes="box btn" value="2" handleClick={this.handleClick} />
          <Button classes="box btn" value="3" handleClick={this.handleClick} />
          <Button classes="s-box btn" value="+" handleClick={this.handleClick} />

        </section>
        <section className="d-flex">
          <Button classes="b-box btn" value="0" handleClick={this.handleClick} />
          <Button classes="box btn" value="." handleClick={this.handleClick} />
          <Button classes="s-box btn" value="=" handleClick={this.handleClick} />

        </section>
      </div>
    );
  }
}
