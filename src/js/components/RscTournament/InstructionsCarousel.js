import React from "react";
import Carousel from "react-bootstrap/Carousel";
import rscVideo from "../../../rscVideo.mp4";
import ReactPlayer from "react-player";

const imageLinks = [
  "https://i.ibb.co/Rc0d2Tq/1.png",
  "https://i.ibb.co/jGtJfQv/2.png",
  "https://i.ibb.co/tYbJfSQ/II-Torneo-Intercolegial-de-Robo-tica-1767-1040-px.png",
  "https://i.ibb.co/Hq5kPQx/4.png",
  "https://i.ibb.co/SwsQCWc/5.png",
  "https://i.ibb.co/txPYxFJ/6.png",
  "https://i.ibb.co/dcbvZVn/7.png",
  "https://i.ibb.co/K9TL4pk/8.png",
  "https://i.ibb.co/g7FJd9N/9.png",
  "https://i.ibb.co/bzkpfsN/10.png",
];

function InstructionsCarousel() {
  return (
    <Carousel>
      {imageLinks.map((link) => (
        <Carousel.Item>
          <img className="d-block w-100" src={link} border="0" alt="slide" />
        </Carousel.Item>
      ))}
      <Carousel.Item interval={16000}>
        <div className="player-wrapper  d-block">
          <ReactPlayer
            className="react-player"
            url={rscVideo}
            width="100%"
            height="100%"
            loop={true}
            playing={true}
            // controls={true}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default InstructionsCarousel;
