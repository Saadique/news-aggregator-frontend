import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import {persistStore} from "redux-persist";

export default function configureStore(preloadedState) {   

    let store = createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware));
    let persistor = persistStore(store);

    return { store, persistor }
}