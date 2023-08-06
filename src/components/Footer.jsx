import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <a className="logo" href="#home">
                            <img src='./assets/img/logo.svg' alt="Logo" />
                        </a>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src='./assets/img/nav-icon1.svg' alt="Social icon" /></a>
                            <a href=""><img src='./assets/img/nav-icon2.svg' alt="Social icon" /></a>
                            <a href=""><img src='./assets/img/nav-icon3.svg' alt="Social icon" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export { Footer }