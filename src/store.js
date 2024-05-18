import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
// import { logger } from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

// const middleware = [thunk, logger];
const middleware = [thunk];

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
