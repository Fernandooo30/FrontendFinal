import React from 'react';

function Contactos() {
    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contáctanos</h1>
                    <p>
                        Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.
                    </p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-9 m-auto">
                        <div className="mb-3">
                            <h4>Nuestra Información de Contacto:</h4>
                            <ul>
                                <li>
                                    <strong>Teléfono:</strong> +51 (15) 960-550-857
                                </li>
                                <li>
                                    <strong>Correo Electrónico:</strong> zandia2024@Gmail.com
                                </li>
                                <li>
                                    <strong>Dirección:</strong> Av. Cascanueces - Santa Anita #123, Lima, Perú
                                </li>
                            </ul>
                        </div>
                        <div className="mb-3">
                            <h4>Horario de Atención:</h4>
                            <p>
                                De lunes a viernes, de 9:00 am a 5:00 pm.
                            </p>
                        </div>
                        <div className="mb-3">
                            <h4>¡Estamos Aquí Para Ayudarte!</h4>
                            <p>
                                No dudes en contactarnos si necesitas ayuda o tienes alguna pregunta. Estamos aquí para ayudarte en lo que necesites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactos;
