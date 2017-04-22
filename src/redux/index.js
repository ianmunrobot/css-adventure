import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger]

export default createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))