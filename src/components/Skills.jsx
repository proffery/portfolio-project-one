import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }

    return (
        <section className='skill' id='skills'>
           <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Egestas tellus rutrum tellus pellentesque eu tincidunt. Semper quis lectus nulla at volutpat. Egestas erat imperdiet sed euismod nisi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Magna fermentum iaculis eu non diam phasellus vestibulum. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Vel turpis nunc eget lorem dolor. Fermentum odio eu feugiat pretium nibh ipsum consequat.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src='./assets/img/meter1.svg' alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src='./assets/img/meter2.svg' alt="Image" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className='item'>
                                    <img src='./assets/img/meter3.svg' alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container> 
            <img className='background-image-left' src='./assets/img/color-sharp.png'/>
        </section>
    )
}

export { Skills }