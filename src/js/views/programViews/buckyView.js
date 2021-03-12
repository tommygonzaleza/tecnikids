import React from 'react';
import '../../../styles/index.css';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';

export const BuckyView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row mx-2 mt-2 mt-md-5">
                    <p className="col-11 col-md-6 justify-text">
                        La nueva versión de <span className="f-weigth-600">Bucky</span>, el 
                        juguete educativo con el que los niños aprenden bases de robótica, 
                        programación y el internet de las cosas (IoT), diseñado para ser 
                        fácil de usar, con poca infraestructura, con una forma mejorada y 
                        más capacidades.
                        <br />
                        <br />
                        Permite el desarrollo de pensamiento computacional y matemático, así 
                        como de habilidades maker y de resolución de problemas de una manera 
                        divertida.
                    </p>
                    <div className="col-12 col-md-6 my-4 center-text">
                        <img className="col-10 col-md-5 mb-3" src="https://i.ibb.co/YDHCrPW/logo-bucky.png" alt="Bucky"/>
                        <a className="col-12 my-5" href="https://www.bucky.com.mx/">
                            <img src="https://i.ibb.co/v4dmnf2/button.png" className="col-9 col-md-7" alt="Button" />
                        </a>
                    </div>
                    <iframe 
                        className="col-11 col-md-6 mx-auto mx-md-0 my-3 my-md-5"
                        style={{height: '350px'}}
                        title="Stem Video"
                        src="https://www.youtube.com/embed/hQk1CoS8qHo" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                    <p className="col-11 col-md-5 ml-0 ml-md-4 my-3 my-md-5 justify-text">
                        <span className="f-weigth-600">Bucky</span> se programa desde una app 
                        con un lenguaje de programación visual. Con él, los niños pueden 
                        combinar sensores y actuadores de <span className="f-weigth-600">Bucky </span> 
                        con los de la tableta o celular, con funciones del Internet de las cosas, 
                        así como con operaciones matemáticas y lógicas.
                    </p>
                    <p className="col-11 col-md-5 ml-0 ml-md-4 mb-5 justify-text">
                        La app se conecta a <span className="f-weigth-600">Bucky</span> vía 
                        Bluetooth (BLE) y a Internet con WiFi, con lo que se puede conectar 
                        a más de 600 servicios web como redes sociales, el pronóstico del clima, 
                        luces inteligentes o asistentes virtuales.
                    </p>
                    <div className="col-11 col-md-6 ml-0 ml-md-5 mb-5 center-text">
                        <img className="col-12 col-md-12" src="https://i.ibb.co/BByx4NP/foto-bucky.jpg" alt="Bucky" />
                    </div>
                </div>
            </div>
            <SeparationLines />
            <MyFooter />
        </div>
    )
}