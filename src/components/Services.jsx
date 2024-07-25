const Services = () => {
    return (
        <div className="container mt-5">
            <h1>Our Services</h1>
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
        </div>
    );
};

export default Services;