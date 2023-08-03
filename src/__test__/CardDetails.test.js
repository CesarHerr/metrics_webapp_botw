import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import CardDetails from '../components/CardDetails';

const mockStore = configureStore([thunk]);

describe('Card details render test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cards: {
        detail: {
          id: '1',
          name: 'detail 1',
          category: 'details',
          image: '../images/triforce.png',
          description: 'description 1',
          common_locations: ['location 1'],
          properties: { property: 0 },
        },
      },
    });
  });

  test('renders equipment list correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CardDetails />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Detail 1')).toBeInTheDocument();
    expect(screen.getByText('description 1')).toBeInTheDocument();
    expect(screen.getByAltText('detail 1 card')).toBeInTheDocument();
  });
});
