import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '/src/assets/styles.css';
import ContactForm from './ContactForm';
import ScheduleNow from './ScheduleNow';

const Contact = () => {
    return (
        <>
            <Container className="pt-2">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className="h-100">
                            <div className="d-flex flex-column h-100">
                                <Card.Img
                                    className="contact-card-img align-self-center mt-3"
                                    variant="top"
                                    src="/images/email-8-svgrepo-com.svg"
                                />
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                    <Card.Title>Email</Card.Title>
                                    <Card.Text>Oso_Rey@gmail.com</Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <div className="d-flex flex-column h-100">
                                <Card.Img
                                    className="contact-card-img align-self-center mt-3"
                                    variant="top"
                                    src="/images/phone-call-svgrepo-com.svg"
                                />
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                    <Card.Title>Phone</Card.Title>
                                    <Card.Text>520-555-5555</Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            { <ScheduleNow /> }
            { <ContactForm /> }
        </>
    );
};

export default Contact;