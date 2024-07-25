import { Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <>
            <header className="bg-dark py-5">
                <h1 className="text-center text-white">About Us</h1>
            </header>
            <Container className="mt-5">
                <Row className="mt-4 align-items-center">
                    <Col sm={4}>
                        <img src="./src/images/business_man.jpg" alt="Rey" className="img-fluid rounded" />
                    </Col>
                    <Col sm={8}>
                        <h2>Meet Rey Figueroa</h2>
                        <div className="pt-4">
                            <p>Rey is the founder and head bookkeeper. He attended Grand Canyon University and has an MBA in Accounting.</p>
                            <p>His mission is to empower small business owners by providing them with clear financial insights and expert guidance, allowing them to focus on what they do best - running their business.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;