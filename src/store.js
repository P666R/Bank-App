import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger/src';

import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const middleware = [logger];
const composedEnhancers = compose(applyMiddleware(...middleware));

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
