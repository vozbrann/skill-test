// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
// import rootReducer from './store/reducers';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import configureStore from './store/configureStore';

function render(
  ui,
  {
    initialState = {},
    // store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    store = configureStore(initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
