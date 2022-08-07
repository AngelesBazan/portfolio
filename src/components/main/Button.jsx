import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({name, icon}) => {
  return (
    <div className='button'>
      <FontAwesomeIcon
        icon={icon}
        className="fa-xl btn-icon" />
        {name}
    </div>
  )
}

export default Button