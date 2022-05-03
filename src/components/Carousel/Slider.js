import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'


export default function Slider() {
    return (
        <Carousel className='carousel' variant="light">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/airmax.png"
                    alt="Nike Airmax 95"
                />
                <Carousel.Caption>
                    <h5>Nike Air Max 95</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/salomon.png"
                    alt="Salomon Raid Wind Advance"
                />
                <Carousel.Caption>
                    <h5>Salomon Raid Wind Advance</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/newbalanceblue.png"
                    alt="New Balance 550"
                />
                <Carousel.Caption>
                    <h5>New Balance 550</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/nikeAF1.png"
                    alt="Nike AF1"
                />
                <Carousel.Caption>
                    <h5>Nike AF1</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/newbalance.png"
                    alt="New Balance M5740LLG"
                />
                <Carousel.Caption>
                    <h5>New Balance M5740LLG</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}