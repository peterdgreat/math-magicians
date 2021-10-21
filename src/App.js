/* eslint-disable react/prefer-stateless-function */
import './App.css';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="main-container col-8 d-flex flex-column justify-content-center">
      <Calculator />
    </div>
  );
}
