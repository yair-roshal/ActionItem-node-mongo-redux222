import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import peopleReducer from './reducers/peopleReducer';

const store = createStore(peopleReducer, applyMiddleware(thunk));

export default store;
