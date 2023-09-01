import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import axios from 'axios'
import Recommendationcard from "../Components/Recommendationcard";

const Information = () => {
  const { itemList, isLoading } = useSelector((state) => state.random);
  const { number } = useSelector((state) => state.numbers);
  const [data, setData] = useState([])


  useEffect(() => {
    const current = itemList.slice(1)[number]


     const recommendation = async () => {
       try{
         axios.get(`https://api.jikan.moe/v4/anime/${current['mal_id']}/recommendations`).then((data) => {
           const response = data
           setData(response.data.data)
         })
       } catch (err){
       }
     }

     recommendation()
  }, [itemList, number])



  return (
    !isLoading && (
      <>
      <div className="bg-gray-200 z-50 w-screen min-h-screen max-h-full flex text-black">
        {itemList
          .slice(1)
          .map(
            (
              {
                score,
                synopsis,
                aired,
                favorites,
                popularity,
                episodes,
                status, 
                duration,
                season,
                studios,
                producers,
                source,
                title,
                members,

              },
              i
            ) => (
                i === number && (
                  <div className="flex md:flex-row flex-col-reverse ml-[1vw]" key={i}>
                    <div className="flex justify-center ml-[4vw] text-start mt-10 md:w-fit w-screen pr-10 md:pr-0 m-auto flex-col z-40">

                      <h1 className="bg-rose-600 text-white min-h-fit max-h-full py-5 px-10 rounded-lg font-exo flex flex-row gap-2 items-center hover:scale-110 duration-200">
                        <AiFillStar /> {score || "No"} Scores
                      </h1>
                      <h2 className="bg-rose-600 text-white min-h-fit max-h-full py-5 px-10 rounded-lg my-5 font-exo flex flex-row gap-2 items-center hover:scale-110 duration-200">
                        <BsFillPeopleFill /> {members || "No"} Members
                      </h2>
                      

                      <div className="flex flex-col bg-white min-h-fit max-h-full py-10 px-10 rounded-lg">
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
                          Episodes
                          <p className="text-lg text-black/50">{episodes}</p>
                        </h2>
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
                          Duration
                          <p className="text-lg text-black/50">{duration}</p>
                        </h2>
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
                          Status
                          <p className="text-lg text-black/50">{status}</p>
                        </h2>
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
                          Start & End Date
                          <p className="text-lg text-black/50">
                            {aired.string}
                          </p>
                        </h2>
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
                          Season
                          <p className="text-lg text-black/50 capitalize">
                            {season || "Unkown Season"}
                          </p>
                        </h2>
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
                          Popularity
                          <p className="text-lg text-black/50">{popularity}</p>
                        </h2>
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
                          Favorites
                          <p className="text-lg text-black/50">{favorites}</p>
                        </h2>
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
                          Studios
                          <p className="text-lg text-black/50">
                            {studios.length >= 1 ? studios.map((stud) => stud.name) : 'No Studios'}
                          </p>
                        </h2>
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500 w-[10vw]">
                          Producers
                          <p className="text-lg text-black/50">
                            {producers.length >= 1
                              ? producers.map(
                                  (prod) =>
                                    prod.name + ", " || "Unknown Producers"
                                )
                              : "No Producers"}
                          </p>
                        </h2>
                        <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
                          Source
                          <p className="text-lg text-black/50">{source}</p>
                        </h2>
                      </div>
                    </div>
                    <div className="mt-10 px-[10vw] w-fit">
                      <h2 className="font-bold font-exo text-4xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500 py-1 w-fit">
                        {title}
                      </h2>

                      <p className="break-all tracking-tight md:w-[60vw] w-[90%] mt-[1vw] md:text-2xl text-lg font-josef md:leading-10">
                        {synopsis || "No Summary."}
                      </p>
                   
                    </div>
                  </div>
                )
            )
          )}
      </div>
      {data.length >= 1 ? (
      <div className="w-screen min-h-screen max-h-full p-[1vw] bg-gray-200">
        <h1 className="md:text-4xl text-2xl font-exo font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500 w-fit m-auto md:mx-[3vw] mt-[4vw] text-center">Recommendations // Similar Anime.</h1>
      <div className="grid md:grid-cols-6 grid-cols-2 w-fit m-auto md:m-0 text-center">
        {data.map((entry, i) => (
          <Recommendationcard entry={entry} key={i}/>
        ))}

      </div>
      </div>

      ) : (
        <div className="w-screen h-screen bg-gray-200 pl-[2vw] pt-[2vw]">
          <h1 className="text-4xl md:mx-[2.5vw] font-exo font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500 w-fit m-auto text-center">
            No Recommendations.
          </h1>
        </div>
      )}
      </>
    )
  );
};

export default Information;
