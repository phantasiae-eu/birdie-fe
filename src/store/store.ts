import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { selectorMiddleware } from '../selector/selector.middleware'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(selectorMiddleware))
)

export default store
