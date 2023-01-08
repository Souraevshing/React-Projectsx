import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

import { configureStore } from './store/store'
import App from './App'

const store = configureStore()
const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<h4>LOADING...</h4>}>
      <App />
    </PersistGate>
  </Provider>
)
