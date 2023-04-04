

function Navbar ({index, pokemonFutur, pokemonName}) {
   const HandleClick = () => { 
    pokemonFutur(index) 
}

return(
<div className='btnContainer'>    
  <button className="btnIndexSelector" onClick={HandleClick}>{pokemonName}</button>
   </div>
)}

export default Navbar