import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppLink from '../shared/AppLink/AppLink';
import "@testing-library/jest-dom";


describe('AppLink', () => {
  test('renders without errors', () => {
    const to = '/example';
    const children = 'Example Link';
    const role = 'link';

    const { getByRole } = render(
      <BrowserRouter>
        <AppLink to={to} role={role}>
          {children}
        </AppLink>
      </BrowserRouter>
    );

    const linkElement = getByRole('link');
    expect(linkElement).toBeInTheDocument();

    expect(linkElement).toHaveAttribute('href', to);
    expect(linkElement).toHaveTextContent(children);
  });
});