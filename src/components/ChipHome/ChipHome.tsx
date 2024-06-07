import { useNavigate } from "react-router-dom"
import "./ChipHome.css"

const ChipHome = () => {

    const navigate = useNavigate()

    return (
        <div className="position-relative">
            <div className="chip-home w-100 top p-2 d-flex align-items-start justify-content-center">
                <div className="d-flex justify-content-center align-items-center">
                    <h2 className="goudy-regular-italic fw-bold fs-1 mt-4">¿Viajas con tu mascota?</h2>
                </div>
            </div>
            <div className="bg-transparent w-100">
            </div>
            <div className="chip-home w-100 bot d-flex flex-column justify-content-center align-items-center">
                <h3>¡Los tenemos cubiertos!</h3>
                <p>Contamos con servicio de chipeado de mascotas y te facilitamos todos los trámites para que tu unica preocupación sea planear tus vacaciones.</p>
                <p>¿Queres saber de que se trata?</p>
                <a href="/chipeado">
                    <button type='button' className="custom-btn text-dark public-sans bg-grey fw-bold p-2 ps-3 pe-3">Ingresá aca</button>
                </a>
            </div>
        </div>
    )
}

export default ChipHome