import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Navbar from './components/Navbar'
import Show from './components/Show'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/show/:episode' element={<Show />} />
            </Routes>
        </>
    )
}

export default App
