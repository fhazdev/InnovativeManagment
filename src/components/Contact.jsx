import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '/src/assets/styles.css';
import { Button } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [result, setResult] = React.useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCalendarClick = () => {
        window.open('https://calendly.com/fjhshadow/initial-consulation', '_blank', 'noopener,noreferrer');
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "96d40485-8d2a-49dd-a5c1-83821c2cf518");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
    };

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
                                    src="./src/images/email-8-svgrepo-com.svg"
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
                                    src="./src/images/phone-call-svgrepo-com.svg"
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
            <Container>
                <Row>
                    <Card className="mt-5 schedule-now-card">
                        <Card.Body>
                            <Card.Title className="text-center pb-2"><h2>Schedule Now</h2></Card.Title>
                            <Card.Text>
                                <div>Let’s get started so you can get back to doing what you love and stop worrying about your books. Request your consultation by setting up an appointment with the button below. You’ll receive a confirmation as well as a follow-up email from me within 24 hours (please be sure to check your spam folder).</div>
                                <div className="py-4 text-center">
                                    <Button variant="primary" size="lg" onClick={handleCalendarClick}>Calendar</Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Container className="mt-5">
                <h2 className="text-center">Have questions? Send a message.</h2>
                <Row className="mt-4 justify-content-center">
                    <Col md={6}>
                        <Card className="send-message-card">
                            <Card.Body>
                                <Form onSubmit={onSubmit}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                    <div className="d-flex justify-content-center">
                                        <Button variant="primary" size="lg" type="submit">
                                            Send Message
                                        </Button>
                                    </div>
                                    {result && <p className="mt-3 text-center">{result}</p>}
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* <div className="container mt-5">
                <h2 className="text-center">Have questions?  Send a message.</h2>
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="5" required></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" size="lg">Send Message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Contact;