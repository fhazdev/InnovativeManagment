import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '/src/assets/styles.css';
import { Button } from 'react-bootstrap';

const ScheduleNow = () => {
    const handleCalendarClick = () => {
        window.open('https://calendly.com/fjhshadow/initial-consulation', '_blank', 'noopener,noreferrer');
    };

    return (
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
    );
};

export default ScheduleNow;