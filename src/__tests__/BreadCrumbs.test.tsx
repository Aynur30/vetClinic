import { render, screen } from '@testing-library/react';
import Breadcrumbs from '../shared/Breadcrumbs/Breadcrumbs';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';

test('renders Breadcrumbs component', () => {
  render(<BrowserRouter><Breadcrumbs /></BrowserRouter>);
  const breadcrumbsComponent = screen.getByTestId('breadcrumbs');
  expect(breadcrumbsComponent).toBeInTheDocument();
});