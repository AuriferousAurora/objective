import React from 'react';
import { render, screen } from '@testing-library/react';
import Task from './NewTask';

test('renders learn react link', () => {
  render(<Task />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
