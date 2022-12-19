import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    const params = useParams()
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    console.log(params)
    useEffect(() => {
        axios(
            `https://encouraging-bat-sun-hat.cyclic.app/api/anime/oploverz/detail?id=${params.id}`
        ).then((res) => {
            console.log(res.data.results)
            setDetails(res.data.results)
            setIsLoading(false)
        })
    })
    return (
        <>
            <div className='w-full max-w-5xl mx-auto mt-6 p-6'>
                <div className='content bg-slate-700 flex items-start mx-4 gap-x-4 p-4'>
                    <div>
                        <div className='w-44'>
                            <img
                                src='https://15.235.11.45/wp-content/uploads/2021/10/zm3jmj4cwea71-1-e1651122719112.webp'
                                alt='poster'
                            />
                            <div className='text-white text-center w-full bg-stone-900 py-2'>
                                Ratting 8.5
                            </div>
                        </div>
                    </div>
                    <div>detail</div>
                </div>
            </div>
        </>
    )
}

export default Detail
