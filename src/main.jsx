import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ✅ Import Tailwind and global styles
import './index.css'

// Optional: if needed for specific overrides


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
