import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./scss/import.scss"
import Store from './store/store.js'

const store = new Store()

export const Context = createContext({
  store
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
    store
  }}>
    <App />
  </Context.Provider>
)
