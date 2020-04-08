import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducers';
import rootSaga from '../Sagas';
import { compose } from 'redux'; // and your other imports from before

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore (rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;