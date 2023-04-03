import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



function App() {
 const[pokemonIndex , pokemonFutur]=useState(0)
const incrementation=()=>{pokemonFutur(pokemonIndex+1)}
const decrementation=()=>{pokemonFutur(pokemonIndex-1)}

  return (
    <div className='masterDiv'>
   <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
   <div className='btnContainer'>    
   {pokemonIndex > 0 ? <button className='btnIndexSelector' onClick={decrementation}>Precédent</button>:null}
   {pokemonIndex < pokemonList.length -1 ?<button className='btnIndexSelector' onClick={incrementation}>Suivant</button>:null}
   </div>
    </div>

  );
}





export default App
