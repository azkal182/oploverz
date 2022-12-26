<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Navbar from './components/Navbar'
import Show from './components/Show'
import Detail from './page/Detail'
import Search from './page/Search'
import Providers from './components/theme/Providers'
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Show from "./components/Show";
import Detail from "./page/Detail";
import Search from "./page/Search";
import Bypass from "./page/Bypass";
>>>>>>> bd57489a4864f5812aab3358400ce1846e9e3cdd

function App() {
  const [count, setCount] = useState(0);

<<<<<<< HEAD
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
=======
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:episode" element={<Show />} />
        <Route path="/anime/:id" element={<Detail />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/bypass/*" element={<Bypass />} />
      </Routes>
    </>
  );
>>>>>>> bd57489a4864f5812aab3358400ce1846e9e3cdd
}

export default App;
