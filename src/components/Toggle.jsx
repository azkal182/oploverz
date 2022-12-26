import React from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { RiMoonClearLine } from 'react-icons/ri'
import { ThemeContext } from './ThemeContext'

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <div>
            {theme === 'dark' ? (
                <button
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                    className='px-3 py-2 dark:bg-slate-700/90 border border-slate-400 dark:border-slate-500 rounded-md hover:bg-slate-100 dark:hover:bg-slate-600'
                >
                    <RiMoonClearLine className='text-yellow-300' size={20} />
                </button>
            ) : (
                <button
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                    className='px-3 py-2 dark:bg-slate-700/90 border border-slate-400 dark:border-slate-500 rounded-md hover:bg-slate-100 dark:hover:bg-slate-600'
                >
                    <IoSunnyOutline size={20} />
                </button>
            )}
        </div>
    )
}

export default Toggle
