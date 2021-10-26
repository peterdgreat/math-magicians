import React, { useState, useEffect } from 'react';

export default function Quote() {
  const [quotes, setQuote] = useState({});

  const fetchRandomeMarhQuote = () => fetch('https://random-math-quote-api.herokuapp.com/')
    .then((response) => response.json())
    .then((data) => setQuote(data));

  useEffect(() => fetchRandomeMarhQuote(), []);

  const { quote, author } = quotes;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center quote">
      <section className="col-6 ">
        <p className="text-center">
          {quote}
          -
          {author}
        </p>
        <button type="button" className="btn btn-primary " onClick={fetchRandomeMarhQuote}>Click to get more quotes</button>
      </section>
    </div>
  );
}
