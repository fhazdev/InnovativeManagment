import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Innovative Bookkeeping</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

// const Header = () => {
//     return (
//         <div>
//             <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
//             <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
//             <link href="css/styles.css" rel="stylesheet" />
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container px-5">
//                 <a className="navbar-brand" href="#!">Start Bootstrap</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                         <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#!">Services</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#!">Schedule</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//         </div>
//     );
// }

export default Header;
