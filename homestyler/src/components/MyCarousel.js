import React, { useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function MyCarousel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      carouselRef.current.stop();
    } else {
      carouselRef.current.autoPlay();
    }
  };

  return (
    <div>
      <Carousel
        autoPlay={isPlaying}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        ref={carouselRef}
      >
        <div>
          <img src="./img/homepage/bedroom.jpg" alt="Slide 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="./img/homepage/luxury.jpg" alt="Slide 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="./img/homepage/bedroom2.webp" alt="Slide 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
