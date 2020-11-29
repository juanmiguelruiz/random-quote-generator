import { combineReducers, createStore } from 'redux'
import authorReducer from './author/reducer'

const reducers = combineReducers({
    authorReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;