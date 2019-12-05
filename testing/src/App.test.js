import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { addFoul, addOne} from './Dashboard';

test('renders without crashing', () => {
  render(<App />);
});

test('renders Balls', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Balls/i);
  expect(linkElement).toBeInTheDocument();
});

test('test addFoul', () =>{
  expect(addFoul(0)).toBe(1);
  expect(addFoul(1)).toBe(2);
  expect(addFoul(2)).toBe(2);
});

test('test addOne', () => {
  expect(addOne(0)).toBe(1);
  expect(addOne(5)).toBe(6);
});