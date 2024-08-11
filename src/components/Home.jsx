import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '/src/assets/styles.css';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/contact');
    };

    const handleLearnMore = () => {
        navigate('/services');
    };

    return (
        <>
        <Container fluid className="bg-dark py-5 home-background d-flex align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="justify-content-center w-100">
                <Col lg={6}>
                    <Container className="text-center my-5">
                        {/* <h2 className="lead text-white-50 mb-5">
                            Your trusted partner for small business bookkeeping solutions.
                        </h2> */}
                        <Row className="justify-content-center home-button-row">
                            <Col xs="auto">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="px-4 me-sm-3"
                                    onClick={handleGetStarted}
                                >
                                    Get Started
                                </Button>
                            </Col>
                            <Col xs="auto">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="px-4"
                                    onClick={handleLearnMore}
                                >
                                    Learn More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Home;
