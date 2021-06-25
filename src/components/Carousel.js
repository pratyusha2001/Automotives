import React from 'react';
import { Carousel, Container } from 'react-bootstrap'

const CardCarousel = () => {
    return (
         <Container style={{ marginTop: '10px', marginBottom:'10px' }}> 
            <Carousel variant="dark" nextLabel="" prevLabel="">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://desertinsurancesolutions.com/wp-content/uploads/2019/08/Tesla-in-CA-800x400.png?text=First slide&bg=f5f5f5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Tesla</h3>
                        <p>Current bid: $ 5550</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tu-auto.com/files/2019/09/Small-33927-Mercedes-BenzVisionEQS-800x400.jpg?text=First slide&bg=f5f5f5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mercedes</h3>
                        <p>Current bid: $ 6750</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.autoportal.com/img/news/14751/main/496eb8e1d9cb76031644e1369f79903d/thumbnail_cropped.jpg?text=First slide&bg=f5f5f5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>BMW</h3>
                        <p>Current bid: $ 4550</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default CardCarousel;