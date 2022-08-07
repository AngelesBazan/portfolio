import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from './Button';
import Title from './Title';
import { faEnvelope, faBriefcase, faFolder } from '@fortawesome/free-solid-svg-icons';
import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import "../../styles/main/slide.css";

const Slider = () => {
  return (
    <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        interval={4000}
        showThumbs={false}
        emulateTouch={true}
        transitionTime={1000}
    >
        <div className='slide'>
            <img src={slide1} alt="imagen" />
            <div className='data'>
                <Title name="Ángeles Bazán"/>
                <p> PROFESSIONAL DEVELOPER </p>
                <div className='buttons'>
                    <Button name="Contáctame" icon={faEnvelope} />
                    <Button name="Contrátame" icon={faBriefcase} />
                </div>
            </div>
            
        </div>
        <div className='slide'>
            <img src={slide2} alt="imagen" />
            <div className='data'>
                <h3>¿Necesitas un desarrollador creativo?</h3>
                <p>¡Yo puedo ayudarte!</p>
                <div className='buttons'>
                    <Button name="Portfolio" icon={faFolder} />
                    <Button name="Contáctame" icon={faEnvelope} />
                </div>
            </div>
        </div>
        <div className='slide'>
            <img src={slide3} alt="imagen"/>
            <div className='data'>
                <h3>¡Aquí podrás encontrar lo que necesitas!</h3>
                <p> * Developer * Creativa * Curiosa </p>
                <div className='buttons'>
                    <Button name="Contáctame" icon={faEnvelope} />
                    <Button name="Contrátame" icon={faBriefcase} />
                </div>
            </div>
        </div>
    </Carousel>
  )
}

export default Slider