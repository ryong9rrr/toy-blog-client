import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './modules'
import { composeWithDevTools } from 'redux-devtools-extension'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const store = createStore(rootReducer, composeWithDevTools())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
