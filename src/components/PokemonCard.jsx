import PropTypes from "prop-types"


function PokemonCard({pokemon}){  
  return (    <figure className="PokemonCard">
     {pokemon.imgSrc ? <img className="PokemonCardImg" src={pokemon.imgSrc} alt={pokemon.name}/> : <p>"???"</p>}
      <figcaption className="BulbasaurCase">{pokemon.name}</figcaption>    </figure>
      ) 
      }
      
      
      PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
          name: PropTypes.string.isRequired,
          imgSrc: PropTypes.string,
        }).isRequired}
        
        
        
        export default PokemonCard
        
        