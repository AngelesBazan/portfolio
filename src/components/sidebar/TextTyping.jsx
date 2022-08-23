import React from 'react'

const TextTyping = () => {

  const propiedades = ["Developer", "FullStack", "Frontend"];

  return (
    <div className='textyping-container'>
        
        <ul>
            {
                propiedades.map( e =>
                    <li key={e}> {e} </li>    
                )
            }
        </ul>

    </div>
  )
}

export default TextTyping