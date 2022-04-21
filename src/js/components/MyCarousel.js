import React from 'react';
import { Carousel } from 'react-bootstrap';

export const MyCarousel = () => {
    return (
        <div className="container-fluid">
            <Carousel className="my-carousel">
            <Carousel.Item className="my-carousel-item">
                    <img
                        className="my-carousel-image d-block w-100"
                        src="https://i.imgur.com/13FMJfS.jpg"
                        alt="Clasificados"
                    />
                    <Carousel.Caption className="carousel-caption">
                        {/* <h3>¡PRIMER TORNEO INTERCOLEGIAL DE ROBÓTICA!</h3>
                        <p>
                            PARTICIPA Y FORMA PARTE DE ESTA GRAN EXPERIENCIA
                        </p> */}
                        <a href="/rsc-resultados" ><img src="https://i.ibb.co/v4dmnf2/button.png" className="col-7 col-md-4" alt="Button" /></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <img
                        className="my-carousel-image d-block w-100"
                        src="https://i.imgur.com/mUTyvZd.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>¡PRIMER TORNEO INTERCOLEGIAL DE ROBÓTICA!</h3>
                        <p>
                            PARTICIPA Y FORMA PARTE DE ESTA GRAN EXPERIENCIA
                        </p>
                        <a href="/rsc-classification" ><img src="https://i.ibb.co/v4dmnf2/button.png" className="col-7 col-md-4" alt="Button" /></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/QpnRSKS/carousel-1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>¡Innovamos la educación en Venezuela!</h3>
                        <p>
                            Ofrecemos programas educativos para colegios y preescolares en materias de
                            robótica, programación y tecnología con el sueño de preparar a la generación
                            del futuro.
                        </p>
                        <a href="/programs-view" ><img src="https://i.ibb.co/v4dmnf2/button.png" className="col-7 col-md-4" alt="Button" /></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/yNWSyHQ/carousel-2.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>¡Entérate de nuestros cursos online!</h3>
                        <p>
                            Ofrecemos los mejores cursos del mercado en las áreas de inglés, programación
                            y robótica.
                        </p>
                        <a href="/courses-view" ><img src="https://i.ibb.co/v4dmnf2/button.png" className="col-7 col-md-4" alt="Button" /></a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}