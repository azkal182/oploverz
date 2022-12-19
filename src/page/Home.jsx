import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Requests from '../requests'

const Home = () => {
    const [popular, setPopular] = useState([])
    const [latest, setlatest] = useState([])

    useEffect(() => {
        axios(Requests.popular).then((res) => {
            setPopular(res.data.results)
            console.log(typeof res.data.results)
        })
        axios(Requests.latest_update).then((res) => {
            setlatest(res.data.results)
            console.log(res.data.results)
        })
    }, [])
    return (
        <>
            <div className='w-full max-w-5xl mx-auto mt-8'>
                <div className='w-full bg-slate-600 rounded-md overflow-hidden'>
                    <div className='w-full px-4 bg-red-600 text-white'>
                        <h2 className='font-semibold text-lg py-1'>
                            Popular Today
                        </h2>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-6'>
                        {popular.map((item, index) => {
                            return (
                                <div className='relative overflow-hidden'>
                                    <div>
                                        {/* <div className='w-full h-full absolute hover:bg-slate-900/40'>
                                            <a
                                                className='w-full h-full'
                                                href='#'
                                            >
                                                uyhjghfghfhfh
                                            </a>
                                        </div> */}
                                        <a
                                            href={`show/${item.id}`}
                                            className='hover:bg-black'
                                        >
                                            <img
                                                className='w-full object-cover hover:scale-105 transition duration-300 ease-in-out'
                                                src={item.poster}
                                                alt={item.title}
                                            />
                                            {/* <button className='absolute inset-0 h-full w-full'>
                                                dg
                                            </button> */}
                                            {/* <div className='w-full h-full absolute hover:bg-slate-900/50 inset-0'></div> */}
                                        </a>
                                    </div>
                                    <div className='absolute w-full bottom-0 py-1 bg-slate-700 px-3'>
                                        {/* <div className='w-full'>fdf</div> */}
                                        <div className='text-white py-1'>
                                            {item.title}
                                        </div>
                                        <div className='flex items-center justify-between py-1'>
                                            <div className='type text-green-500'>
                                                {item.type}
                                            </div>
                                            <div className='episode text-blue-500'>
                                                Episode {item.episode}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className='w-full max-w-5xl mx-auto mt-8'>
                <div className='w-full bg-slate-600 rounded-md overflow-hidden'>
                    <div className='w-full px-4 bg-blue-600 text-white'>
                        <h2 className='font-semibold text-lg py-1'>
                            latest Update
                        </h2>
                    </div>
                    <div className='px-4 py-4 grid gap-4 grid-cols-1 relative'>
                        {latest.map((item, index) => {
                            return (
                                <div className='flex items-center '>
                                    <div className='w-28 relative'>
                                        <a href={`show/${item.id}`}>
                                            <img
                                                src={item.poster}
                                                alt={item.title}
                                            />
                                        </a>
                                        <div className='absolute bg-blue-500 text-sm rounded text-white px-1 p-[1px] top-0 right-0 mr-2 mt-2'>
                                            {item.type}
                                        </div>
                                        <div className='pt-10 absolute w-full bottom-0 bg-gradient-to-t from-black text-center text-white'>
                                            Episode {item.episode}
                                        </div>
                                    </div>
                                    <div className='text-white ml-4 w-[75%]'>
                                        <a href={`show/${item.id}`}>
                                            <h2 className='font-semibold text-md '>
                                                {item.title}
                                            </h2>
                                        </a>

                                        <p>Status : {item.status}</p>
                                        <p>Posted by : {item.posted_by}</p>
                                        <p>Released on : {item.released_on}</p>
                                        <p>Series : {item.series}</p>
                                    </div>
                                    <div className='absolute right-0 mr-9'>
                                        <div className='bg-blue-600 flex flex-col items-center rounded p-2 text-white px-3'>
                                            <div>Score</div>
                                            <div className='font-semibold text-lg py-1'>
                                                {item.score}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
