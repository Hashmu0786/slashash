import React from 'react'
import Joke from './Joke'

function JokesList({jokes,favJokes, setFavJokes}) {
  return (
    <div>

      
      {jokes.map((joke)=>(
        <div key={joke.id} className='flex flex-col border-2 shadow-md rounded-md p-2 w-100% h-[100px] my-2'>
          <Joke favJokes={favJokes}  setFavJokes ={setFavJokes} joke={joke} />
        </div>
      ))}
    </div>
  )
}

export default JokesList