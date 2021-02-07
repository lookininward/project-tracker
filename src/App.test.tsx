import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers/index';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

function render(
  ui: any,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

test('renders app header', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
