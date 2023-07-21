import React from "react";
import "../../styles/index.css";
import { SeparationLines } from "../components/SeparationLines";
import styles from "./PlanVacacional.module.css";
import YouTube from "react-youtube";

export const planVacacional = () => {
  const opts = {
    height: "390",
    width: "690",
    playerVars: {
      controls: 0,
      autoPlay: 1,
      loop: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="container-fluid">
      <SeparationLines />
      <div className="container">
        <div className="row align-items-lg-center mx-0">
          <div className={`container-fluid ${styles["plan-logo"]}`}>
            <img
              src="https://i.ibb.co/bKVfCNt/Logo-Plan-Vacacional-modif-transp-1.png"
              alt="Logo-Plan-Vacacional-modif-transp-1"
              border="0"
            />
          </div>
        </div>
        <div className={styles["player-wrapper"]}>
          <YouTube videoId="Wd8_IiNpv10" opts={opts} />
        </div>
        <div className={styles["plan-info"]}>
          <h1 className="display-4 text-center font-weight-bold font-face-cocogoose">
            ¡El aprendizaje se potencia con más diversión!
          </h1>
          <h6 className=" font-weight-light font-face-poppins-regular">
            Para niños de 2 a 12 años:
          </h6>
        </div>

        <div className={styles["plan-cta"]}>
          <a href="https://forms.gle/Y4zUM8hG1RrY5i7T9">
            <div className={styles["plan-cta-item"]}>
              <div className={styles.bold}>Temporada 1:</div>{" "}
              <div>del 7 al 11 de agosto</div>
            </div>
          </a>
          <a href="https://forms.gle/Y4zUM8hG1RrY5i7T9">
            <div className={styles["plan-cta-item"]}>
              <div className={styles.bold}>Temporada 2:</div>{" "}
              <div>del 14 al 18 de agosto</div>
            </div>
          </a>
        </div>
        <div className={styles["plan-details"]}>
          <div>
            <div className={styles.bold}>Horario:</div>{" "}
            <div>8:00 AM a 1:00 PM</div>
          </div>
          <div>
            <div className={styles.bold}>Ubicación:</div>{" "}
            <div>
              Oficentro los Ruices (Piso 2 oficina P2F, la penúltima a la
              izquierda). av. Diego Cisneros, Los Ruices. Justo antes del
              distribuidor de la autopista.
            </div>
            <div className={styles.maps}>
              <a href="https://goo.gl/maps/6L2vyzGyhjrdRpQn6" target="_blank">
                Google Maps <i className="fal fa-map-pin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.division}></div>
        <div className="row mx-0">
          <div className={`container-fluid ${styles["plan-logo"]}`}>
            <img
              src="https://i.ibb.co/NY2GmL3/MOCKUP-PAGINA-plan-vacacional2.png"
              alt="MOCKUP-PAGINA-plan-vacacional2"
              border="0"
            />
          </div>
        </div>
        <div className={`${styles["plan-info"]} ${styles["academy"]}`}>
          <h1 className="display-4 text-center font-weight-bold font-face-cocogoose">
            ¡El aprendizaje se potencia con más diversión!
          </h1>
          <h6 className="font-weight-light font-face-poppins-regular text-align-center">
            El Intensivo de Academia Tecnikids Venezuela tiene como concepto
            formar a jóvenes en el ámbito de la robótica y programación durante
            el período vacacional para estudiantes de 13 a 18 años.
          </h6>
          <h6 className=" font-weight-light font-face-poppins-regular">
            Buscamos desarrollar las habilidades para el futuro, concentrándose
            el aprendizaje sobre electrónica y programación sin perder la
            diversión de verano.
          </h6>
        </div>

        <div className={`${styles["plan-cta"]} ${styles["academy-cta"]}`}>
          <a href="https://forms.gle/QmudGoxqQvmrP6vJ7">
            <div className={styles["academy-cta-item"]}>
              <div className={styles.bold}>Temporada 1:</div>{" "}
              <div>del 7 al 11 de agosto</div>
            </div>
          </a>
          <div>
            <a href="https://forms.gle/QmudGoxqQvmrP6vJ7">
              <div className={styles["academy-cta-item"]}>
                <div className={styles.bold}>Temporada 2:</div>{" "}
                <div>del 14 al 18 de agosto</div>
              </div>
            </a>
          </div>
        </div>
        <div className={`${styles["plan-details"]} ${styles["academy"]}`}>
          <div>
            <div className={styles.bold}>Horario:</div>{" "}
            <div>9:30 AM a 12:30 PM</div>
          </div>
          <div>
            <div className={styles.bold}>Ubicación:</div>{" "}
            <div>
              Oficentro los Ruices (Piso 2 oficina P2F, la penúltima a la
              izquierda). av. Diego Cisneros, Los Ruices. Justo antes del
              distribuidor de la autopista.
            </div>
            <div className={styles.maps}>
              <a href="https://goo.gl/maps/6L2vyzGyhjrdRpQn6" target="_blank">
                Google Maps <i className="fal fa-map-pin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.division}></div>
        <div className="text-justify px-4 mx-5">
          <h2
            className="font-weight-bold font-face-cocogoose"
            style={{ color: "#10418a", textAlign: "center" }}
          >
            PATROCINANTES{" "}
          </h2>

          <div className={styles.images}>
            <img src="patrocinantes/cheverePixels.jpg" />
            <img src="patrocinantes/maizoritos.png" />
            <img src="patrocinantes/grupoSelva.jpg" />
            <img src="patrocinantes/heinz.png" />
            <img src="patrocinantes/Iselitas.png" />
            <img src="patrocinantes/natulac.png" />
          </div>
        </div>
        <div className={styles.division}></div>
        <div className="row mx-0">
          <div className={styles["register-info"]}>
            <div className="">
              <img
                src="https://i.ibb.co/V3fSNVh/Metodos-de-pago-2.png"
                alt="Metodos-de-pago-2"
                border="0"
              />
            </div>
            <div className="text-justify px-4 mx-5">
              <h2
                className="font-weight-bold font-face-cocogoose"
                style={{ color: "#10418a" }}
              >
                PROCESO DE INSCRIPCIÓN
              </h2>
              <p>Pasos a seguir:</p>
              <p>
                1. Realice el pago correspondiente a Tecnikids Venezuela
                (Depósito Bancario o transferencia). Los datos se enviarán luego
                de ser llenado el formulario.
              </p>
              <p>
                2. Llene el formulario de{" "}
                <span style={{ color: "#10418a" }}>
                  "Planilla de Inscripción Academia - Tecnikids VE 2022-2023".
                </span>
                Los campos obligatorios están señalados por un asterisco, lo que
                impide que se continúe con el proceso de inscripción en caso de
                no contestarlos.
              </p>
              <p>
                3. Debe enviar el comprobante de pago al correo{" "}
                <a href="mailto:academia.tecnikidsve@gmail.com">
                  <span style={{ color: "#10418a" }}>
                    academia.tecnikidsve@gmail.com
                  </span>
                </a>{" "}
                para culminar con el proceso de inscripción y asegurar el cupo
                del participante. En el asunto debe colocar "Comprobante de
                pago" y el nombre del estudiante (OBLIGATORIO).
              </p>
              <p>Inscripciones abiertas a partir de Mayo 2023.</p>

              <p>
                LA INSCRIPCIÓN NO SERÁ CONSIDERADA COMPLETA, HASTA NO CUMPLIR
                CON TODOS LOS REQUISITOS ANTERIORMENTE SOLICITADOS. LES
                RECORDAMOS QUE LA INSCRIPCIÓN DEBE ESTAR CANCELADA EN SU
                TOTALIDAD.
              </p>
              <p>
                Para mas información puedes contactarnos Tecnikids Venezuela +58
                412 207 0246 atencionalclientetk@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <SeparationLines />
    </div>
  );
};
