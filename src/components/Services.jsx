import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '/src/assets/styles.css';

const Services = () => {
    return (
        <>
            <header className="bg-dark py-5">
                <h1 className="text-center text-white">Services</h1>
            </header>
            <Container className="mt-5">
                <Row>
                    <Col>
                    <Card className="px-3 py-3 services-card" border="dark">
                        <Card.Body>
                            <Card.Title className="pb-3 text-center">Bookkeeping</Card.Title>
                            <Card.Text>Keeping accurate financial records for your business. These include: your sales, purchases, receipts, dues & subscriptions, invoices, etc. Every piece of vital information will be properly filed within the software system.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="px-3 py-3 services-card" border="dark">
                        <Card.Body>
                            <Card.Title className="pb-3 text-center">Financial Review</Card.Title>
                            <Card.Text>This is an in-depth analysis of your finances as they are in your bookkeeping software. Our goal here is to catch any major problems, and speak with you about how to better keep your finances in order.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="px-3 py-3 services-card" border="dark">
                        <Card.Body>
                            <Card.Title className="pb-3 text-center">Growth Plan</Card.Title>
                            <Card.Text>This is a calculated business activity that allows business owners to plan and track organic growth in their revenue. It lets businesses assign their limited funds toward a centered effort to acclimate to the fluctuations in the industry driven by digital disruption and differentiate from competitors.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            {/* <div className="container mt-5">
                <div className="row mt-4">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bookkeeping</h5>
                                <p className="card-text">Accurate and timely recording of financial transactions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Financial Reporting</h5>
                                <p className="card-text">Comprehensive financial statements and analysis</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Tax Preparation</h5>
                                <p className="card-text">Expert assistance with tax filing and compliance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Services;