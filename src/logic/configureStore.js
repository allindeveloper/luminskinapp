import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import { promiseMiddleware } from './middleware'
import currencyReducer from "./reducers/currencyReducer"
import productsReducer from "./reducers/productsReducer"

const rootReducer = combineReducers({
  currencyReducer,
  productsReducer
});
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk, promiseMiddleware, logger)))
  let persistor = persistStore(store)
  return { store, persistor }
}
