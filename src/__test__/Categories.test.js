import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Categories from '../components/Categories';
import { MemoryRouter } from 'react-router-dom';

describe('Categories', () => {
  it('Renders Categories component', () => {
    const nav = render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    expect(nav.container).toMatchSnapshot();
  });

  it('Renders Navigator component', () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    const element = screen.getByText('Creatures');

    expect(element).toBeInTheDocument();
  });
});
