import React from 'react';
import { useNavigate } from "react-router-dom";

const Links = ({name, path}) => {

  let toSection = useNavigate();
  return (
    <div
      className='enlace'
      onClick={ () => toSection(path) }
    >
      {name}
    </div>
  )
}

export default Links