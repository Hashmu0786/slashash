import React from 'react';

function Joke({joke,favJokes, setFavJokes}) {

    const addToFav = async()=>{
        const newFav = [...favJokes,joke];
        // setFavJokes(newFav);
        const res = await fetch('http://localhost:3000/favorites/add', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify(newFav),
        });
    }
  return (

    <div className='flex items-center justify-between h-full'>
        <p className='w-[90%]'>{joke.joke}</p>
        <svg onClick={addToFav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    </div>

    
  )
}

export default Joke