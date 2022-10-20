import { render, screen } from '@testing-library/react';
import Status404 from '../../errorHandling/Status404';
import App from './App';

test('renders the landing page', () => {
  render(App);
});

test('shows animations', () => {
  render(Status404);
});
