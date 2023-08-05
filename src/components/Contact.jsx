import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import contactImage from '../assets/img/contact-img.svg'

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email:'',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        }) 
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending...")
        let response = await fetch("http://*****:******/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Send");
        let result = await response.json()
        setFormDetails(formInitialDetails)
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully'})
        } 
        else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.'})
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center" md={6}>
                        <img src={contactImage} alt="Contact Us" />
                    </Col>
                    <Col>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row className="d-flex justify-content-center">
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Addres" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="flex-grow-1 px-1">
                                    <textarea rows={6} value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                    {
                                        status.message && 
                                        <Col>
                                            <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                        </Col>
                                    }
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export { Contact }