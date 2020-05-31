import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../img/carousel-1.jpg';
import image2 from '../../img/carousel-2.jpg';

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
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-carousel-item">
                    <img
                    className="my-carousel-image d-block w-100"
                    src={image2}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}