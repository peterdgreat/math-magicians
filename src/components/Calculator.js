import { useState } from 'react';
import Button from './Button';
import './calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const initialState = {
    total: 0,
    next: 0,
    operation: null,
  };
  const [state, setstate] = useState(initialState);
  const handleClick = (value) => {
    setstate((state) => calculate(state, value));
  };

  const { total, next, operation } = state;
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

        <Button classes="box btn" value="AC" handleClick={handleClick} />
        <Button classes="box btn" value="+/-" handleClick={handleClick} />
        <Button classes="box btn" value="%" handleClick={handleClick} />
        <Button classes="s-box btn" value="&divide;" handleClick={handleClick} />

      </section>
      <section className="d-flex">

        <Button classes="box btn" value="7" handleClick={handleClick} />
        <Button classes="box btn" value="8" handleClick={handleClick} />
        <Button classes="box btn" value="9" handleClick={handleClick} />
        <Button classes="s-box btn" value="x" handleClick={handleClick} />

      </section>
      <section className="d-flex">

        <Button classes="box btn" value="4" handleClick={handleClick} />
        <Button classes="box btn" value="5" handleClick={handleClick} />
        <Button classes="box btn" value="6" handleClick={handleClick} />
        <Button classes="s-box btn" value="-" handleClick={handleClick} />

      </section>
      <section className="d-flex">

        <Button classes="box btn" value="1" handleClick={handleClick} />
        <Button classes="box btn" value="2" handleClick={handleClick} />
        <Button classes="box btn" value="3" handleClick={handleClick} />
        <Button classes="s-box btn" value="+" handleClick={handleClick} />

      </section>
      <section className="d-flex">
        <Button classes="b-box btn" value="0" handleClick={handleClick} />
        <Button classes="box btn" value="." handleClick={handleClick} />
        <Button classes="s-box btn" value="=" handleClick={handleClick} />

      </section>
    </div>
  );
}
