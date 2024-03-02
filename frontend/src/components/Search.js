import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
function Search({setJokes}) {

  let searchRef  = useRef();
  const [searchTerm , setSearchTerm] = useState('')
  
  const onSearch = () => {
    setSearchTerm(searchRef.current.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  useEffect(()=>{
    const fetchJokes = async()=>{
      const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch joke (status ${response.status})`);
        }

        const jokeData = await response.json();
        console.log(jokeData.results)
        setJokes(jokeData.results);
    }
    fetchJokes();
  },[searchTerm]);
  return (
    <input onKeyDown={handleKeyDown } ref={searchRef} className='border-2' type="text" placeholder='Search jokes here!!' />
  )
}

export default Search