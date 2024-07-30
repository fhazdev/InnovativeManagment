import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '/src/assets/styles.css';
import { Button } from 'react-bootstrap';

const ContactForm = () => {
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
            // <div className="container mt-5">
            //     <h2 className="text-center">Have questions?  Send a message.</h2>
            //     <div className="row mt-4 justify-content-center">
            //         <div className="col-md-6">
            //             <form>
            //                 <div className="mb-3">
            //                     <label htmlFor="name" className="form-label">Name</label>
            //                     <input type="text" className="form-control" id="name" required />
            //                 </div>
            //                 <div className="mb-3">
            //                     <label htmlFor="email" className="form-label">Email</label>
            //                     <input type="email" className="form-control" id="email" required />
            //                 </div>
            //                 <div className="mb-3">
            //                     <label htmlFor="message" className="form-label">Message</label>
            //                     <textarea className="form-control" id="message" rows="5" required></textarea>
            //                 </div>
            //                 <div className="d-flex justify-content-center">
            //                     <Button variant="primary" size="lg">Send Message</Button>
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </div>
    );
};

export default ContactForm;