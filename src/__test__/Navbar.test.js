import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Categories', () => {
  it('Renders Categories component', () => {
    const nav = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(nav.container).toMatchSnapshot();
  });

  it('Renders Navigator component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const element = screen.getByText('Zelda - Botw');

    expect(element).toBeInTheDocument();
  });
});
