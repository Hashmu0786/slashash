import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Search from './components/Search';
import JokesList from './components/JokesList';

function App() {
  const [jokes, setJokes] = useState([]);
  const [favJokes, setFavJokes] = useState([]);
  const [showFav, setShowFav] = useState(false);
  
  useEffect(()=>{
    const getFavJokes = async()=>{
      const res = await fetch('http://localhost:3000/favorites/');
      const resData = await res.json();
      return resData;
    }
    setFavJokes(getFavJokes());

  },[]);

  const toggleFav=()=>{
    setShowFav(!showFav);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6">
      <Search setJokes={setJokes} />
      <button onClick={toggleFav} className='border-2 shadow-sm rounded-md p-2 bg-slate-400 '>Favourites</button>
      <JokesList favJokes={favJokes} setFavJokes={setFavJokes} jokes={showFav ? favJokes : jokes} />
    </div>
  );
}

export default App;
