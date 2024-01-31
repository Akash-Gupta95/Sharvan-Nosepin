import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "./Banner1.png";
import Banner2 from "./Banner_3.png";
import Banner3 from "./Banner2.png";


const ProjectCarousel = () => {
    return (
        <div>
            <Carousel className="carsoulDiv">
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src={Banner3} alt="First slide" />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src={Banner1} alt="Second slide" />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src={Banner2} alt="Third slide" />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );

}

export default ProjectCarousel