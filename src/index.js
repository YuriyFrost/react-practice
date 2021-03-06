import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
