import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('finds text', () => {
  const { getByText } = render(<App />);
  const text = getByText(/welcome/i);
  expect(text).toBeInTheDocument();
});
