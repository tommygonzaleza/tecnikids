import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../img/carousel-1.jpg';
import image2 from '../../img/carousel-2.png';
import buttonImg from '../../img/button.png';

export const MyCarousel = () => {
    return(
        <div class="container-fluid">
            <Carousel className="my-carousel">
                <Carousel.Item className="my-carousel-item">
                    <img
                    className="my-carousel-image d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>¡Innovamos la educación en Venezuela!</h3>
                        <p>
                            Ofrecemos programas educativos para colegios y preescolares en materias de 
                            robótica, programación y tecnología con el sueño de preparar a la generación 
                            del futuro.
                        </p>
                        <a href="/programs-view" ><img src={buttonImg} className="col-7 col-md-4" alt="Button" /></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <img
                    className="my-carousel-image d-block w-100"
                    src={image2}
                    alt="Third slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>¡Entérate de nuestros cursos online!</h3>
                        <p>
                            Ofrecemos los mejores cursos del mercado en las áreas de inglés, programación 
                            y robótica.
                        </p>
                        <a href="/courses-view" ><img src={buttonImg} className="col-7 col-md-4" alt="Button" /></a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}