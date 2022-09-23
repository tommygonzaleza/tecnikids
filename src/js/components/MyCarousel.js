import React from 'react';
import { Carousel } from 'react-bootstrap';

export const MyCarousel = () => {
    return (
        <div className="container-fluid">
            <Carousel className="my-carousel">
                <Carousel.Item className="my-carousel-item">
                    <img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/bzc35QD/Banner-Web-Sep1.png"
                        alt="¡Innovando la educación en Venezuela!"
                    />

                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/2KCrcvg/Banner-Web-Sep2.png"
                        alt="Ofrecemos Porgramas Educativos"
                    />

                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <a href="/rsc-resultados"><img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/NLVzyL6/Banner-Web-Sep3.png"
                        alt="Torneo de Robótica"
                    /> </a>


                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <a href="/courses-view"><img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/YWV9dZf/Banner-Web-Sep4.png"
                        alt="Cursos Online"
                    /> </a>


                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <a href="/academy-view"><img
                        className="my-carousel-image d-block w-100"
                        src="https://i.ibb.co/q53hBYH/Banner-Web-Sep5.png"
                        alt="Plan Vacacional"
                    /> </a>


                </Carousel.Item>
            </Carousel>
        </div>

    )
}