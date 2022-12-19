import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { HiCheck, HiChevronUpDown } from "react-icons/hi2";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
const Show = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  const [embed, setEmbed] = useState([]);
  const [selected, setSelected] = useState([]);
  const [download, setDownload] = useState([]);
  const [stream, setStream] = useState("");
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(
      `https://encouraging-bat-sun-hat.cyclic.app/api/anime/oploverz/download?id=${params.episode}`
    ).then((res) => {
      //console.log(res.data.results.embed);
      setDownload(res.data.results.download);

      setIsLoading(false);
      setEmbed(res.data.results.embed);

      //console.log(isLoading);
      setSelected(res.data.results.embed[0]);
      //console.log(selected);
    });
    //setSelected(embed[0]);
  }, [params]);
  const handleChange = () => {
    //console.log(embed);
  };

  useEffect(() => {
    setStream(selected.id);
  }, [selected]);
  // console.log(params)
  return (
    <div>
      <div className="mt-5 w-full max-w-5xl mx-auto bg-slate-700">
        {" "}
        <iframe
          className="aspect-video"
          src={
            selected
              ? `https://acefile.co/player/${stream}`
              : `https://acefile.co/player/90423369`
          }
          frameBorder={0}
          width="100%"
          height="100%"
          allowFullScreen={true}
        ></iframe>
        {/* <div className='absolute top-0 z-[20]'></div> */}
        <div className="p-2 bg-slate-700">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1 w-32">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.resolution}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <HiChevronUpDown
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {embed.map((person, personIdx) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 px-3 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.resolution}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-amber-600">
                              <HiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="p-4 mt-24 rounded bg-slate-700 mx-3 w-full max-w-5xl mx-auto">
        <h2 className="text-white ">
          Download {params.episode.replaceAll("-", " ")}
        </h2>

        <div className="flex flex-col gap-y-3 mt-3 text-white">
          {download.map((download, i) => {
            return (
              // <div key={i}>
              //     <div>{download.format}</div>
              // </div>

              <div key={i}>
                <h1 className="w-full bg-blue-500 px-2 py-1 rounded text-white">
                  {download.format}
                </h1>
                <div className="flex flex-col gap-y-2 mt-2 text-white">
                  {download.resolutions.map((resolution, i) => {
                    return (
                      <div key={i} className="flex items-center gap-x-2">
                        <div className="bg-blue-500 w-14 text-center py-1 rounded">
                          {resolution.name}
                        </div>
                        <div className="flex items-center divide-x gap-2">
                          {resolution.servers.map((server, i) => {
                            return (
                              <div key={i} className="text-center pl-2">
                                <a href={server.link} target="_blank">
                                  {server.name}
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className='bg-blue-500 w-14 text-center py-1 rounded'>
                                        480
                                    </div> */}
                  {/* <span>hgj</span>
                                    <span>hgj</span>
                                    <span>hgj</span> */}
                </div>
              </div>
            );
          })}
          {/* <div>
                        <h1 className='w-full bg-blue-500 px-2 py-1 rounded text-white'>
                            MKV
                        </h1>
                        <div className='flex items-center gap-2 mt-2 text-white'>
                            <div className='bg-blue-500 w-14 text-center py-1 rounded'>
                                480
                            </div>
                            <span>hgj</span>
                            <span>hgj</span>
                            <span>hgj</span>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Show;
