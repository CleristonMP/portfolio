import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Projeto 1"
        />
        <Carousel.Caption>
          <h3>Projeto 1</h3>
          <p>Descrição do Projeto 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Projeto 2"
        />
        <Carousel.Caption>
          <h3>Projeto 2</h3>
          <p>Descrição do Projeto 2</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
