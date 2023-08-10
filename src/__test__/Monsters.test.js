import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Monsters from '../components/Monsters';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('Monsters render test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cards: {
        monsters: [
          {
            id: '1',
            name: 'monsters 1',
            category: 'monsters',
            image: '../images/monsters.png',
          },
          {
            id: '2',
            name: 'monsters 2',
            category: 'monsters',
            image: '../images/monsters.png',
          },
        ],
        detail: {
          data: {
            id: '1',
            name: 'detail 1',
            category: 'details',
            image: '../images/triforce.png',
            description: 'description 1',
            common_locations: ['location 1'],
            properties: { property: 0 },
          },
          status: 'fulfilled',
          error: null,
        },
      },
    });
  });

  test('renders monsters list correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Monsters />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Monsters 1')).toBeInTheDocument();
    expect(screen.getByText('Monsters 2')).toBeInTheDocument();
    expect(screen.getByText('Monsters')).toBeInTheDocument();

    const image1 = screen.getByAltText('Monsters 1');
    const image2 = screen.getByAltText('Monsters 2');

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
