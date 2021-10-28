/* eslint-disable react/prefer-stateless-function */
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quote from './components/Quote';

export default function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">

          <div className="main-container col-8 d-flex flex-column justify-content-center">
            <Calculator />
          </div>
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
