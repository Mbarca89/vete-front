import "./Footer.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <div className="position-relative d-flex flex-column footer">
            <div className="custom-shape-divider-top-1716235522">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="container w-100 d-flex flex-column flex-grow-1 align-items-center justify-content-end">
                <div className="d-flex w-100 justify-content-center flex-lg-row flex-column mt-5">
                    <Row className="w-100 d-flex justify-content-center">
                        <Col lg={3} sm={12} className="text-start">
                            <h6 className="mt-2 mb-0">Secciones</h6>
                            <hr className="mt-0" />
                            <ul>
                                <li><a href="/servicios">Servicios</a></li>
                                <li><a href="/productos">Productos</a></li>
                                <li><a href="/nosotros">Nosotros</a></li>
                                <hr className="opacity-0" />
                            </ul>
                        </Col>
                        <Col lg={5} sm={12} className="text-start text-lg-center mt-5 mt-lg-2">
                            <div className="position-relative">
                                <img className="w-50 position-absolute start-0 bottom-0" src="/images/cat2.png" alt="" />
                                <h6 className="text-end mb-0">Horarios de atención</h6>
                            </div>
                            <hr className="mt-0" />
                            <p className="lead mb-0">Lunes a Viernes</p>
                            <p className="mt-0">de 10 a 20 Hs</p>
                            <p className="lead mb-0">Sabados</p>
                            <p>de 9 a 13 y de 16 a 20 Hs</p>
                        </Col>
                        <Col lg={3} sm={12} className="text-start">
                            <h6 className="mt-2 mb-0">Contactanos</h6>
                            <hr className="mt-0" />
                            <div>
                                <a href="https://wa.me/5492664392132" target="window" className="text-decoration-none text-dark">
                                    <div className="d-flex flex-row mb-3 align-items-center" >
                                        <img
                                            alt="Veterinaria del Parque"
                                            src="/images/whatsapp.svg"
                                            width="40"
                                            height="40"
                                            className="d-inline-block text-light me-2"
                                        />
                                        <p className="m-0">+54 9 2664 331778</p>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/vet_del_parque/" target="window" className="text-decoration-none text-dark">
                                    <div className="d-flex flex-row align-items-center">
                                        <img
                                            alt="Veterinaria del Parque"
                                            src="/images/instagram.svg"
                                            width="40"
                                            height="40"
                                            className="d-inline-block text-light me-2"
                                        />
                                        <p className="m-0">Veterinaria del Parque</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr />
                <div className="w-lg-25 w-sm-100 h-25">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.3966766235076!2d-66.31908522355833!3d-33.282283873456656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43eb8e2b13c53%3A0x426e683d243e1f65!2sVeterinaria%20del%20Parque!5e0!3m2!1ses-419!2sar!4v1716296334709!5m2!1ses-419!2sar" width="90%" height="90%" style={{ border: "0" }}></iframe>
                </div>
            </div>
        </div>
    )
}

export default Footer