import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  counter,
});

export default createStore(rootReducer, {}, compose(applyMiddleware()));
