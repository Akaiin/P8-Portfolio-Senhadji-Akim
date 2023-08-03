import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import GlobalStyle from './utils/styles/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <Home />
    </React.StrictMode>
)
