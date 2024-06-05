import "./About.css"

const About = () => {

    return (
        <div className="container text-light">
            <div className="d-flex flex-column flex-lg-row justify-content-between gap-1">
                <div className="bg-grey rounded p-3 text-dark d-flex flex-column justify-content-center">
                    <h2 className="goudy-regular-italic fw-bold fs-1">Veterina del Parque</h2>
                    <h3 className="fs-6 mt-3">¡Somos un equipo médico dedicado a dar lo mejor para el bienestar de tu mascota!</h3>
                </div>
                <img className="w-lg-50 w-sm-100 rounded" src="/images/nosotros.webp" alt="" />
            </div>
            <div className="d-none d-lg-flex flex-row mt-1 gap-1">
                <img className="w-25 rounded" src="/images/nosotros2.webp" alt="" />
                <div className="container w-50 p-5 d-flex flex-column justify-content-center text-center bg-grey rounded text-dark">
                    <h3>¡La mejor atención!</h3>
                    <p>En cada visita nos esforzamos por brindar la mejor atención y asesoramiento para que vuelvas a tu casa con la tranquilidad que tu mascota esta sana y bajo el cuidado de profesionales que se dedican a asegurar su bienestar.</p>
                </div>
                <div className="w-25 d-flex flex-row flex-lg-column justify-content-between gap-1">
                    <img className="w-100 rounded" src="/images/nosotros3.webp" alt="" />
                    <img className="w-100 rounded" src="/images/nosotros4.webp" alt="" />
                </div>
            </div>
            <div className="d-flex d-lg-none flex-column mt-1 gap-1">
                <div className="d-flex flex-row w-100 gap-1">
                    <div className="w-50">
                        <img className="w-100 rounded" src="/images/nosotros2.webp" alt="" />
                    </div>
                    <div className="container w-50 p-0 p-lg-5 d-flex flex-column justify-content-center text-center bg-grey rounded text-dark">
                        <h3 className="fs-5">¡La mejor atención!</h3>
                        <p>En cada visita nos esforzamos por brindar la mejor atención para que vuelvas a tu casa con la tranquilidad que tu mascota esta sana y bajo el cuidado de los mejores profesionales.</p>
                    </div>
                </div>
                <div className="w-100 d-flex flex-row flex-lg-column gap-1">
                    <div className="w-50">
                        <img className="w-100 rounded" src="/images/nosotros3.webp" alt="" />
                    </div>
                    <div className="w-50">
                        <img className="w-100 rounded" src="/images/nosotros4.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row mt-1 text-dark w-100 gap-1">
                <div className="w-sm-100 w-lg-50 d-flex flex-column justify-content-center bg-grey rounded">
                    <h3>¡Dale un gustito, se lo merece!</h3>
                    <p>Veni y conocé todos los accesorios que tenemos para tu amigo de cuatro patas. Chalecos, collares, correas, y si querés mimarlo un poco de más ¡tambien tenemos juguetes y golosinas!</p>
                </div>
                <div className="w-sm-100 w-lg-50 d-flex flex-row gap-1">
                    <div className="w-50">
                        <img className="w-100 rounded" src="/images/nosotros5.webp" alt="" />
                    </div>
                    <div className="w-50 d-flex flex-row">
                        <img className="w-100 rounded" src="/images/nosotros6.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row gap-1 text-dark mt-1 mb-5">
                <div className="w-lg-75 w-sm-100 ">
                    <img className="w-100 rounded" src="/images/nosotros7.webp" alt="" />
                </div>
                <div className="w-lg-25 w-sm-100 bg-grey rounded d-flex justify-content-center align-items-center text-center">
                    <p className="goudy-regular-italic fw-bold m-2">"La medicina cura al ser humano, la veterinaria cura a la humanidad"</p>
                </div>
            </div>
        </div>
    )
}

export default About