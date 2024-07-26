{/* <img className="img-responsive" src="./src/images/trend-6551546_640.png" /> */ }
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/contact');
    };

    const handleLearnMore = () => {
        navigate('/services');
    };

    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center my-5">
                                <h1 className="display-5 fw-bolder text-white mb-2">Begin your journey to Financial Freedom</h1>
                                <p className="lead text-white-50 mb-4">Your trusted partner for small business bookkeeping solutions.</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                    {/* <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                    <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a> */}
                                    <Button className="px-4 me-sm-3" variant="primary" size="lg" onClick={handleGetStarted}>Get Started</Button>
                                    <Button className="px-4" variant="secondary" size="lg" onClick={handleLearnMore}>Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
