import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Navbar from './components/Navbar'
import Show from './components/Show'
import Detail from './components/Detail'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/show/:episode' element={<Show />} />
                <Route path='/anime/:id' element={<Detail />} />
            </Routes>
        </>
    )
}

export default App
