import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '../widgets/Forms/SearchInput';

test('renders search input', () => {
  render(<SearchInput />);
  const inputElement = screen.getByTestId('search-input') as HTMLInputElement;
  expect(inputElement).toBeTruthy();
});

test('handles input change', () => {
  render(<SearchInput />);
  const inputElement = screen.getByTestId('search-input') as HTMLInputElement;
  
  fireEvent.change(inputElement, { target: { value: 'test input' } });

  expect(inputElement.value).toBe('test input');
});

test('handles form submission', () => {
  render(<SearchInput />);
  const inputElement = screen.getByTestId('search-input');
  const formElement = screen.getByTestId('search-form');
  
  fireEvent.change(inputElement, { target: { value: 'test input' } });
  fireEvent.submit(formElement);

});