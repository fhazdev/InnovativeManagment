import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '/src/assets/styles.css';

const Services = () => {
    return (
        <>
            <header className="bg-dark py-5">
                <h1 className="text-center text-white">Services</h1>
            </header>
            {/* <Container className="mt-5">
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
            </Container> */}
            <Container className="pt-2">
                <Row className="pb-5 align-items-center">
                    <Col className="d-flex justify-content-center">
                        <Image className="img-fluid mx-auto d-block" src="/images/budgetingPlanningMeeting.png" />
                    </Col>
                    <Col className="d-flex align-self-center">
                        <Card className="w-100 home-card">
                            <Card.Body>
                                <Card.Title className="mb-5 text-center"><h1>Budgeting/Planning</h1></Card.Title>
                                <Card.Text>
                                    <p>I can assist in setting up annual and five-year budgets/plans tailored to your business needs. My detailed reporting and analysis of results keep you informed and proactive in meeting your financial goals.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5 pb-5 align-items-center">
                    <Col className="d-flex align-self-center">
                        <Card className="w-100 home-card">
                            <Card.Body>
                                <Card.Title className="mb-5 text-center"><h1>Financial Management</h1></Card.Title>
                                <Card.Text>
                                    <p>I can align your operations to meet financial targets, providing you with easy-to-read dashboards and reports to monitor your progress. My goal is to ensure your business runs smoothly and efficiently, keeping you on track to achieve your financial objectives.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Image className="img-fluid mx-auto d-block" src="/images/financialMgmt.png" />
                    </Col>
                </Row>
                <Row className="mt-5 align-items-center">
                    <Col className="d-flex justify-content-center">
                        <Image className="img-fluid mx-auto d-block" src="/images/bookkeepingServices.png" />
                    </Col>
                    <Col className="d-flex align-self-center">
                        <Card className="w-100 home-card">
                            <Card.Body>
                                <Card.Title className="mb-5 text-center"><h1>Bookkeeping</h1></Card.Title>
                                <Card.Text>
                                    <p>I can help you set up and manage an accounting system, whether it’s QuickBooks or another platform, ensuring accurate records of revenue, expenses, and assets. I also offer cash flow reporting to keep you informed of your financial position.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5 pb-5 align-items-center">
                    <Col className="d-flex align-self-center">
                        <Card className="w-100 home-card">
                            <Card.Body>
                                <Card.Title className="mb-5 text-center"><h1>Financial Analysis</h1></Card.Title>
                                <Card.Text>
                                    <p>I provide comprehensive financial analysis to support your decision-making process. Whether it’s make-or-buy decisions, return on investment evaluations, cost-benefit analyses, or tax planning, we can set up any type of report or schedule to meet your needs.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Image className="img-fluid mx-auto d-block" src="/images/financialAnalysis.png" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Services;