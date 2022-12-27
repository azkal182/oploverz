import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchModal from './SearchModal'
import { HiBars3 } from 'react-icons/hi2'
import ToggleTheme from './ToogleTheme'
import Toggle from './Toggle'
const Navbar = () => {
    const [enabled, setEnabled] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search/${event.target.value}`)
            setSearchValue('')
        }
    }

    return (
        <div className='w-full z-100 py-3 dark:bg-slate-900 border-b dark:border-slate-600 text-gray-400 dark:text-slate-100 shadow-sm'>
            <div className='px-4 w-full mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-x-8 text-slate-600 dark:text-slate-300'>
                    <div className='leading-5'>
                        <Link
                            className='italic font-bold gap-x-2 text-xl lg:text-2xl text-black dark:text-white flex items-center'
                            to='/'
                        >
                            <img
                                src='/logo.png'
                                alt='Logo'
                                width={32}
                                height={32}
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                            Oploverz
                        </Link>
                    </div>
                    {/* <div className='hidden lg:flex items-center justify-between gap-x-8'>
                            <div className='text-slate-900 dark:text-white'>
                                Beranda
                            </div>
                            <div>Screencast</div>
                            <div>Topik</div>
                            <div>Artikel</div>
                        </div> */}
                </div>
                <div className='hidden lg:flex items-center justify-between gap-x-1'>
                    <SearchModal />
                    {/* <ToggleTheme /> */}
                    <Toggle />
                    {/* <button className='px-4 py-2 dark:bg-slate-700/90 border border-slate-400 dark:border-slate-500 text-sm font-semibold rounded-md'>
                            Masuk
                        </button>
                        <button className='px-4 py-2 dark:bg-slate-700/90  border border-slate-400 dark:border-slate-500 text-sm font-semibold rounded-md'>
                            Daftar
                        </button> */}
                </div>
                <div className='flex items-center gap-x-1 lg:hidden'>
                    <SearchModal />
                    {/* <ToggleTheme /> */}
                    <Toggle />
                </div>
            </div>
        </div>

        // <div className='text-white bg-blue-900 flex items-center px-4 md:px-10 py-3 justify-between w-full'>
        //     <div className='text-yellow-300 font-bold text-2xl'>
        //         <Link to='/'>OPZ</Link>
        //     </div>

        //     <div className='text-yellow-500 text-2xl '>
        //         <div className='relative text-gray-600 focus-within:text-gray-400 w-full max-w-2xl'>
        //             <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
        //                 <button
        //                     type='submit'
        //                     className='p-1 focus:outline-none focus:shadow-outline'
        //                 >
        //                     <svg
        //                         fill='none'
        //                         stroke='currentColor'
        //                         strokeLinecap='round'
        //                         strokeLinejoin='round'
        //                         strokeWidth='2'
        //                         viewBox='0 0 24 24'
        //                         className='w-4 md:w-6 h-4 md:h-6'
        //                     >
        //                         <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
        //                     </svg>
        //                 </button>
        //             </span>
        //             <input
        //                 value={searchValue}
        //                 onKeyDown={handleSearch}
        //                 onChange={(event) => {
        //                     setSearchValue(event.target.value)
        //                 }}
        //                 type='search'
        //                 name='q'
        //                 className='py-2 text-sm dark:text-slate-100 dark:bg-slate-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900'
        //                 placeholder='Search...'
        //                 autoComplete='off'
        //             ></input>
        //         </div>
        //     </div>
        //     <div className='text-yellow-500 font-bold text-2xl'>

        //     </div>
        // </div>
    )
}

export default Navbar
