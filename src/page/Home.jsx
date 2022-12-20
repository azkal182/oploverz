import React, { useEffect, useState } from "react";
import axios from "axios";
import Requests from "../requests";
import { Link } from "react-router-dom";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [latest, setlatest] = useState([]);
  const [isLoading, setIsLoading] = useState(0);

  useEffect(() => {
    axios(Requests.popular).then((res) => {
      setPopular(res.data.results);
      // console.log(typeof res.data.results)
      setIsLoading(1);
    });
    axios(Requests.latest_update).then((res) => {
      setlatest(res.data.results);
      // console.log(res.data.results)
      setIsLoading(1);
    });

    console.log(isLoading);

    if (popular && latest) {
      setIsLoading(false);
    }
  }, []);
  // {!isLoading ? 'loading' :'ok'}
  if (!isLoading) {
    return (
      <div className="grid h-screen place-items-center">
        <div className="flex items-center">
          <div className="w-24 h-24 border-t-4 border-b-4 border-slate-900 dark:border-red-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-3">
        <div className="w-full max-w-5xl md:mx-auto mt-8 shadow">
          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-md overflow-hidden">
            <div className="w-full px-4 bg-red-600 text-white">
              <h2 className="font-semibold text-lg py-1">Popular Today</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-3 md:p-6">
              {popular.map((item, index) => {
                return (
                  <div key={index} className="relative overflow-hidden">
                    <div>
                      <Link to={`show/${item.id}`} className="hover:bg-black">
                        <img
                          className="w-full object-cover hover:scale-105 transition duration-300 ease-in-out"
                          src={item.poster}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                    <div className="absolute w-full bottom-0 py-1 bg-slate-800/95 px-3">
                      <div className="text-white py-1">{item.title}</div>
                      <div className="flex items-center justify-between py-1">
                        <div className="type text-green-500">{item.type}</div>
                        <div className="episode text-blue-500">
                          Episode {item.episode}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl md:mx-auto mt-8 shadow">
          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-md overflow-hidden">
            <div className="w-full px-4 bg-blue-600 text-white">
              <h2 className="font-semibold text-lg py-1">Latest Update</h2>
            </div>
            <div className="px-4 py-4 grid gap-4 grid-cols-1 relative divide-y divide-slate-300 dark:divide-slate-500">
              {latest.map((item, index) => {
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-28 relative">
                      <Link to={`show/${item.id}`}>
                        <img src={item.poster} alt={item.title} />
                      </Link>
                      <div className="absolute bg-blue-500 text-sm rounded text-white px-1 p-[1px] top-0 right-0 mr-2 mt-2">
                        {item.type}
                      </div>
                      <div className="pt-10 absolute w-full bottom-0 bg-gradient-to-t from-black text-center text-white">
                        Eps {item.episode}
                      </div>
                    </div>
                    <div className="text-slate-900 dark:text-white ml-4 w-[75%]">
                      <Link to={`show/${item.id}`}>
                        <h2 className="font-semibold text-md ">{item.title}</h2>
                      </Link>
                      <p>Status : {item.status}</p>
                      <p>Posted by : {item.posted_by}</p>
                      <p>Released on : {item.released_on}</p>
                      <p>Series : {item.series}</p>
                    </div>
                    <div className="hidden md:absolute right-0 mr-9">
                      <div className="bg-blue-600 flex flex-col items-center rounded p-2 text-white px-3">
                        <div>Score</div>
                        <div className="font-semibold text-lg py-1">
                          {item.score}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
