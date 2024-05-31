import "./Services.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="container d-grid mt-5 gap-5 flex-grow-1">
            <div className="bg-grey d-flex col-12 col-lg-8 flex-lg-row flex-column p-1 rounded" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="col-4">
                    imagen
                </div>
                <div className="d-flex flex-column text-start col-12 col-lg-8 px-3">
                    <h3>Analisis clínicos</h3>
                    <p className="lead">Diagnósticos Precisos para tu Mascota</p>
                    <p>Sabemos que la salud de tu mascota es lo más importante. Por eso, ofrecemos análisis clínicos completos para detectar cualquier problema a tiempo. Desde análisis de sangre hasta pruebas específicas, estamos aquí para asegurarnos de que tu amigo de cuatro patas reciba el mejor cuidado posible.</p>
                </div>
            </div>
            <div className="bg-grey d-flex col-12 col-lg-8 offset-lg-4 flex-lg-row flex-column rounded" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="100">
                <div className="d-flex flex-column text-start col-12 col-lg-8 px-3">
                    <h3>Cirugias</h3>
                    <p className="lead">Expertos en Cuidado Quirúrgico</p>
                    <p>Entendemos lo preocupante que puede ser una cirugía. Nuestro equipo de veterinarios experimentados se encarga de cada procedimiento con el máximo cuidado y profesionalismo. Tu mascota estará en las mejores manos, y te mantendremos informado en cada paso del camino.</p>
                </div>
                <div className="col-4">
                    imagen
                </div>
            </div>
            <div className="bg-grey d-flex col-12 col-lg-8 flex-lg-row flex-column rounded" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="200">
                <div className="col-4">
                    imagen
                </div>
                <div className="d-flex flex-column text-start col-12 col-lg-8 px-3">
                    <h3>Chipeado de Mascotas</h3>
                    <p className="lead">Seguridad y Tranquilidad</p>
                    <p>El chipeado es una forma segura y sencilla de asegurarte de que tu mascota siempre pueda ser identificada. Con un microchip del tamaño de un grano de arroz, podemos ayudar a que tu mascota vuelva a casa si alguna vez se pierde. ¡Un pequeño chip para una gran tranquilidad!</p>
                </div>
            </div>
            <div className="bg-grey d-flex col-12 col-lg-8 offset-lg-4 flex-lg-row flex-column p-1 rounded" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="d-flex flex-column text-start col-12 col-lg-8 px-3">
                    <h3>Ecografías</h3>
                    <p className="lead">Mirando Dentro para una Mejor Atención</p>
                    <p>Las ecografías nos permiten ver lo que sucede dentro del cuerpo de tu mascota sin necesidad de procedimientos invasivos. Ya sea para un chequeo de rutina o para diagnosticar un problema específico, nuestras ecografías son rápidas, indoloras y muy efectivas.</p>
                </div>
                <div className="col-4">
                    imagen
                </div>
            </div>
            <div className="bg-grey d-flex col-12 col-lg-8 flex-lg-row flex-column rounded" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="col-4">
                    imagen
                </div>
                <div className="d-flex flex-column text-start col-12 col-lg-8 px-3">
                    <h3>Internación</h3>
                    <p className="lead">Cuidado Continuo para tu Mascota</p>
                    <p>Si tu mascota necesita quedarse con nosotros por un tiempo, ofrecemos un servicio de internación cómodo y seguro. Nuestro equipo se encargará de que tu amigo reciba todo el cuidado y cariño que necesita, ¡como si estuviera en casa!</p>
                </div>
            </div>
            <div className="bg-grey d-flex col-12 col-lg-8 offset-lg-4 flex-lg-row flex-column rounded" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="d-flex flex-column text-start col-12 col-lg-8 px-3">
                    <h3>Radiografías</h3>
                    <p className="lead">Diagnósticos Rápidos y Precisos</p>
                    <p>Cuando tu mascota necesita una radiografía, estamos equipados con la última tecnología para obtener imágenes claras y precisas. Esto nos ayuda a diagnosticar y tratar cualquier problema de manera rápida y efectiva. Tu mascota estará cómoda y segura durante todo el proceso.</p>
                </div>
                <div className="col-4">
                    imagen
                </div>
            </div>
            <hr />
            <div className="text-light d-flex flex-column gap-3">
                <h3>¿Dudas o consultas?</h3>
                <h5>Envianos un mensaje y te respondemos lo antes posible.</h5>
                <div className="d-flex flex-row justify-content-center gap-lg-5 gap-3">
                    <a href="https://wa.me/5492664392132" target="window" className="text-decoration-none text-light">
                        <div className="d-flex flex-row mb-3 align-items-center" >
                            <img
                                alt="Veterinaria del Parque"
                                src="/images/whatsapp.svg"
                                width="40"
                                height="40"
                                className="d-inline-block text-light"
                            />
                            <p className="m-0">266-4331778</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/vet_del_parque/" target="window" className="text-decoration-none text-light">
                        <div className="d-flex flex-row align-items-center">
                            <img
                                alt="Veterinaria del Parque"
                                src="/images/instagram.svg"
                                width="40"
                                height="40"
                                className="d-inline-block text-light m-0 p-0"
                            />
                            <p className="m-0">Veterinaria del Parque</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Services