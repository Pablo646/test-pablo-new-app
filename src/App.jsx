import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import Navbar from './components/navbar'
import { useEffect } from "react";

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
 useEffect(
  () => {
    alert("hello pokemon trainer what's up")
  },
  []
);
pokemonList[pokemonIndex].name === "pikachu" ? alert('Pikatchoum! im sick!') : null;

  return (
    
    <div className='masterDiv'>
   <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
   <Navbar pokemonIndex={pokemonIndex} pokemonList={pokemonList} pokemonFutur={pokemonFutur}/>
   
    </div>

  );
}





export default App
