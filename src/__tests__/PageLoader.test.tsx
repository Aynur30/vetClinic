import { render } from '@testing-library/react';
import PageLoader  from '../shared/ui/PageLoader/PageLoader';
import "@testing-library/jest-dom";

describe('Loader', () => {
  it('renders without error', () => {
    const { getByTestId } = render(<PageLoader />);
    const loaderElement = getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });
});