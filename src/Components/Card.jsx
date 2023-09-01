import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { renderIndex } from '../features/indexSlice';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../features/Favorites';
import { BsFillBookmarkFill, BsBookmarkHeartFill } from 'react-icons/bs';


const Card = ({ title, images, genres, url, setNext, next, trailer, number, i }) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState(false)


  const { itemList, isLoading } = useSelector((state) => state.random)

  return (
    !isLoading && (
      <div className='h-[30vw]'>
      <img src={trailer.images.maximum_image_url || images.jpg.large_image_url || trailer.images.jpg.large_image_url} alt="" className="fixed w-[120em] h-[80em] brightness-50 object-cover left-0 object-bottom -z-10  "/>

    <div className='z-50 filter backdrop-blur-md w-screen h-[40vw]'>
    <div className='absolute right-2 md:right-0 h-full w-[10vw] flex justify-center items-center md:text-4xl text-md hover:bg-white/10 duration-200' onClick={() => {
            setNext(!next)
             dispatch(renderIndex(number + 1))
          }}> <h1 className='mr-[0vw] font-exo font-bold'>Next</h1> </div>
    {number >= 1 && (
      
      <div className='absolute md:left-0 left-2 h-full w-[10vw] hover:bg-white/10 duration-200 flex justify-center items-center md:text-4xl text-md'onClick={() => {
        setNext(!next)
        dispatch(renderIndex(number - 1))

      }}> <h1 className='ml-[0vw] font-exo font-bold'>Back</h1> </div>

          )}


      <div className='text-start lg:py-[8vw] py-2 flex flex-col justify-center items-center gap-2 group'>
        <a href={url} rel="noreferrer" target={'_blank'}>
        <img src={images.jpg.large_image_url} alt="" className="w-[15vw] h-[20vw]" />
        </a>
        <h1 className={`lg:text-3xl text-lg text-white/75 truncate md:w-[25vw] w-[50vw] text-center font-exo group-hover:scale-110 duration-200 md:block hidden`}>{title}</h1>
        <div className='flex flex-row gap-2 justify-center items-center'>
        {genres.map((genre, i) => (
          <p className='text-center bg-rose-600 px-2 md:text-lg text-sm' key={i}>
            {genre.name}
          </p>
        ))}
        </div>
        <button onClick={() => {dispatch(addToFavorites(itemList.slice(1)[i])); setCheck(true)}} className={`md:text-2xl text-lg w-fit m-auto transition-all duration-200 ${check ? 'text-red-400' : 'text-white/50'}`}>{check ? <div className='flex flex-row gap-2 items-center'> <i><BsBookmarkHeartFill /></i> <p>Loved.</p></div> : <BsFillBookmarkFill />}</button>
       
      </div>
    </div>
    </div>
    )
  )
}

export default Card