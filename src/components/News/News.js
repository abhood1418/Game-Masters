import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './News.css';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carocaro">
      <Carousel.Item>
        <img
          className="caro-img"
          src="https://www.belloflostsouls.net/wp-content/uploads/2021/10/crit-role-3-header-image.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>The Adventure Begins!</h3>
          <p>Check out Critical Role's newest Campaign in Resources!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caro-img"
          src="https://media.dnd.wizards.com/styles/story_banner/public/images/head-banner/pa0sjX8Wgx.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>A New Sourcebook has Arrived</h3>
          <p>Tasha's Cauldron of Everything is Out Now!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caro-img"
          src="https://ksr-ugc.imgix.net/assets/024/302/595/481b1ad53bfab112f7d3b4a402a724f7_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1551795500&auto=format&frame=1&q=92&s=a093270d404549d2d96b7ab03662039a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Looking for a New Style Campaign?</h3>
          <p>
            Check out Humblewood's 5e Compatible Sourcebook!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;