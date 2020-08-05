import React from 'react';
import { MyNavbar } from '../components/MyNavbar';
import { MyFooter } from '../components/MyFooter';
import { SeparationLines } from '../components/SeparationLines';
import { Stadistics } from '../components/Stadistics';
import { Somos } from '../components/Somos';
import logo from '../../img/logo-1.png';

export const CompanyView = () => {
    return(
        <div className="">
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <p className="col-11 col-md-6 ml-md-0 ml-4 justify-text">
                        Somos una empresa guatemalteca que inició el sueño de integrar educación
                        y tecnología en 1995. Hoy en día en 5 países, entre ellos, Guatemala, 
                        Honduras, El Salvador, Costa Rica y en Venezuela.
                        <br />
                        <br />
                        Innovamos constantemente en el desarrollo e implementación de programas 
                        de integración curricular en el área de informática, robótica pedagógica 
                        y valores para instituciones educativas.
                        <br />
                        <br />
                        Todos nuestros servicios cuentan con el aval de instituciones 
                        internacionales de renombre, personal calificado y equipo de vanguardia.
                    </p>
                    <div className="col-md-1"></div>
                    <img className="col-12 col-md-4 mt-5 ml-md-0 ml-3 company-logo" src={logo} alt="" />
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
            <div className="container my-3">
                <div className="row col-12">
                    <h2 className="col-12 ml-md-0 ml-3">MISIÓN</h2>
                    <p className="col-10 col-md-6 ml-md-0 ml-5 justify-text">
                        Brindar soluciones en materia de tecnología educativa a través de asesoría 
                        y servicio personalizado con talento humano de excelencia.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-10 col-7"></div>
                    <h2 className="col-5 col-md-2">VISIÓN</h2>
                    <br />
                    <div className="col-md-6"></div>
                    <p className="col-10 col-md-6 ml-md-0 ml-5 justify-text">
                        Ser la empresa líder que brinde asesorías y soluciones integradas de 
                        educación y tecnología en Venezuela.
                    </p>
                </div>
            </div>
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-12 ml-md-0 ml-3">Programas</h2>
                    <h3 className="col-12 ml-md-0 ml-5 my-4" id="clases_de_informatica">
                        Delegue las clases de Computación e Informática en manos de especialistas 
                        con el Programa de Informática Educativa
                    </h3>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Tecnikids le ofrece a Escuelas y Colegios, un servicio educativo integral 
                        en la enseñanza de la Informática y Computación para estudiantes de todos 
                        los niveles, desde los primeros años de estudio (Pre-Escolar), los niveles 
                        intermedios (Primaria), bachillerato (Diversificado), hasta universitarios 
                        (Universidad).
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Trabajamos una metodología diferente e innovadora para enseñar y aprender 
                        el uso de las TICS (Tecnologías de la Información y las Comunicaciones), 
                        desarrollando competencias educativas claves a través del uso de herramientas 
                        digitales que facilitan el proceso de aprendizaje.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Somos un excelente aliado en la educación de sus estudiantes, apoyándoles en 
                        el desarrollo de habilidades, destrezas, adquisición de conocimientos y 
                        refuerzo de contenidos, así como para el desarrollo de proyectos.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Nuestro software y plataforma educativa, está diseñado por especialistas del 
                        Centro de Desarrollo Educativo IMACTIVA de Chile, quienes lo han adaptado a 
                        las necesidades, requerimientos y exigencias de los países que atendemos.
                    </p>

                    <h3 className="col-12 ml-md-0 ml-5 my-4" id="clases_de_robotica">
                        Integre clases de Robótica y aumente el potencial creativo de sus estudiantes 
                        con el Programa de Robótica Educativa
                    </h3>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Tecnikids le ofrece a Escuelas, Colegios y Universidades, un servicio educativo 
                        integral en la enseñanza de la Robótica para estudiantes de todos los niveles, 
                        desde los primeros años de estudio (Pre-Escolar), los niveles intermedios 
                        (Primaria y básicos), bachillerato (Diversificado), hasta universitarios 
                        (Universidad).
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Nuestro programa de Robótica desarrolla en los estudiantes competencias y 
                        habilidades claves para su futuro profesional, tales como el trabajo cooperativo 
                        y colaborativo en el aula, pensamiento abstracto, resolución de problemas y 
                        liderazgo.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Nuestra metodología permite integrar contenidos de matemática, medio social y 
                        natural, productividad y desarrollo entre otras materias, de una forma creativa 
                        y divertida, promoviendo la interiorización de los aprendizajes e introduciendo 
                        nuevos conceptos que complementarán y facilitarán que el estudiante logre 
                        alcanzar los objetivos y competencias planteadas para su educación.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Somos un excelente aliado en la educación de sus estudiantes, apoyándoles en el 
                        desarrollo de habilidades, destrezas, adquisición de conocimientos y refuerzo de 
                        contenidos, así como para el desarrollo de proyectos.
                    </p>

                    <h3 className="col-12 ml-md-0 ml-5 my-4" id="programa_de_valores">
                        Formemos a mejores ciudadanos y contribuyamos al desarrollo de nuestras naciones 
                        con el Programa de Valores
                    </h3>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Tecnikids le ofrece a Escuelas, Colegios y Universidades, un servicio educativo 
                        integral en la enseñanza de Valores para estudiantes de todos los niveles, 
                        desde los primeros años de estudio (Pre-Escolar), los niveles intermedios 
                        (Primaria y básicos), bachillerato (Diversificado), hasta universitarios 
                        (Universidad).
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Nuestros proyectos educativos de valores "Niños con Personalidad", 
                        "Adolescentes con Personalidad" y "Aprendiendo a Querer", promueven en la 
                        comunidad educativa que el estudiante sea protagonista de su propia vida y al 
                        mismo tiempo pueda desarrollarse integralmente en medio de la sociedad. 
                        Manejamos contenidos transversales respecto a las materias curriculares de una 
                        gran variedad de asignaturas como Ciudadanía, Ética, Psicología, Educación 
                        Audiovisual, Tutorías y Orientación Educativa.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Nuestra metodología fomenta la libre participación, generando un clima de 
                        libertad y diálogo en el aula.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Somos un excelente aliado en la educación de sus estudiantes, apoyándoles en 
                        el desarrollo de habilidades, destrezas, adquisición de conocimientos y 
                        refuerzo de contenidos, así como para el desarrollo de proyectos.
                    </p>

                    <h3 className="col-12 ml-md-0 ml-5 my-4" id="laboratorios">
                        Creamos instalaciones dotadas de los mejores equipos y tecnologías para la 
                        Educación
                    </h3>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Tecnikids le ofrece a Escuelas, Colegios, y Universidades un servicio integral 
                        para el montaje y mantenimiento de Laboratorios de Informática y Computación 
                        de acuerdo a su presupuesto.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Olvídese de tener que mantener, dar soporte y actualizar los equipos 
                        informáticos. Delegue esta tarea a especialistas. Nosotros nos encargamos 
                        de todo para que sus clases sean un éxito.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Instalamos tecnología de vanguardia que permite a los estudiantes de todas las 
                        edades optimizar tiempo dedicado al aprendizaje, disfrutando de las ventajas y 
                        recursos digitales.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Somos un excelente aliado en la educación de sus estudiantes, apoyándoles en el 
                        uso de equipos y plataformas que les ayudarán en el desarrollo de habilidades, 
                        destrezas, adquisición de conocimientos y refuerzo de contenidos, así como para 
                        el desarrollo de proyectos.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Tecnikids ofrece un servicio de cursos integrales en la tecnología incluyendo 
                        inglés, programación.
                    </p>
                    <p className="col-10 ml-md-0 p-center ml-5 justify-text">
                        Somos un excelente aliado en la educación de sus estudiantes, apoyándoles en el 
                        uso de equipos y plataformas que les ayudarán en el desarrollo de habilidades, 
                        destrezas, adquisición de conocimientos y refuerzo de contenidos, así como para 
                        el desarrollo de proyectos.
                    </p>
                </div>
            </div>
            <SeparationLines classname="mb-3"/>
            <MyFooter />
        </div>
    )
}