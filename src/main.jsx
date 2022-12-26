import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from './components/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <body className='bg-slate-100 min-h-screen dark:bg-slate-900 transition-all font-inter antialiased '>
            <ThemeProvider>
                <Router>
                    <App />
                </Router>
            </ThemeProvider>
        </body>
    </React.StrictMode>
)
