import React from "react";
import "../../styles/index.css";
import { SeparationLines } from "../components/SeparationLines";
import { Stadistics } from "../components/Stadistics";
import { Somos } from "../components/Somos";

export const CompanyView = () => {
  return (
    <div className="">
      <SeparationLines />
      <div className="container">
        <div className="row">
          <p className="col-11 col-md-6 ml-md-0 ml-4 mt-0 mt-md-4 justify-text">
            Somos una empresa guatemalteca que inició el sueño de integrar
            educación y tecnología en 1995. Hoy en día en 5 países, entre ellos,
            Guatemala, Honduras, El Salvador, Costa Rica y en Venezuela.
            <br />
            <br />
            Innovamos constantemente en el desarrollo e implementación de
            programas de integración curricular en el área de informática,
            robótica pedagógica y valores para instituciones educativas.
            <br />
            <br />
            Todos nuestros servicios cuentan con el aval de instituciones
            internacionales de renombre, personal calificado y equipo de
            vanguardia.
          </p>
          {/* <div className="col-md-1"></div> */}
          <iframe
            className="col-10 col-md-6 mx-auto mr-5 mr-md-0 mb-3 mb-md-0 mt-0 mt-md-4"
            style={{ height: "400px" }}
            title="Stem Video"
            src="https://www.youtube.com/embed/Zdhq4n2LI4c"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* <img className="col-10 col-md-4 mt-0 ml-md-0 ml-5 company-logo" src="https://i.ibb.co/zZRyrPd/teamtk.jpg" alt="Team Tecnikids Venezuela" /> */}
        </div>
      </div>
      <SeparationLines />
      <div className="container my-5">
        <div className="row col-12">
          <br />
          <Somos />
        </div>
      </div>
      <SeparationLines />
      <Stadistics />
      <SeparationLines />
      <div className="container-fluid my-3">
        <div className="row mx-0 mb-5">
          <div className="col p-0 d-flex justify-content-center">
            <img
              src="https://i.ibb.co/hDgV8JM/Screenshot-2023-05-29-at-10-21-48.png"
              width="75%"
              alt="Equipo TK Grupal"
            />
          </div>
        </div>
        <div className="container">
          <div className="row col-12">
            <h2 className="col-12 ml-md-0 ml-3 mt-3">MISIÓN</h2>
            <p className="col-10 col-md-6 ml-md-0 ml-5 justify-text">
              Brindar soluciones en materia de tecnología educativa a través de
              asesoría y servicio personalizado con talento humano de
              excelencia.
            </p>
          </div>
          <div className="row">
            <div className="col-md-10 col-7"></div>
            <h2 className="col-5 col-md-2">VISIÓN</h2>
            <br />
            <div className="col-md-6"></div>
            <p className="col-10 col-md-6 ml-md-0 ml-5 justify-text">
              Ser la empresa líder que brinde asesorías y soluciones integradas
              de educación y tecnología en Venezuela.
            </p>
          </div>
        </div>
      </div>
      <SeparationLines />
      <div className="container">
        <div className="row mx-2">
          <h2 className="col-12">Programas</h2>
          <div className="row mx-2">
            <div className="col-12 col-md-6">
              <h4 className="col-12 my-2 my-md-4" id="clases_de_informatica">
                Programa de Informática Educativa
              </h4>
              <p className="col-11 justify-text">
                Tecnikids le ofrece a escuelas, colegios y universidades, un
                servicio educativo integral en la enseñanza de la Informática y
                Computación para estudiantes de todos los niveles, desde
                Preescolar hasta Bachillerato, con el uso de las TICS
                (Tecnologías de la Información y las Comunicaciones).
              </p>
            </div>
            <img
              src="https://i.ibb.co/TM1XWK6/program-1.png"
              className="col-12 col-md-6 mx-auto my-auto"
              alt="Programa de Informática Educativa"
            />
          </div>
          <div className="row mx-2 mt-5">
            <img
              src="https://i.ibb.co/P6tvWp0/program-2.jpg"
              className="col-12 col-md-6 mx-auto my-auto"
              alt="Programa de Robótica Educativa"
            />
            <div className="col-12 col-md-6">
              <h4 className="col-12 my-2 my-md-4" id="clases_de_robotica">
                Programa de Robótica Educativa
              </h4>
              <p className="col-11 justify-text">
                Tecnikids le ofrece a escuelas, colegios y universidades, un
                servicio educativo integral en la enseñanza de Robótica para
                estudiantes de todos los niveles, desde Preescolar hasta
                Bachillerato; desarrollando en los estudiantes habilidades y
                competencias claves para su futuro profesional.
              </p>
            </div>
          </div>
          <div className="row mx-2 mt-5">
            <div className="col-12 col-md-6">
              <h4 className="col-12 my-2 my-md-4" id="programa_de_valores">
                Programa de Valores
              </h4>
              <p className="col-11 justify-text">
                Tecnikids le ofrece a escuelas, colegios y universidades, un
                servicio educativo integral en la enseñanza de Valores para
                estudiantes de todos los niveles, desde Preescolar hasta
                Bachillerato, promovemos en la comunidad educativa que el
                estudiante sea protagonista de su propia vida y al mismo tiempo
                pueda desarrollarse integralmente en medio de la sociedad.
              </p>
            </div>
            <img
              src="https://i.ibb.co/zZT23nx/program-3.jpg"
              className="col-12 col-md-6 mx-auto my-auto"
              alt="Programa de Valores"
            />
          </div>
          <div className="row mx-2 my-5">
            <img
              src="https://i.ibb.co/SnfSxPS/program-4.jpg"
              className="col-12 col-md-5 mx-auto my-auto"
              alt="Laboratorios de Computación"
            />
            <div className="col-12 col-md-6">
              <h4 className="col-12 my-2 my-md-4" id="laboratorios">
                Laboratorios en Computación
              </h4>
              <p className="col-11 justify-text">
                Tecnikids le ofrece a escuelas, colegios y universidades, un
                servicio educativo integral para el montaje y mantenimiento de
                Laboratorios de Informática y Computación de acuerdo a su
                presupuesto, con la instalación de los mejores equipos de
                tecnología.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SeparationLines />
    </div>
  );
};
