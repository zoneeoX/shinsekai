import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Components/Card'
import { getRandom } from '../features/randomSlice'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Information from './Information'


const Generated = () => {
    const dispatch = useDispatch()

    const [next, setNext] = useState(false)
    const [of, setOf] = useState(0)
    const { itemList, isLoading, isError } = useSelector((state) => state.random)
    const { number } = useSelector((state) => state.numbers)


    useEffect(() => {
        dispatch(getRandom())    

        if(of === number){
            setOf((prevOf) => prevOf + 1)

        }
    }, [next, dispatch, of, number])


  return (
    <>
    <div className='bg-transparent text-white w-screen h-[40vw]'>
        {isLoading ? (
            <div className='w-screen h-screen bg-white text-black flex justify-center items-center flex-col gap-4'>
                <i className='animate-spin text-6xl'><AiOutlineLoading3Quarters /></i>
                <h1>Loading in...</h1>
            </div>
            ) : (
                <>
                {/* <h1 className='absolute right-[10vw] top-10 md:text-xl text-md z-50 m-4 font-exo px-4 py-1 rounded-full text-black'>{number + 1 + ' of ' + of}</h1> */}
            {itemList.slice(1).map(({title, images, score, genres, mal_id, trailer, url}, i) => (
                <div key={i}>
                    {i === number && (
                        <Card title={title} number={number} url={url} images={images} score={score} genres={genres} i={i} key={i} setNext={setNext} next={next} trailer={trailer} mal_id={mal_id} />
                    )}
                </div>

            
            ))}
            </>
            

        )}

        {isError && (
            <h1>Something went wrong...</h1>
        )}

      

        
    </div>
    <Information />

    </>
  )
}

export default Generated