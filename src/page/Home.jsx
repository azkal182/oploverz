import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Requests from '../requests'
import { Link } from 'react-router-dom'
import { IoStarSharp } from 'react-icons/io5'

const Home = () => {
    const [popular, setPopular] = useState([])
    const [latest, setlatest] = useState([])
    const [isLoading, setIsLoading] = useState(0)

    useEffect(() => {
        axios(Requests.popular).then((res) => {
            setPopular(res.data.results)
            // console.log(typeof res.data.results)
            setIsLoading(1)
        })
        axios(Requests.latest_update).then((res) => {
            setlatest(res.data.results)
            // console.log(res.data.results)
            setIsLoading(1)
        })

        console.log(isLoading)

        if (popular && latest) {
            setIsLoading(false)
        }
    }, [])
    // {!isLoading ? 'loading' :'ok'}
    if (!isLoading) {
        return (
            <div className='grid h-screen place-items-center'>
                <div className='flex items-center'>
                    <div className='w-24 h-24 border-t-4 border-b-4 border-slate-900 dark:border-red-900 rounded-full animate-spin'></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='w-full max-w-5xl md:mx-auto'>
                <div className='px-4 py-4 grid grid-cols-1 relative gap-y-4'>
                    <h2 className='font-semibold text-lg text-slate-900 dark:text-slate-100'>
                        Terbaru
                    </h2>
                    {latest.map((latest, i) => {
                        return (
                            <Link key={i} to={`/show/${latest.id}`}>
                                <div className='flex items-start justify-start p-2 bg-gradient-to-t from-bg-slate-300 to-slate-50 dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-800 rounded-md border border-slate-50 dark:border dark:border-slate-800 relative'>
                                    <div className='w-28 relative'>
                                        <div className='aspect-w-3 aspect-h-4 rounded overflow-hidden'>
                                            <img
                                                className='object-cover'
                                                src={latest.poster}
                                                width={300}
                                                height={400}
                                                alt={latest.title}
                                            ></img>
                                        </div>
                                        <div className='absolute bg-blue-500 text-sm rounded text-white px-1 p-[1px] top-0 right-0 mr-2 mt-2'>
                                            {latest.type}
                                        </div>
                                        <div className='pt-10 absolute w-full bottom-0 bg-gradient-to-t from-black text-center text-white'>
                                            Eps {latest.episode}
                                        </div>
                                    </div>
                                    <div className='text-slate-900 dark:text-white ml-4 w-[75%]'>
                                        <h2 className='font-semibold text-md '>
                                            {latest.title
                                                .replace(
                                                    'Subtitle Indonesia',
                                                    ''
                                                )
                                                .replace(/episode\s\d+/i, '')}
                                        </h2>

                                        <div className='leading-5'>
                                            <p>Status : {latest.status}</p>
                                            <p>
                                                Posted by : {latest.posted_by}
                                            </p>
                                            <p>
                                                Released on :{' '}
                                                {latest.released_on}
                                            </p>
                                            <p className='text-sm dark:text-slate-400 mt-2'>
                                                Series : {latest.series}
                                            </p>
                                        </div>
                                        <div className='absolute flex items-center gap-x-1 right-2 top-8 bg-yellow-400 rounded-full px-2 text-sm text-slate-900'>
                                            <IoStarSharp />
                                            <span>{latest.score}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home
