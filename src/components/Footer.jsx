import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../../src/assets/img/nav-icon1.svg'
import navIcon2 from '../../src/assets/img/nav-icon2.svg'
import navIcon3 from '../../src/assets/img/nav-icon3.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <a className="logo" href="#home">
                            <img src={logo} alt="Logo" />
                        </a>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} alt="Social icon" /></a>
                            <a href=""><img src={navIcon2} alt="Social icon" /></a>
                            <a href=""><img src={navIcon3} alt="Social icon" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export { Footer }