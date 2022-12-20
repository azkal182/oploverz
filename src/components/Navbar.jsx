import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import Toggle from "../components/Toggle";
const Navbar = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="text-white bg-blue-900 flex items-center px-4 md:px-10 py-3 justify-between w-full">
      <div className="text-yellow-300 font-bold text-2xl">
        <Link to="/">OPZ</Link>
      </div>

      <div className="text-yellow-500 font-bold text-2xl ">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 md:w-6 h-4 md:h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-sm dark:text-slate-100 dark:bg-slate-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
            autocomplete="off"
          ></input>
        </div>
      </div>
      <div className="text-yellow-500 font-bold text-2xl">
        {/*
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[25px] w-[45px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        */}
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
