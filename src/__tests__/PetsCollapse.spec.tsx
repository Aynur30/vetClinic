import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PetsCollapse from '../widgets/PetsCollapse/PetsCollapse';

const data = [{ id: 1, name: 'Черничка' }];

describe('PetsCollapse', () => {
  it('PetsCollapse renders', () => {
    render(<PetsCollapse data={data} />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('dinamyc styles works', () => {
    render(<PetsCollapse data={data} />);
    const arrows = screen.getAllByRole('img');
    arrows.forEach((arrow, index) => {
      if (index === 0) {
        fireEvent.click(arrow);
        expect(screen.getByAltText('avatar')).toHaveClass('collapse-img-active');
      }
    })
  });
});