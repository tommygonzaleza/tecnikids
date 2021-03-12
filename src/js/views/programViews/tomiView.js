import React from 'react';
import '../../../styles/index.css';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';

export const TomiView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row mx-2 mt-2 mt-md-5">
                    <p className="col-11 col-md-6 mb-md-3 mb-0 justify-text">
                        <span className="f-weigth-600">TOMi</span> es una herramienta para planear o presentar clases, solo necesitas conectarlo 
                        a un tv, pantalla o proyector y decidir cómo manejarlo: lápiz óptico, teclado 
                        y mouse físicos o desde tu dispositivo móvil.
                        <br />
                        <br />
                        Promueve y califica pruebas en segundos, solo requieres pasar los formatos de 
                        calificación por la cámara de TOMi y éste te entregará un informe de resultados 
                        instantáneo.
                    </p>
                    <div className="col-11 col-md-6 center-text">
                        <img src="https://i.ibb.co/GkbcL1r/logo-tomi.png" className="col-12 col-md-7 mb-3" alt="Tomi" />
                    </div>
                </div>
                <div className="row mx-2 mt-2 mt-md-5">
                    <iframe 
                        className="col-11 col-md-6 mb-3 mb-md-0"
                        style={{height: '300px'}}
                        title="TOMi Video"
                        src="https://www.youtube.com/embed/URGz-HboxyU" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                    <p className="col-11 col-md-5 mb-md-3 mb-0 ml-0 ml-md-5 justify-text">
                        Navega sin internet en el aula de clase, habilitando la red wifi de TOMi para 
                        que tus estudiantes accedan e interactúen con los contenidos desde sus 
                        dispositivos móviles.
                    </p>
                </div>
                <a className="col-11" href="https://tomi.digital/es">
                    <img src="https://i.ibb.co/v4dmnf2/button.png" className="col-9 col-md-3 my-2 my-md-5 p-center" alt="Button" />
                </a>
            </div>
            <SeparationLines />
            <MyFooter />
        </div>
    )
}