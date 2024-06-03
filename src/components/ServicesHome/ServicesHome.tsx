import "./ServicesHome.css"
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ServicesHome = () => {

    const navigate = useNavigate()

    return (
        <div className="services-home d-flex flex-column w-100 position-relative">
            <div className="container d-flex flex-column flex-grow-1 h-100 justify-content-lg-center mb-5">
                <h1 className="mb-4 goudy-regular-italic fw-bold fs-1">Servicios</h1>
                <p className="mb-lg-5 mb-0 public-sans mb-5">Tu mascota es parte de nuestra familia. Nos dedicamos a brindar el mejor cuidado y atención para que tu peludo amigo se mantenga feliz y saludable. Descubrí los servicios que ofrecemos para mantener a tu mascota en óptimas condiciones.</p>
                <div className="w-100 h-sm-75 h-lg-50 d-flex flex-lg-row flex-column">
                    <div className="w-sm-100 w-lg-50 h-sm-50 d-flex align-items-center justify-content-center mb-5">
                        <Image roundedCircle className="w-sm-75 w-lg-50" src="/images/serviceshome.webp" alt="" />
                    </div>
                    <div className="d-flex w-lg-50 flex-column justify-content-center gap-3 gap-lg-5 mb-5">
                        <Row>
                            <Col xs="4">
                                <h6 className="public-sans">Análisis</h6>
                                <h6 className="public-sans">clínicos</h6>
                                <svg width="50" height="50" viewBox="0 0 50 50" style={{ color: "#63316b" }} xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="50" height="50" x="0" y="0" rx="30" fill="transparent" stroke="transparent" strokeWidth="0" strokeOpacity="100%" paintOrder="stroke"></rect><svg width="50px" height="50px" viewBox="0 0 48 48" fill="#000000" x="0" y="0" role="img" style={{ display: "inline-block;vertical-align:middle" }} xmlns="http://www.w3.org/2000/svg"><g fill="#000000"><path fill="currentColor" fillRule="evenodd" d="M19 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v2.273a1.5 1.5 0 0 0-1 1.415V39a5 5 0 0 0 10 0V12.687a1.5 1.5 0 0 0-1-1.414V9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H19Zm3 7.688V9h4v2.688a1.5 1.5 0 0 0 1 1.414V18h-6v-4.898a1.5 1.5 0 0 0 1-1.415Z" clipRule="evenodd" /></g></svg></svg>
                            </Col>
                            <Col xs="4" className="d-flex flex-column justify-content-between align-items-center">
                                <h6 className="public-sans">Cirugías</h6>
                                <svg height="50" width="50" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><style type="text/css">{`.st0{fill:#63316b;}`}</style><g><path className="st0" d="M336.967,27.909C336.967,12.484,324.484,0,309.058,0H202.941c-15.416,0-27.918,12.484-27.918,27.909v70.559
                                h161.944V27.909z"/><path className="st0" d="M256.004,227.144c47.1,0,85.93-35.106,91.928-80.527h-28.322l27.336-36.439l-7.872-5.909l-31.77,42.348 h-102.59l-31.76-42.348l-7.882,5.909l27.332,36.439h-28.326C170.065,192.038,208.902,227.144,256.004,227.144z" />
                                    <path className="st0" d="M150.313,355.626V207.179c0-5.038-4.096-9.125-9.126-9.125c-5.038,0-9.116,4.087-9.116,9.125v45.058
        c-1.84-0.453-3.812-0.88-5.882-1.306v-56.653c0-5.038-4.096-9.116-9.116-9.116c-5.039,0-9.126,4.078-9.126,9.116v52.859
        c-1.964-0.427-3.927-0.836-5.873-1.218V190.99c0-5.02-4.087-9.116-9.108-9.116c-5.055,0-9.125,4.096-9.125,9.116v52.708
        c-2.07,0-3.998,0.177-5.873,0.479v-36.812c0-5.029-4.096-9.108-9.125-9.108c-5.038,0-9.117,4.079-9.117,9.108
        c0,0-0.062,63.37-0.035,64.774c-1.048,8.814-16.926-9.019-30.85-12.804c-14.74-4.024-18.473,9.988-4.016,21.441
        c24.426,19.379,35.123,42.525,35.123,58.608v16.242H150.313z"/>
                                    <path className="st0" d="M483.166,259.336c-13.905,3.785-29.811,21.618-30.85,12.804c0.026-1.404-0.027-64.774-0.027-64.774
        c0-5.029-4.087-9.108-9.125-9.108c-5.029,0-9.108,4.079-9.108,9.108v36.812c-1.874-0.302-3.839-0.479-5.89-0.479V190.99
        c0-5.02-4.07-9.116-9.108-9.116c-5.038,0-9.117,4.096-9.117,9.116v54.929c-1.954,0.382-3.901,0.791-5.882,1.218v-52.859
        c0-5.038-4.095-9.116-9.116-9.116c-5.047,0-9.125,4.078-9.125,9.116v56.653c-2.071,0.427-4.052,0.853-5.882,1.306v-45.058
        c0-5.038-4.079-9.125-9.116-9.125c-5.038,0-9.108,4.087-9.108,9.125v148.447h90.346v-16.242c0-16.083,10.716-39.228,35.124-58.608
        C501.621,269.324,497.907,255.312,483.166,259.336z"/>
                                    <path className="st0" d="M361.73,386.326h-13.098V281.7c0-4.842-6.548-10.609-11.39-10.609H311.83l-55.826,55.818l-55.827-55.818
        h-25.412c-4.674,0-11.391,5.767-11.391,10.609v104.626h-13.096V366.52H60.002l0.471,41.628v50.522
        c0,13.248,11.39,29.793,23.084,35.861c11.692,6.247,37.256,13.266,66.418-11.373V512h212.057v-28.842
        c29.162,24.64,54.725,17.62,66.427,11.373c11.693-6.068,23.084-22.613,23.084-35.861v-50.522l0.472-41.628H361.73V386.326z"/>
                                </g>
                                </svg>
                            </Col>
                            <Col>
                                <h6 className="public-sans">Chipeado</h6>
                                <h6 className="public-sans">de mascotas</h6>
                                <svg width="50" height="50" viewBox="0 0 512 512" style={{ color: "#63316b" }} xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" strokeWidth="0" strokeOpacity="100%" paintOrder="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 32 32" fill="#63316b" x="0" y="0" role="img" style={{ display: "inline-block;vertical-align:middle" }} xmlns="http://www.w3.org/2000/svg"><g fill="#63316b"><path fill="currentColor" d="M21 9H8a2.002 2.002 0 0 0-2 2v10a2.002 2.002 0 0 0 2 2h13a2.002 2.002 0 0 0 2-2V11a2.002 2.002 0 0 0-2-2Zm0 4h-3v-2h3Zm-3 2h3v2h-3Zm-2-4v10h-3v-7a1 1 0 0 0-1-1H8v-2Zm-5 6H8v-2h3Zm-3 2h3v2H8Zm10 2v-2h3v2Z" /><path fill="currentColor" d="M23.532 27H4a2.002 2.002 0 0 1-2-2V7a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v12.638a2.004 2.004 0 0 1-.464 1.28l-4.468 5.362a1.994 1.994 0 0 1-1.536.72ZM4 7v18h19.532L28 19.638V7Z" /></g></svg></svg>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} >
                                <h6 className="public-sans">Ecografías</h6>
                                <svg width="50" height="50" viewBox="0 0 512 512" style={{ color: "#63316b" }} xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" strokeWidth="0" strokeOpacity="100%" paintOrder="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 32 32" fill="#63316b" x="0" y="0" role="img" style={{ display: "inline-block;vertical-align:middle" }} xmlns="http://www.w3.org/2000/svg"><g fill="#63316b"><path fill="currentColor" d="M5 6v13.563l-2.281 2.314A2.444 2.444 0 0 0 2 23.594A2.418 2.418 0 0 0 4.406 26h23.188A2.418 2.418 0 0 0 30 23.594a2.45 2.45 0 0 0-.719-1.719L27 19.562V6H5zm2 2h18v11H7V8zm8 2v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2zM6.437 21h19.125l2.313 2.281a.464.464 0 0 1 .125.313a.386.386 0 0 1-.406.406H4.406A.386.386 0 0 1 4 23.594c0-.11.047-.234.125-.313L6.438 21z" /></g></svg></svg>
                            </Col>
                            <Col xs={4} >
                                <h6 className="public-sans">Internación</h6>
                                <svg width="50" height="50" viewBox="0 0 512 512" style={{ color: "#63316b" }} xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" strokeWidth="0" strokeOpacity="100%" paintOrder="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 50 50" fill="#63316b" x="0" y="0" role="img" style={{ display: "inline-block;vertical-align:middle" }} xmlns="http://www.w3.org/2000/svg"><g fill="#63316b"><path fill="currentColor" d="M18.48 18.875c2.33-.396 4.058-2.518 4.321-5.053c.267-2.578.869-12.938-3.02-12.279c-10.088 1.711-9.38 18.702-1.301 17.332zm13.273 0c8.077 1.37 8.785-15.621-1.303-17.333c-3.888-.659-3.287 9.701-3.021 12.279c.264 2.536 1.994 4.658 4.324 5.054zM14.336 26.88c0-1.348-.481-2.57-1.256-3.459c-1.275-1.666-5.328-5.035-6.323-4.172c-2.077 1.806-2.01 6.251-.759 9.481c.643 1.796 2.196 3.059 4.011 3.059c2.389 0 4.327-2.198 4.327-4.909zm29.137-7.631c-.993-.863-5.046 2.506-6.321 4.172c-.775.889-1.257 2.111-1.257 3.459c0 2.711 1.94 4.909 4.327 4.909c1.816 0 3.37-1.263 4.013-3.059c1.248-3.23 1.317-7.675-.762-9.481zm-8.136 15.277c-3.676-1.833-3.562-5.363-4.398-8.584c-.665-2.569-3.02-4.469-5.823-4.469a6.007 6.007 0 0 0-5.779 4.312c-.895 3.082-.356 6.67-4.363 8.717c-3.255 1.061-4.573 2.609-4.573 6.27c0 2.974 2.553 6.158 5.848 6.554c3.676.554 6.544-.17 8.867-1.494c2.323 1.324 5.189 2.047 8.871 1.494c3.293-.396 5.847-3.568 5.847-6.554c-.001-3.741-1.235-5.135-4.497-6.246zM31 39h-3.811l.005 4h-4.156l.006-4H19v-4h4.045l-.006-4h4.156l-.005 4H31v4z" /></g></svg></svg>
                            </Col>
                            <Col xs={4} >
                                <h6 className="public-sans">Radiografías</h6>
                                <svg width="50" height="50" viewBox="0 0 512 512" style={{ color: "#63316b" }} xmlns="http://www.w3.org/2000/svg" className="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" strokeWidth="0" strokeOpacity="100%" paintOrder="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 24 24" fill="#63316b" x="0" y="0" role="img" style={{ display: "inline-block;vertical-align:middle" }} xmlns="http://www.w3.org/2000/svg"><g fill="#63316b"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M13.29 5.79c.148.536.172 1.185-.221 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562m4.274-18.524A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848c-.536-.149-1.185-.173-1.579.22l-5.7 5.7c-.393.394-.369 1.043-.22 1.58" /><path d="M10.232 10.232v2.122l2.122-.707v1.414L15 12.5" /></g></g></svg></svg>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="d-flex w-lg-50 align-self-lg-end justify-content-center">
                    <a href="/servicios">
                        <button className="custom-btn bg-custom p-2 ps-3 pe-3">Conocer más</button>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default ServicesHome