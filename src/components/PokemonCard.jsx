function PokemonCard(){
  const pokemon = pokemonList[0]     
  return (    <figure className="PokemonCard">
     {pokemon.imgSrc ? <img className="PokemonCardImg" src={pokemon.imgSrc} alt={pokemon.name}/> : <p>"???"</p>}
      <figcaption className="BulbasaurCase">{pokemon.name}</figcaption>    </figure>)    }
  //  const pokemon = pokemonList[0]
  //  return(
  //   <figure className="PokemonCard"/> ({ pokemon.imgSrc?<img src={pokemon.imgSrc} alt={pokemon.name}/> :<p>"???"</p> }
  //  ))
    /*return <figure className="PokemonCard"><img className="PokemonCardImg"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    alt="bulbasaur"
  /> <figcaption className="BulbasaurCase">Bulbasaur</figcaption>
  </figure>*/




const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
export default PokemonCard;