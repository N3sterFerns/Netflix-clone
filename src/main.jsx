import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./style.css"
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
   </StrictMode>,
)
