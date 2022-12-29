import { Dialog, Transition } from "@headlessui/react";
import Footer from "../components/Footer";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Search() {
  let [isOpen, setIsOpen] = useState(false);
  const [animes, setAnimes] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios(
      `https://encouraging-bat-sun-hat.cyclic.app/api/anime/oploverz/search?q=${params.query}`
    ).then((res) => {
      setAnimes(res.data.results);
      setIsLoading(false);
    });
  }, [params]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center">
        <div className="flex items-center">
          <div className="w-24 h-24 border-t-4 border-b-4 border-slate-900 dark:border-red-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="mx-3">
          <div className="w-full text-slate-900 dark:text-white mt-6 max-w-5xl bg-slate-100 dark:bg-slate-700 rounded-md overflow-hidden mx-auto">
            <h2 className="font-semibold block border-b border-slate-300 dark:border-slate-500  py-2 px-4">{`Search '${params.query}'`}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4  px-4 py-2">
              {animes.map((anime, index) => {
                return (
                  <div key={index}>
                    <Link to={`/anime/${anime.id}`}>
                      {" "}
                      <div className="flex flex-column w-full relative">
                        <img
                          className="aspect-auto w-full object-cover h-full"
                          src={anime.poster + '?resize=247,350'}
                          alt=""
                        />
                        <div
                          className={`absolute right-0 m-2 px-1 rounded text-sm ${
                            anime.type === "tv"
                              ? "bg-blue-600"
                              : anime.type === "Special"
                              ? "bg-red-500"
                              : "bg-blue-500"
                          }`}
                        >
                          {anime.type}
                        </div>
                        {/* <div className='absolute bottom-0 bg-gradient-to-t from-black w-full p-2 pt-5'>
                                            oke
                                        </div> */}
                      </div>
                      <div className="w-full text-center text-sm py-2">
                        {anime.title}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <Footer />
        </div>
        {/* <div className='fixed inset-0 flex items-center justify-center'>
                <button
                    type='button'
                    onClick={openModal}
                    className='rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
                >
                    Open dialog
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='w-full border divide-y divide-slate-300 max-w-2xl transform overflow-hidden rounded-lg bg-white border-slate-400 text-left align-middle mt-6 shadow-xl transition-all'>
                                    <div className=''>
                                        <div className='relative text-gray-600 focus-within:text-gray-400'>
                                            <input
                                                type='search'
                                                name='q'
                                                className='py-3 text-md w-full text-white bg-white -md pl-10 focus:outline-none focus:bg-white focus:text-gray-900'
                                                placeholder='Search...'
                                                autoComplete='off'
                                            ></input>
                                            <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                                                <button
                                                    type='submit'
                                                    className='p-1 focus:outline-none focus:shadow-outline'
                                                >
                                                    <svg
                                                        fill='none'
                                                        stroke='currentColor'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth='2'
                                                        viewBox='0 0 24 24'
                                                        className='w-5 h-5 text-slate-900'
                                                    >
                                                        <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                                                    </svg>
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <div className='p-2'>Enter</div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition> */}
      </>
    );
  }
}
