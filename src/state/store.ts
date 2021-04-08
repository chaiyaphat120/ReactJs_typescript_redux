import {createStore,applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import {rootReducers} from './reducers/rootReducer'
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose
export  const store = createStore(rootReducers,composeEnhancer(applyMiddleware(thunk)))