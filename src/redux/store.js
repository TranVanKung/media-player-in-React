import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import reducers from './reducers';

function todos(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(
  todos
);


export default store;
