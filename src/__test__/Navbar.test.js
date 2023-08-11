import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import Navbar from '../components/Navbar';

describe('Categories', () => {
  it('Renders Categories component', () => {
    const nav = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>,
    );

    expect(nav.container).toMatchSnapshot();
  });

  it('Renders Navigator component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>,
    );

    const element = screen.getByText('Zelda - Botw');

    expect(element).toBeInTheDocument();
  });
});
