import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';

import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const middleware = [thunk, logger];

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
