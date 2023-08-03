import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Creatures from '../components/Creatures';

const mockStore = configureStore([]);

describe('Creatures', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cards: {
        creatures: [
          {
            id: '1',
            name: 'creature 1',
            category: 'creatures',
            image: '../images/creatures.png',
          },
          {
            id: '2',
            name: 'creature 2',
            category: 'creatures',
            image: '../images/creatures.png',
          },
        ],
      },
    });
  });

  test('renders creatures list correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter> 
          <Creatures />
        </MemoryRouter> 
      </Provider>,
    );

    expect(screen.getByText('Creature 1')).toBeInTheDocument();
    expect(screen.getByText('Creature 2')).toBeInTheDocument();
    expect(screen.getByText('Creatures')).toBeInTheDocument();

    const image1 = screen.getByAltText("Creature 1");
    const image2 = screen.getByAltText("Creature 2");

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
