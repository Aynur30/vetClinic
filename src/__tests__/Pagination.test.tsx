import { render, screen } from '@testing-library/react';
import Pagination from '../shared/ui/Pagination/Pagination';
import "@testing-library/jest-dom";

test('renders Pagination component', () => {
    const totalPages = 10;
    const currentPage = 1;
    render(
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={jest.fn()} />
    );

    const paginationElement = screen.getByTestId('pagination');
    expect(paginationElement).toBeInTheDocument();
});