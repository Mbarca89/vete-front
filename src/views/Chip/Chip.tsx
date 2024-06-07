const Chip = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center gap-5 flex-grow-1 overflow-x-hidden text-light">
            <h1 className="goudy-regular-italic fw-bold fs-1 mt-4">¿Estás planeando tus vacaciones con tu amigo de cuatro patas?</h1>
            <h2 className="fs-5">Te comentamos lo que tenés que saber para un viaje tranquilo y sin sorpresas.</h2>
            <p>si estás pensando en viajar al exterior con tu mascota, deberás tramitar un Certificado Veterinario Internacional (CVI) emitido por Senasa.</p>
            <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row w-100">
                <div className="d-flex flex-column flex-lg-row align-items-center w-lg-25 w-sm-100 h-100">
                    <img className="rounded-circle" style={{ height: "200px", width: "200px" }} src="/images/travel1.webp" alt="" />
                </div>
                <div className="w-lg-50 w-sm-100">
                    <p className="lead">Cada destino es diferente:</p>
                    <p>Para obtener el CVI, tenés que cumplir ciertos requisitos.</p>
                    <p>Los requisitos varían según el país a donde vayas. Para estar seguro de tener todo lo necesario, podés ingresar a <a href="https://mascotas.senasa.gob.ar/index.php/consultar_requisitos" target="window">esta web</a>.</p>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row w-100 mt-3">
                <div className="w-lg-50 w-sm-100">
                    <p className="lead">¡Te ayudamos con lo que necesites!</p>
                    <p>Una vez que conozcas los requisitos de tu lugar de destino, es la hora de hacernos una visita.</p>
                    <p>Nuestro veterinario matriculado puede expedirte estos certificados:</p>
                    <ul className="text-start">
                        <li>Buena salud</li>
                        <li>Vacunación antirrábica</li>
                        <li>Desparasitación</li>
                        <li>Implantación de chip</li>
                    </ul>
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center w-lg-25 w-sm-100 h-100">
                    <img className="rounded-circle" style={{ height: "200px", width: "200px" }} src="/images/travel2.webp" alt="" />
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row w-100">
                <div className="w-lg-50 w-sm-100">
                    <p className="lead">¿Que es la implantación de chip?</p>
                    <p>La implantación consiste en introducir en tu mascota un pequeño chip del tamaño de un grano de arroz, de forma subcutánea, mediante un proceso rápido e indoloro.</p>
                    <p>Este chip le otorga una identificación única  a tu mascota, lo que te permite acreditar que sos su propietario en caso de robo o pérdida.</p>
                    <p>Además, para ingresar a algunos países como Uruguay, Australia, Nueva Zelanda, la Unión Europea, entre otros, es obligatorio contar con este chip.</p>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column w-100 mt-3">
                <div className="d-flex flex-column align-items-center w-lg-50 w-sm-100 h-100">
                    <img className="w-100 rounded" src="/images/travel3.webp" alt="" />
                </div>
                <div className="w-lg-50 w-sm-100">
                    <p className="lead">¡Por nuestra parte está todo listo!</p>
                    <p>Cuando ya tengas los certificados, el último paso es conseguir un turno en Senasa para obtener tu CVI.</p>
                    <p>¡Y a disfrutar!</p>
                    <p>Para evitar malos ratos, te recomendamos informarte lo máximo posible. En este <a href="https://www.argentina.gob.ar/senasa/procedimiento-para-viajar-al-exterior-con-perros-y-gatos" target="window">Link</a> vas a encontrar la información oficial provista por Senasa</p>
                </div>
            </div>
        </div >
    )
}

export default Chip