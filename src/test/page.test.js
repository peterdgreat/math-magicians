import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../components/Home';
import Quote from '../components/Quote';
import Calculator from '../components/Calculator';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import App from '../App';

it('renders without crashing', () => {
  render(<Home />);
});

it('renders without crashing', () => {
  render(<Quote />);
});
it('renders without crashing', () => {
  render(<Calculator />);
});
it('renders without crashing', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );
});

describe('Testing Container page with jest snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test Home page with jest snapshot
  it('renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // test Quote page with jest snapshot
  it('renders correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // test Calculator page with jest snapshot
  it('renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test NavBar page with jest snapshot
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <NavBar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test Button page with jest snapshot
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
