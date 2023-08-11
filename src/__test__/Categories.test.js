import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import Categories from '../components/Categories';

describe('Categories', () => {
  it('Renders Categories component', () => {
    const nav = render(
      <Provider store={store}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </Provider>,
    );

    expect(nav.container).toMatchSnapshot();
  });

  it('Renders Navigator component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </Provider>,
    );

    const element = screen.getByText('Creatures');

    expect(element).toBeInTheDocument();
  });
});
