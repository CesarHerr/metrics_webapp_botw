import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import Equipment from '../components/Equipment';

const mockStore = configureStore([thunk]);

describe('Equipment render test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cards: {
        equipment: [
          {
            id: '1',
            name: 'equipment 1',
            category: 'equipment',
            image: '../images/equipment.png',
          },
          {
            id: '2',
            name: 'equipment 2',
            category: 'equipment',
            image: '../images/equipment.png',
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

  test('renders equipment list correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Equipment />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Equipment 1')).toBeInTheDocument();
    expect(screen.getByText('Equipment 2')).toBeInTheDocument();
    expect(screen.getByText('Equipment')).toBeInTheDocument();

    const image1 = screen.getByAltText('Equipment 1');
    const image2 = screen.getByAltText('Equipment 2');

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
