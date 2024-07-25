import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '/src/assets/styles.css';
// ./src/images/icons8-email-64.png

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
            <div className="container mt-5">
                <h1>Have questions?  Send a message.</h1>
                <div className="row mt-4">
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
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;