import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Materials from '../components/Materials';

const mockStore = configureStore([]);

describe('Materials render test', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cards: {
        materials: [
          {
            id: '1',
            name: 'materials 1',
            category: 'materials',
            image: '../images/materials.png',
          },
          {
            id: '2',
            name: 'materials 2',
            category: 'materials',
            image: '../images/materials.png',
          },
        ],
      },
    });
  });

  test('renders materials list correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Materials />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Materials 1')).toBeInTheDocument();
    expect(screen.getByText('Materials 2')).toBeInTheDocument();
    expect(screen.getByText('Materials')).toBeInTheDocument();

    const image1 = screen.getByAltText('Materials 1');
    const image2 = screen.getByAltText('Materials 2');

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
