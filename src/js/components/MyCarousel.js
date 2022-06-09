import React from 'react';
import { Carousel } from 'react-bootstrap';

export const MyCarousel = () => {
    return (
        <div className="container-fluid">
            <Carousel className="my-carousel">
                <Carousel.Item className="my-carousel-item">
                    <img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/gybHYyw/Banner-Web-1.png"
                        alt="¡Innovando la educación en Venezuela!"
                    />

                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/RNP9mnY/Banner-Web-2.png"
                        alt="Ofrecemos Porgramas Educativos"
                    />

                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <a href="/rsc-resultados"><img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/bFWWGLd/Banner-Web-3.png"
                        alt="Torneo de Robótica"
                    /> </a>


                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <a href="/courses-view"><img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/P4vzYnC/Banner-Web-4.png"
                        alt="Cursos Online"
                    /> </a>


                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <a href="/plan-vacacional"><img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/KGGQLBZ/Banner-Web-5.png"
                        alt="Plan Vacacional"
                    /> </a>


                </Carousel.Item>
            </Carousel>
        </div>

    )
}