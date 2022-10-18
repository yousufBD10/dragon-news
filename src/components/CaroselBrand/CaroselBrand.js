import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../assets/image/Brand1.jpg'
import Brand2 from '../../assets/image/Brand2.jpg'
import Brand3 from '../../assets/image/Brand3.jpg'

function CarouselBrand() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand1}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBrand;