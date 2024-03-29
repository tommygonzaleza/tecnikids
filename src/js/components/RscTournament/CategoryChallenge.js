import React from "react";
import styles from "./CategoryChallenge.module.css";

const challenges = [
  {
    category: "Little space programmers",
    challenge: {
      description:
        "Crea una animación que tenga una duración de 8 segundos o más, en donde se muestren dos personajes jugando un deporte. La animación debe empezar al presionar la bandera e incluir los siguientes elementos:",
      bullets: [
        "Un personaje predefinido de scratch.",
        "Un personaje importado como imagen.",
        "Fondo en la animación.",
        "Al menos un cambio de disfraz y uno de fondo.",
        'Bloques de "decir", para representar un diálogo entre los personajes.',
        "Bloques de movimiento.",
        "Bloques de sonido.",
        'Bloques de "esperar".',
      ],
    },
  },
  {
    category: "Little space engineers",
    challenge: {
      title: "¡Dos personas se han perdido en el bosque!",
      description:
        "Crea una animación que tenga una duración de 8 segundos o más, en donde se muestre como los personajes resuelven la problematica de estar perdidos en el bosque. La animación debe iniciar al tocar la bandera verde e incluir los siguientes elementos:",
      bullets: [
        "Un personaje predefinido de Scratch.",
        "Un personaje importado como imagen (PNG).",
        "Un cambio de disfraz",
        "Un disfraz modificado, cambiando la apariencia inicial del mismo.",
        "Bloques de movimiento y bloques de girar.",
        'Bloques de "decir", representando el diálogo entre los personajes.',
        'Bloques de "mostrar" y "esconder".',
        "Bloques de sonido.",
        "Bloques de cambio de tamaño.",
        "Bloques de cambio de color.",
        "Cambios de fondo.",
        'Bloques de "esperar".',
      ],
    },
  },
  {
    category: "Master space technicians",
    challenge: {
      title: "¡Se han escapado las gallinas del corral!",
      description:
        "Crea un juego donde se controle un personaje y este regrese las gallinas al corral. El juego debe empezar al tocar la bandera y contener los siguientes elementos:",
      bullets: [
        "Un personaje importado como imagen (PNG), que sea controlado por el jugador.",
        "Un objeto que sea parte del juego (gallinas, corral, granja, etc.)",
        "El personaje debe poder moverse en alguna dirección usando botones (teclas o botones en pantalla).",
        "El personaje no puede salir de los bordes de la pantalla.",
        "El personaje debe mirar en la dirección hacia donde se dirige.",
        "Emplear operadores o sensores.",
        "Cambios de fondo.",
        "Un cambio de disfraz",
        "Un disfraz modificado, cambiando la apariencia inicial del mismo.",
        "Bloques de sonido.",
        "Bloques de apariencia.",
        'Bloques de "mostrar" y "esconder".',
        "Bloques de cambio de tamaño o color.",
      ],
    },
  },
  {
    category: "NASA technicians",
    challenge: {
      description:
        "Realiza en el simulador Tinkercad un circuito que contenga un Arduino UNO, protoboard y varios LED. Conecta y programa tu circuito de forma tal que al iniciar la simulación los LEDs titilen de una forma que represente un elemento de la vida real. Debe ser diferente a los circuitos vistos en clase. Debe considerar los siguientes puntos.",
      bullets: [
        "Mínimo de 3 LEDs.",
        "Se debe entregar un texto explicando qué elemento de la vida real representa su circuito y qué tipo de circuito está usando (serie, paralelo o mixto).",
        "Debes colocar el link de Tinkercad y el texto explicativo en un documento de Word.",
      ],
    },
  },
  {
    category: "NASA programmers",
    challenge: {
      description:
        "Realiza en el simulador Tinkercad un circuito que contenga un LED RGB, 3 potenciómetros y un botón. Conecta y programa un circuito que permita controlar la intensidad de cada color con uno de los potenciómetros. El LED debe permanecer encendido sólo mientras el botón esté presionado.",
      bullets: [
        "Se recomienda hacer uso de la función map de Arduino.",
        "Se debe idear la mejor forma de indicar al usuario que potenciómetro representa cada color.",
        ,
      ],
      notes: [
        "En esta actividad se les recomienda a los estudiantes que sean autodidactas, haciendo uso de funciones que no han visto en clase. Con el objetivo de fomentar la investigación de la documentación de Arduino y cómo aplicar lo aprendido en sus proyectos.",
      ],
    },
  },
  {
    category: "NASA specialists",
    challenge: {
      description:
        "Crea un programa en Python que pida al usuario distancia y tiempo,  luego calcule e indique cual es la velocidad del objeto en metros/segundos.",
      bullets: [
        "La distancia puede ser ingresada en cm, m y km.",
        "El tiempo se puede ingresar en segundos, minutos y horas, es importante que a la hora de hacer el cálculo de la velocidad la distancia esté en m y el tiempo en segundos.",
        "Para cumplir con el punto anterior, debes ofrecer todas las opciones posibles para que el usuario ingrese los valores en la unidad que desee y luego realizar las transformaciones pertinentes dentro del programa.",
      ],
      notes: [
        "Recuerda la fórmula del movimiento rectilíneo uniforme: v = d/t, donde v, d y t coresponden a velocidad, distancia y tiempo respectivamente.",
        "Recuerda que 1m = 100cm y 1km = 1000m.",
        "Recuerda que 1min = 60seg y 1 hora = 60min.",
      ],
    },
  },
];

const CategoryChallenge = ({ category }) => {
  let selectedChallenge = challenges.filter(
    (item) => item.category === category
  )[0].challenge;

  return (
    <div className={styles["category-challenge"]}>
      {category === "NASA technicians" || category === "NASA programmers" ? (
        <>
          <h3 className={styles.subtitle}>Importante</h3>
          <p>
            Para asegurarte que el proyecto de Tinkercad está compartido y saber
            qué link debes compartir, de manera de enviar tu clasificatoria
            correctamente ingresa a{" "}
            <a href="https://online.fliphtml5.com/zjfpz/rcbl/" target="_blank">
              {" este instructivo."}
            </a>
          </p>
        </>
      ) : (
        ""
      )}
      <h3 className={styles.title}>{`Reto ${category}`}</h3>
      <p className={styles.description}>{selectedChallenge.description}</p>
      <ul className={styles.bullets}>
        {selectedChallenge.bullets?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {selectedChallenge.notes && <h3 className={styles.subtitle}>Notas</h3>}
      <ul>
        {selectedChallenge.notes?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>
        <strong>¡Éxito!</strong>
      </p>
    </div>
  );
};

export default CategoryChallenge;
