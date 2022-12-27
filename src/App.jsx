
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Navbar from './components/Navbar'
import Show from './components/Show'
import Detail from './page/Detail'
import Search from './page/Search'
import Providers from './components/theme/Providers'

function App() {
  const [count, setCount] = useState(0);

    return (
        <>
            <Providers>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/show/:episode' element={<Show />} />
                    <Route path='/anime/:id' element={<Detail />} />
                    <Route path='/search/:query' element={<Search />} />
                </Routes>
            </Providers>
        </>
    )

}

export default App;
