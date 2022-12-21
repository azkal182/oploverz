import axios from "axios";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listEpisode, setListEpisode] = useState([]);
  // console.log(params)
  useEffect(() => {
    axios(
      `https://encouraging-bat-sun-hat.cyclic.app/api/anime/oploverz/detail?id=${params.id}`
    ).then((res) => {
      console.log(res.data.results.list_episode);
      setDetails(res.data.results);
      setListEpisode(res.data.results.list_episode);
      setIsLoading(false);
    });
  }, []);

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
          <div className="w-full max-w-5xl mx-auto mt-6 text-slate-900 dark:text-white bg-slate-700 rounded-lg">
            <div className="content bg-slate-700 flex items-start gap-x-4 p-2 md:p-4">
              <div>
                <div className="w-44">
                  <img src={details.poster} alt="poster" />
                  <div className="text-white text-center w-full bg-stone-900 py-2">
                    Ratting 8.5
                  </div>
                </div>
              </div>
              <div>detail</div>
            </div>
          </div>
        </div>

        <div className="mx-3">
          <div className="w-full pb-4 divide-y divide-slate-300 dark:divide-slate-500 text-white mt-6 max-w-5xl bg-slate-700 rounded-md overflow-hidden mx-auto">
            <div className="p-2 md:px-4">
              <h2>Watch list</h2>
            </div>
            <div className="flex items-center py-2 px-4 font-semibold">
              <div className="w-20">Episode</div>
              <div className="w-[60%]">Title</div>
              <div className="hidden md:flex">Uploaded</div>
            </div>
            <div className="px-2 md:px-4 max-h-[500px] overflow-scroll overflow-x-hidden">
              {listEpisode.map((anime, index) => {
                return (
                  <Link to={`/show/${anime.id}`}>
                    <div
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-slate-600" : ""
                      } flex items-center w-full justify-items-stretch p-1 hover:bg-blue-500`}
                    >
                      <div className="w-20">{anime.episode}</div>
                      <div className="w-[60%]">{anime.title}</div>
                      <div className="hidden md:flex">{anime.uploaded}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default Detail;
