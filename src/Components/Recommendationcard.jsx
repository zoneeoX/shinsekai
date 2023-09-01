import React from 'react'

const Recommendationcard = ({ entry }) => {
  return (
    <div className='pt-[10%] w-[70%] md:mx-[2.5vw] m-auto'>
      <a href={entry.url} target="_blank" rel='noreferrer'>
        <img src={entry.entry.images.jpg.large_image_url} alt="" className="md:w-[10vw] md:h-[15vw] w-[30vw] h-[40vw] m-auto" />
        <h1 className='text-black font-josef text-lg truncate'>{entry.entry.title}</h1>
      </a>
    </div>
  )
}

export default Recommendationcard