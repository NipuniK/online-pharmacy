import React from 'react';


const CarouselComponent: React.FC = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner" style={{ height: '300px' }}>
      <div className="carousel-item active">
        <img src="./slides/1.jpg" className="d-block w-100" alt="Slide 1" />
      </div>
      <div className="carousel-item">
        <img src="./slides/2.jpg" className="d-block w-100" alt="Slide 2" />
      </div>
      <div className="carousel-item">
        <img src="./slides/3.jpg" className="d-block w-100" alt="Slide 3" />
      </div>
      <div className="carousel-item">
        <img src="./slides/4.jpg" className="d-block w-100" alt="Slide 4" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  

  );
};

export default CarouselComponent;
