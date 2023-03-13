import React from "react";
import { Link } from "react-router-dom";
import CategorySelection from "../components/tournamentCategory/CategorySelection";
import { SeparationLines } from "../components/SeparationLines";
import { SlideView } from "./slideView";

export const rscClassificationViewII = () => {
  return (
    <div>
      <SeparationLines />
      <div className="container mx-auto p-sm-0 p-md-0">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <h2 className="text-blue-color font-face-cocogoose">
              ¡Vive la experiencia del II Torneo Intercolegial de Robótica de
              Venezuela!
            </h2>
          </div>
        </div>
        <div className="row mx-auto mt-lg-4">
          <iframe
            className="col-12 col-md-12 col-lg-12 mb-3 mb-md-0"
            style={{ height: "600px" }}
            src="https://www.youtube-nocookie.com/embed/-83mYxO5Ow4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-12 col-md-12 col-lg-12 mt-md-3">
          <p className="text-center">
            ¡PARTICIPA Y FORMA PARTE DE ESTA <b>GRAN EXPERIENCIA!</b>
          </p>
        </div>
        <hr style={{ border: "none", height: "1px", background: "#002C56" }} />

        <div className="row mx-auto pl-2 ml-lg-1 mt-lg-5">
          <h2 className="text-center text-uppercase mt-3 text-blue-color font-face-cocogoose">
            ¿Cómo participan los estudiantes de los colegios aliados?
          </h2>

          <p>
            El proceso estará conformado por tres fases que se describen a
            continuación:
            <br />
            <br />
            <strong>
              <b className="text-blue-color">Fase 1:</b>
            </strong>
            <span className="text-blue-color">Clasificatoria.</span>
            <br />
            <br />
            <p>
              Del 6 al 24 de febrero. En esta etapa, competirás con tus
              compañeros de colegio, donde presentarás de manera individual un
              proyecto elaborado con los programas vistos en clases.
              <br />
              <br />
              En el formulario de tu etapa correspondiente, podrás ver las
              instrucciones para participar. Recuerda que debes llenar el
              formulario únicamente cuando tengas listo tu proyecto.
            </p>
            <br />
            <b className="text-blue-color">Fase 2:</b>{" "}
            <span className="text-blue-color">
              Selección de estudiantes clasificados por colegios.
            </span>
            <br />
            <br />
            <p>
              En esta fase se escogerán los tres proyectos más destacados por
              etapa y colegio, para asistir al torneo Robotics Science
              Competition (RSC) y representar a tu institución educativa. Los
              resultados de los seleccionados serán publicados el 13 de marzo en
              nuestro sitio web.
            </p>
            <br />
            <b className="text-blue-color">Fase 3:</b>{" "}
            <span className="text-blue-color">
              Preparación previa al RSC (Robotics Science Competition)
            </span>
            <br />
            <br />
            Inicia el 13 de marzo con el anuncio de los resultados, hasta el 21
            de abril. Los clasificados se prepararán para el torneo con el apoyo
            de sus mentores, quienes los ayudarán a reforzar los conocimientos
            de robótica, mediante clases curriculares y/o sesiones adicionales.
          </p>
        </div>
        <div className="row mx-auto ml-lg-1">
          <h2 className="text-center text-uppercase mt-5 mb-5 text-blue-color font-face-cocogoose">
            Conoce el comando espacial que nos acompañará
          </h2>
          <br />
          <br />
          <div className="row mx-auto">
            <div className="col-12 text-center">
              <p>Para ver los resultados selecciona tu colegio.</p>
            </div>
          </div>
          <div className="row mx-auto justify-content-center">
            <CategorySelection />
          </div>
        </div>

        <hr style={{ border: "none", height: "1px", background: "#002C56" }} />

        <div className="row text-center text-sm-center text-md-center justify-content-lg-center">
          <h2 className="text-blue-color font-face-cocogoose">
            INSTITUCIONES PARTICIPANTES
          </h2>
        </div>
        <div>
          <div className="row mb-3">
            <div className="col-12">
              <img
                src="https://i.ibb.co/LhDNBwB/MOCKUP-PAGINA-Torneo2.png"
                className="card-img-top"
                alt="Primaria Mayor"
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <h2 className="text-center text-blue-color font-face-cocogoose">
              ¡Conoce más de nuestra experiencia en el Primer Torneo
              Intercolegial de Robótica en 2022!
            </h2>
          </div>
        </div>
        <div className="row mx-auto justify-content-center">
          <div className="col-12">
            <SlideView />
          </div>
        </div>

        <div className="row justify-content-center align-items-md-center">
          <div className="col-7 col-md-4">
            <img
              src="https://i.ibb.co/7J7Qdqr/Association-Logo-01-1.png"
              className="card-img-top"
              alt="American Robotics"
            />
          </div>
          <div className="col-7 col-md-4 logo-tk">
            <img
              src="https://i.ibb.co/Chrv5Rm/Logo-TK-Borde-Delgado.png"
              className="card-img-top"
              alt="Tecnikids"
            />
          </div>
          <div className="col-7 col-md-4">
            <img
              src="https://i.ibb.co/g46JB6Y/logo-egb4.jpg"
              className="card-img-top"
              alt="EGB4 Technologies"
            />
          </div>
        </div>
        <div className="row mx-auto justify-content-center">
          <p className="text-center mt-5">
            <b>Para más información puedes contactarnos:</b>
            <br />
            <a href="tel:+58-412-207-0246">+58 412 207 0246</a>
            <br />
            <a href="mailto:torneo.tecnikidsve@gmail.com">
              torneo.tecnikidsve@gmail.com
            </a>
          </p>
        </div>
      </div>
      <SeparationLines />
    </div>
  );
};
