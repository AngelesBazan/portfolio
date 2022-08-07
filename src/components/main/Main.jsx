import React from 'react';
import Title from "../main/Title";
import Button from "../main/Button";
import Slider from './Slider';
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <div className='main'>
        {/* <Slider /> */}
        <Title name="Ángeles Bazán"/>
        <div>
            Cartelito dinámico
        </div>
        <div className='buttons'>
            <Button name="Contáctame" icon={faEnvelope} />
            <Button name="Contrátame" icon={faBriefcase} />
        </div>
    </div>
  )
}

export default Main