// Modues
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Models
// Components
import App from './App.tsx'
// CSS
import './index.css'
// Services

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
