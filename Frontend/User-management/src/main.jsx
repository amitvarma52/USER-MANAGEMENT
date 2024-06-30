import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux-toolkit/Store.js'
import Todo from './components/Todo.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
    <Todo/>
    </Provider> */}
    <App/>
  </React.StrictMode>,
)
