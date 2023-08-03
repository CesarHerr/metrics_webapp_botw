import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Treasures from '../components/Treasures';

const mockStore = configureStore([]);

describe('Treasures render test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cards: {
        treasures: [
          {
            id: '1',
            name: 'treasures 1',
            category: 'treasures',
            image: '../images/treasure.png',
          },
          {
            id: '2',
            name: 'treasures 2',
            category: 'treasures',
            image: '../images/treasures.png',
          },
        ],
      },
    });
  });

  test('renders treasures list correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter> 
          <Treasures />
        </MemoryRouter> 
      </Provider>,
    );

    expect(screen.getByText('Treasures 1')).toBeInTheDocument();
    expect(screen.getByText('Treasures 2')).toBeInTheDocument();
    expect(screen.getByText('Treasures')).toBeInTheDocument();

    const image1 = screen.getByAltText("Treasures 1");
    const image2 = screen.getByAltText("Treasures 2");

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
