

function Navbar ({pokemonIndex, pokemonList, pokemonFutur}) {
    const incrementation=()=>{pokemonFutur(pokemonIndex+1)}
const decrementation=()=>{pokemonFutur(pokemonIndex-1)}

return(
<div className='btnContainer'>    
   {pokemonIndex > 0 ? <button className='btnIndexSelector' onClick={decrementation}>Precédent</button>:null}
   {pokemonIndex < pokemonList.length -1 ?<button className='btnIndexSelector' onClick={incrementation}>Suivant</button>:null}
   </div>
)}

export default Navbar