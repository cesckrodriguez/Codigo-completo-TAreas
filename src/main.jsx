import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import './styles/index.css'

const Raiz = createRoot(document.getElementById('root'))

Raiz.render(
  <StrictMode>
    <App />
  </StrictMode>
)
