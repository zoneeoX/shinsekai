import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Myfavorite = () => {
    const { favoriteItem } = useSelector((state) => state.favorite)
    const navigate = useNavigate()

    
    function itemChanged(i){
      let newArray = favoriteItem.filter((element, index) => index !== i + 1)
      localStorage.setItem('favoriteItem', JSON.stringify(newArray))
      window.location.reload()
    }
    
  return (
    
      <div className='w-screen min-h-screen max-h-full bg-white'>
      <div className='grid md:grid-cols-4 grid-cols-2'>
        {favoriteItem.slice(1).length >= 1 ? (
          favoriteItem.slice(1).map(({ title, images, url }, i) => (
            <div key={i} className="text-white pt-[10%] w-[70%] group m-auto">
              <a href={url} target="_blank" rel={'noreferrer'}>
                <img src={images.jpg.large_image_url} alt="" className="md:w-[40vw] w-[30vw] h-[40vw] md:h-[30vw] m-auto"/>
                <h1 className='text-lg text-black/75 truncate text-bold group-hover:text-black/100 group-hover:scale-110 text-center duration-200'>{title}</h1>
              </a>
                <button onClick={() => itemChanged(i)} className="text-white bg-red-400 hover:bg-red-500 duration-200 px-2 py-1 rounded-full w-fit m-auto flex">Delete</button>
            </div>
  
        ))

        ) : (
          <div className='w-screen h-screen p-10'>
            <h1 className='font-exo text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500'>Empty favorite page // No items here,</h1>
            <div className='h-screen flex flex-col justify-center items-center pb-[20em] '>
              <button className='font-exo font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500 hover:scale-110 duration-200' onClick={() => navigate('/')}>Click me to go back</button>            
            </div>
          </div>
        )}
      
      </div>
      
  </div>

    
   
  )
}

export default Myfavorite