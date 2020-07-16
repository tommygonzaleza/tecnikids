import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';
import tomi from '../../../img/aliados/logo-tomi.png';
import { Button } from 'react-bootstrap';

export const TomiView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-2 my-footer-logo">TOMI</h2>
                    <div className="row">
                        <p className="col-12 col-md-6 justify-text my-5">
                            Es una herramienta para planear o presentar clases, solo necesitas conectarlo 
                            a un tv, pantalla o proyector y decidir cómo manejarlo: lápiz óptico, teclado 
                            y mouse físicos o desde tu dispositivo móvil.
                            <br />
                            <br />
                            Navega sin internet en el aula de clase, habilitando la red wifi de TOMi para 
                            que tus estudiantes accedan e interactúen con los contenidos desde sus 
                            dispositivos móviles.
                            <br />
                            <br />
                            Promueve y califica pruebas en segundos, solo requieres pasar los formatos de 
                            calificación por la cámara de TOMi y éste te entregará un informe de resultados 
                            instantáneo.
                        </p>
                        <div className="col-1"></div>
                        <div className="col-md-5">
                            <img src={tomi} className="col-10 p-center" />
                            <Button className="col-10 col-md-5 mt-3 p-center" variant="primary" href="https://tomi.digital/es">MÁS INFORMACIÓN</Button>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}